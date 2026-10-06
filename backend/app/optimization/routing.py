"""
RakshakLogix — Logistics Route & Vehicle Optimization Engine

Graph-based route optimization engine using NetworkX:
- Builds network graph from locations and route segments.
- Computes k-shortest paths balancing distance, travel time, and risk score.
- Applies hard constraints (vehicle capacity, blocked routes).
- Evaluates soft constraints (ETA, reliability, terrain risk).
- Returns ranked candidate options with clear explainability reasons.
"""

from __future__ import annotations

import uuid
from collections.abc import Sequence
from typing import Any

import networkx as nx


class RouteOptimizer:

    @classmethod
    def optimize_route(
        cls,
        locations: Sequence[dict[str, Any]],
        routes: Sequence[dict[str, Any]],
        source_id: uuid.UUID | str,
        destination_id: uuid.UUID | str,
        shipment_weight_kg: float = 0.0,
        vehicle_capacity_kg: float | None = None,
        max_risk_tolerance: float = 0.8,
        avoid_blocked_routes: bool = True,
    ) -> dict[str, Any]:
        """
        Calculates optimal forward logistics route options.
        """
        source_str = str(source_id)
        dest_str = str(destination_id)

        # Build NetworkX MultiDiGraph
        G = nx.DiGraph()

        for loc in locations:
            G.add_node(
                str(loc["id"]),
                name=loc.get("name", "Unknown"),
                type=loc.get("type", "HUB"),
            )

        for r in routes:
            r_status = r.get("status", "ACTIVE")
            if avoid_blocked_routes and r_status == "BLOCKED":
                continue

            base_risk = float(r.get("base_risk_score", 0.0))
            if avoid_blocked_routes and base_risk > max_risk_tolerance:
                continue

            for seg in r.get("segments", []):
                u = str(seg["from_location_id"])
                v = str(seg["to_location_id"])
                dist = float(seg.get("distance_km", 10.0))
                t_hours = float(seg.get("travel_time_hours", 0.5))
                terrain = float(seg.get("terrain_risk", 0.0))
                road = float(seg.get("road_risk", 0.0))

                # Segment composite risk
                seg_risk = min(1.0, base_risk * 0.4 + terrain * 0.3 + road * 0.3)

                # Multi-objective weight for shortest path: distance + risk penalty
                weight = dist * (1.0 + seg_risk * 2.0)

                G.add_edge(
                    u,
                    v,
                    route_id=r.get("id"),
                    route_name=r.get("name", "Route"),
                    distance_km=dist,
                    travel_time_hours=t_hours,
                    risk_score=seg_risk,
                    weight=weight,
                )

        if not G.has_node(source_str) or not G.has_node(dest_str):
            return {
                "recommended_option": None,
                "alternative_options": [],
                "reasoning": [
                    "Source or destination location not found in active logistics network."
                ],
            }

        # Check vehicle capacity hard constraint
        capacity_exceeded = False
        if vehicle_capacity_kg is not None and shipment_weight_kg > vehicle_capacity_kg:
            capacity_exceeded = True

        # Find k-shortest simple paths
        candidates = []
        try:
            raw_paths = list(
                nx.shortest_simple_paths(G, source_str, dest_str, weight="weight")
            )[:5]
        except (nx.NetworkXNoPath, nx.NodeNotFound):
            raw_paths = []

        for idx, path in enumerate(raw_paths):
            total_dist = 0.0
            total_time = 0.0
            max_segment_risk = 0.0
            segment_risks = []
            route_names = set()

            for i in range(len(path) - 1):
                u, v = path[i], path[i + 1]
                edge = G[u][v]
                total_dist += edge["distance_km"]
                total_time += edge["travel_time_hours"]
                r_risk = edge["risk_score"]
                segment_risks.append(r_risk)
                max_segment_risk = max(max_segment_risk, r_risk)
                route_names.add(edge["route_name"])

            avg_risk = sum(segment_risks) / max(1, len(segment_risks))
            composite_risk = round(avg_risk * 0.6 + max_segment_risk * 0.4, 3)

            reasons = []
            if capacity_exceeded:
                feasibility = "UNFEASIBLE"
                reasons.append(
                    f"Shipment weight ({shipment_weight_kg}kg) exceeds vehicle capacity ({vehicle_capacity_kg}kg)."
                )
            elif composite_risk > max_risk_tolerance:
                feasibility = "HIGH_RISK"
                reasons.append(
                    f"Route risk score ({composite_risk}) exceeds max risk tolerance threshold ({max_risk_tolerance})."
                )
            else:
                feasibility = "FEASIBLE"
                reasons.append(f"Feasible path via {', '.join(route_names)}.")
                reasons.append(
                    f"Estimated transit time: {round(total_time, 1)} hours over {round(total_dist, 1)} km."
                )

            candidates.append(
                {
                    "route_id": uuid.uuid4(),
                    "name": (
                        " → ".join(route_names) if route_names else f"Option {idx+1}"
                    ),
                    "total_distance_km": round(total_dist, 1),
                    "total_travel_time_hours": round(total_time, 1),
                    "risk_score": composite_risk,
                    "feasibility_status": feasibility,
                    "reasoning": reasons,
                }
            )

        # Rank candidates: FEASIBLE first, then by lowest risk, then by lowest travel time
        candidates.sort(
            key=lambda x: (
                (
                    0
                    if x["feasibility_status"] == "FEASIBLE"
                    else 1 if x["feasibility_status"] == "HIGH_RISK" else 2
                ),
                x["risk_score"],
                x["total_travel_time_hours"],
            )
        )

        recommended = candidates[0] if candidates else None
        alternatives = candidates[1:] if len(candidates) > 1 else []

        return {
            "source_location_id": source_id,
            "destination_location_id": destination_id,
            "recommended_option": recommended,
            "alternative_options": alternatives,
        }
