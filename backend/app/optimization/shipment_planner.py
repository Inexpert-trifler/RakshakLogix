"""
RakshakLogix — End-to-End Shipment Planner & Source Selector

Integrates Phase 2 inventory intelligence with Phase 3 transportation optimization:
Inventory Risk / Shortage → Replenishment Need → Source Selection → Vehicle Allocation → OR-Tools Routing → Multi-Plan Option Output
"""

from __future__ import annotations

import uuid
from collections.abc import Sequence
from typing import Any

from app.optimization.constraints import OptimizationConstraintValidator
from app.optimization.graph import RouteGraphBuilder
from app.optimization.route_scoring import RouteScorer
from app.optimization.vrp import ORToolsLogisticsSolver


class ShipmentPlanner:
    """Orchestrates end-to-end transportation planning and multi-option recommendations."""

    @classmethod
    def plan_replenishment(
        cls,
        destination_location_id: uuid.UUID | str,
        destination_name: str,
        items_requested: Sequence[dict[str, Any]],
        available_locations: Sequence[dict[str, Any]],
        available_inventories: Sequence[dict[str, Any]],
        available_vehicles: Sequence[dict[str, Any]],
        available_routes: Sequence[dict[str, Any]],
        weather_risk_map: dict[str, float] | None = None,
        priority: str = "ROUTINE",
        max_risk_tolerance: float = 0.8,
        avoid_blocked_routes: bool = True,
    ) -> dict[str, Any]:
        """
        Generates optimal replenishment transport plans across candidate sources and routes.
        """
        dest_str = str(destination_location_id)
        total_req_load = sum(float(it.get("quantity", 0.0)) for it in items_requested)

        if total_req_load <= 0.0:
            return {
                "status": "INVALID_REQUEST",
                "recommended_plan": None,
                "alternative_plans": [],
                "reasoning": [
                    "Requested replenishment quantity must be greater than zero."
                ],
            }

        # 1. Identify Candidate Source Locations with Sufficient Stock
        candidate_sources = []
        inv_by_loc: dict[str, float] = {}

        for inv in available_inventories:
            loc_id = str(inv.get("location_id"))
            if loc_id == dest_str:
                continue
            avail = float(inv.get("available_quantity", inv.get("quantity", 0.0)))
            inv_by_loc[loc_id] = inv_by_loc.get(loc_id, 0.0) + avail

        for loc in available_locations:
            loc_id = str(loc["id"])
            if loc_id == dest_str:
                continue
            stock = inv_by_loc.get(loc_id, 0.0)
            if stock >= total_req_load:
                candidate_sources.append((loc, stock))

        if not candidate_sources:
            return {
                "status": "INSUFFICIENT_SOURCE_INVENTORY",
                "recommended_plan": None,
                "alternative_plans": [],
                "reasoning": [
                    f"No candidate supply depot/hub has sufficient available stock ({total_req_load:.1f} units required)."
                ],
            }

        # Build NetworkX Logistics Graph
        G = RouteGraphBuilder.build_graph(
            locations=available_locations,
            routes=available_routes,
            avoid_blocked_routes=avoid_blocked_routes,
            max_risk_tolerance=max_risk_tolerance,
        )

        all_candidate_plans = []

        for src_loc, src_stock in candidate_sources:
            src_id = str(src_loc["id"])
            src_name = src_loc.get("name", "Supply Depot")

            raw_paths = RouteGraphBuilder.find_candidate_paths(
                G, source_id=src_id, destination_id=dest_str, max_paths=3
            )
            if not raw_paths:
                continue

            scored_paths = []
            for path_nodes in raw_paths:
                w_risk = (weather_risk_map or {}).get(src_id, 0.1)
                sp = RouteScorer.score_path(
                    G,
                    path_nodes=path_nodes,
                    weather_risk_score=w_risk,
                    priority=priority,
                )
                scored_paths.append(sp)

            # Solve via OR-Tools solver
            solver_res = ORToolsLogisticsSolver.solve_shipment_optimization(
                required_quantity=total_req_load,
                available_source_inventory=src_stock,
                available_vehicles=available_vehicles,
                candidate_paths=scored_paths,
                max_risk_tolerance=max_risk_tolerance,
            )

            if solver_res["status"] in ("FEASIBLE", "OPTIMAL"):
                sel_path = solver_res["selected_path"]
                alloc_vehs = solver_res["allocated_vehicles"]

                # Validate constraints
                c_val = OptimizationConstraintValidator.validate_plan(
                    source_inventory_qty=src_stock,
                    required_qty=total_req_load,
                    allocated_vehicles=alloc_vehs,
                    path_segments=[],
                    max_risk_tolerance=max_risk_tolerance,
                )

                # Generate dynamic explainable reasoning
                veh_names = ", ".join(v["vehicle_name"] for v in alloc_vehs)
                r_names = ", ".join(sel_path["route_names"])
                reasons = [
                    f"Source '{src_name}' has sufficient stock ({src_stock:.1f} units available).",
                    f"Selected vehicle(s) [{veh_names}] provide {solver_res['total_allocated_capacity_kg']:.1f}kg total capacity.",
                    f"Route corridor [{r_names}] selected with risk score {sel_path['combined_risk_score']:.2f}.",
                    f"Estimated transit time: {sel_path['total_travel_time_hours']:.1f} hours over {sel_path['total_distance_km']:.1f} km.",
                    f"Capacity utilization rate: {int(solver_res['utilization'] * 100)}%.",
                ]

                all_candidate_plans.append(
                    {
                        "source_location_id": src_id,
                        "source_location_name": src_name,
                        "destination_location_id": dest_str,
                        "destination_location_name": destination_name,
                        "vehicles": alloc_vehs,
                        "route_names": sel_path["route_names"],
                        "distance_km": sel_path["total_distance_km"],
                        "estimated_eta_hours": sel_path["total_travel_time_hours"],
                        "risk_score": int(round(sel_path["combined_risk_score"] * 100)),
                        "utilization": solver_res["utilization"],
                        "overall_score": sel_path["overall_score"],
                        "feasibility_status": "FEASIBLE",
                        "reasoning": reasons,
                    }
                )

        if not all_candidate_plans:
            return {
                "status": "NO_FEASIBLE_PLAN",
                "recommended_plan": None,
                "alternative_plans": [],
                "reasoning": [
                    "No feasible route and vehicle allocation plan could be constructed under active constraints."
                ],
            }

        # Rank candidate plans by overall score descending
        all_candidate_plans.sort(
            key=lambda p: (p["overall_score"], -p["risk_score"]), reverse=True
        )

        recommended = all_candidate_plans[0]
        alternatives = all_candidate_plans[1:3]

        return {
            "status": "FEASIBLE",
            "recommended_plan": recommended,
            "alternative_plans": alternatives,
            "reasoning": recommended["reasoning"],
        }
