"""
RakshakLogix — Google OR-Tools Constrained Logistics Solver

Uses Google OR-Tools Mixed-Integer Programming (MIP) solver:
- Hard Constraints: Vehicle capacity bounds, fleet availability, source stock, blocked paths.
- Soft Constraints & Objective: Multi-objective minimization (distance + transit time + corridor risk - capacity utilization).
"""

from __future__ import annotations

from collections.abc import Sequence
from typing import Any

from ortools.linear_solver import pywraplp


class ORToolsLogisticsSolver:
    """Constrained optimization solver utilizing Google OR-Tools Linear/MIP Solver."""

    @classmethod
    def solve_shipment_optimization(
        cls,
        required_quantity: float,
        available_source_inventory: float,
        available_vehicles: Sequence[dict[str, Any]],
        candidate_paths: Sequence[dict[str, Any]],
        max_risk_tolerance: float = 0.8,
    ) -> dict[str, Any]:
        """
        Solves multi-vehicle allocation and path selection optimization problem.

        `candidate_paths`: list of dicts with 'path_nodes', 'total_distance_km', 'total_travel_time_hours', 'combined_risk_score'.
        """
        if available_source_inventory < required_quantity:
            return {
                "status": "INSUFFICIENT_SOURCE_INVENTORY",
                "solver_status": "INFEASIBLE",
                "reason": (
                    f"Required replenishment ({required_quantity:.1f}) exceeds available "
                    f"source stock ({available_source_inventory:.1f})."
                ),
            }

        feasible_vehicles = [
            v
            for v in available_vehicles
            if (v.get("availability_status") or "AVAILABLE").upper() == "AVAILABLE"
        ]

        if not feasible_vehicles:
            return {
                "status": "NO_FEASIBLE_VEHICLE",
                "solver_status": "INFEASIBLE",
                "reason": "No transport vehicles available in fleet.",
            }

        if not candidate_paths:
            return {
                "status": "NO_FEASIBLE_ROUTE",
                "solver_status": "INFEASIBLE",
                "reason": "No valid route paths exist between source and destination.",
            }

        # Initialize OR-Tools MIP solver (SCIP or CBC)
        solver = pywraplp.Solver.CreateSolver("SCIP")
        if not solver:
            solver = pywraplp.Solver.CreateSolver("CBC")
        if not solver:
            solver = pywraplp.Solver.CreateSolver("GLOP")

        if not solver:
            return {
                "status": "SOLVER_ERROR",
                "solver_status": "ERROR",
                "reason": "Google OR-Tools solver backend initialization failed.",
            }

        num_vehicles = len(feasible_vehicles)
        num_paths = len(candidate_paths)

        # Decision variables:
        # x_v in {0, 1}: whether vehicle v is selected
        # load_v in [0, capacity_v]: quantity loaded on vehicle v
        x_v = [solver.BoolVar(f"x_{i}") for i in range(num_vehicles)]
        load_v = [
            solver.NumVar(
                0.0,
                float(feasible_vehicles[i].get("capacity_kg", 10000.0)),
                f"load_{i}",
            )
            for i in range(num_vehicles)
        ]

        # y_k in {0, 1}: whether path k is selected
        y_k = [solver.BoolVar(f"y_{j}") for j in range(num_paths)]

        # Constraint 1: Total allocated load == required_quantity
        solver.Add(solver.Sum(load_v) == required_quantity)

        # Constraint 2: Vehicle load bound (load_v <= capacity_v * x_v)
        for i in range(num_vehicles):
            cap = float(feasible_vehicles[i].get("capacity_kg", 0.0))
            solver.Add(load_v[i] <= cap * x_v[i])

        # Constraint 3: Exactly 1 path choice must be selected
        solver.Add(solver.Sum(y_k) == 1)

        # Constraint 4: Blocked / High risk paths must not be chosen if risk > threshold
        for j in range(num_paths):
            p_risk = float(candidate_paths[j].get("combined_risk_score", 0.0))
            if p_risk > max_risk_tolerance:
                solver.Add(y_k[j] == 0)

        # Objective Function:
        # Minimize: Sum over k of y_k * (dist_k * 0.5 + time_k * 2.0 + risk_k * 50.0) + Sum over v of x_v * 10.0 - Sum over v of load_v * 0.01
        objective = solver.Objective()
        for j in range(num_paths):
            cp = candidate_paths[j]
            dist = float(cp.get("total_distance_km", 0.0))
            t_hours = float(cp.get("total_travel_time_hours", 0.0))
            r_score = float(cp.get("combined_risk_score", 0.0))
            path_cost = (dist * 0.5) + (t_hours * 2.0) + (r_score * 50.0)
            objective.SetCoefficient(y_k[j], path_cost)

        for i in range(num_vehicles):
            objective.SetCoefficient(x_v[i], 10.0)

        objective.SetMinimization()

        solve_status = solver.Solve()

        if solve_status not in (pywraplp.Solver.OPTIMAL, pywraplp.Solver.FEASIBLE):
            return {
                "status": "NO_FEASIBLE_PLAN",
                "solver_status": "INFEASIBLE",
                "reason": "Google OR-Tools solver determined problem is infeasible under current constraints.",
            }

        # Extract selected path
        selected_path_idx = 0
        for j in range(num_paths):
            if y_k[j].solution_value() > 0.5:
                selected_path_idx = j
                break

        selected_path = candidate_paths[selected_path_idx]

        # Extract selected vehicles
        allocated_vehicles = []
        total_allocated_cap = 0.0
        for i in range(num_vehicles):
            if x_v[i].solution_value() > 0.5 and load_v[i].solution_value() > 0.001:
                veh = feasible_vehicles[i]
                cap = float(veh.get("capacity_kg", 0.0))
                l_val = float(load_v[i].solution_value())
                allocated_vehicles.append(
                    {
                        "vehicle_id": veh["id"],
                        "vehicle_name": veh.get("name", "Transport Truck"),
                        "vehicle_type": veh.get("vehicle_type", "TRUCK"),
                        "capacity_kg": cap,
                        "allocated_load_kg": round(l_val, 1),
                        "vehicle_utilization": round(l_val / max(1.0, cap), 3),
                    }
                )
                total_allocated_cap += cap

        overall_utilization = (
            round(required_quantity / max(1.0, total_allocated_cap), 3)
            if total_allocated_cap > 0
            else 0.0
        )

        return {
            "status": "FEASIBLE",
            "solver_status": (
                "OPTIMAL" if solve_status == pywraplp.Solver.OPTIMAL else "FEASIBLE"
            ),
            "selected_path": selected_path,
            "allocated_vehicles": allocated_vehicles,
            "total_allocated_capacity_kg": total_allocated_cap,
            "utilization": overall_utilization,
            "objective_value": round(solver.Objective().Value(), 2),
        }
