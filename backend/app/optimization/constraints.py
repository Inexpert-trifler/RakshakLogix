"""
RakshakLogix — Optimization Constraints & Feasibility Validator

Distinguishes and enforces:
- HARD Constraints (Must never be violated: capacity, availability, inventory, blocked routes)
- SOFT Constraints (Trade-offs: distance, travel time, risk, utilization)
"""

from __future__ import annotations

from collections.abc import Sequence
from typing import Any


class OptimizationConstraintValidator:
    """Validates transportation plans against hard and soft logistics constraints."""

    HARD_CONSTRAINTS = [
        "VEHICLE_CAPACITY",
        "VEHICLE_AVAILABILITY",
        "VALID_SOURCE_INVENTORY",
        "BLOCKED_ROUTE_EXCLUSION",
    ]

    SOFT_CONSTRAINTS = [
        "MINIMIZE_DISTANCE",
        "MINIMIZE_TRAVEL_TIME",
        "MINIMIZE_CORRIDOR_RISK",
        "MAXIMIZE_CAPACITY_UTILIZATION",
    ]

    @classmethod
    def validate_plan(
        cls,
        source_inventory_qty: float,
        required_qty: float,
        allocated_vehicles: Sequence[dict[str, Any]],
        path_segments: Sequence[dict[str, Any]],
        max_risk_tolerance: float = 0.8,
    ) -> dict[str, Any]:
        """
        Evaluates hard constraints and reports violations or feasibility.
        """
        violations = []
        warnings = []
        passed_constraints = []

        # 1. HARD: Source Inventory
        if source_inventory_qty < required_qty:
            violations.append(
                f"INSUFFICIENT_SOURCE_INVENTORY: Source has {source_inventory_qty:.1f} units available, "
                f"but {required_qty:.1f} units are required for replenishment."
            )
        else:
            passed_constraints.append("VALID_SOURCE_INVENTORY")

        # 2. HARD: Vehicle Availability & Capacity
        if not allocated_vehicles:
            violations.append(
                "NO_FEASIBLE_VEHICLE: No available vehicles allocated to transport requirement."
            )
        else:
            for veh in allocated_vehicles:
                v_cap = float(veh.get("capacity_kg", 0.0))
                v_load = float(veh.get("allocated_load_kg", 0.0))
                if v_load > v_cap:
                    violations.append(
                        f"VEHICLE_CAPACITY_EXCEEDED: Vehicle '{veh.get('vehicle_name')}' allocated {v_load:.1f}kg "
                        f"exceeds maximum capacity of {v_cap:.1f}kg."
                    )

            if not violations:
                passed_constraints.append("VEHICLE_CAPACITY")
                passed_constraints.append("VEHICLE_AVAILABILITY")

        # 3. HARD: Blocked Route Exclusion
        for seg in path_segments:
            r_status = (
                seg.get("route_status") or seg.get("status") or "ACTIVE"
            ).upper()
            if r_status == "BLOCKED":
                violations.append(
                    f"BLOCKED_ROUTE_EXCLUSION: Path utilizes blocked route segment '{seg.get('route_name', 'Corridor')}'."
                )

        if "BLOCKED_ROUTE_EXCLUSION" not in [v.split(":")[0] for v in violations]:
            passed_constraints.append("BLOCKED_ROUTE_EXCLUSION")

        # Soft Constraint Warnings / Risk Tolerances
        for seg in path_segments:
            seg_risk = float(seg.get("risk_score", 0.0))
            if seg_risk > max_risk_tolerance:
                warnings.append(
                    f"HIGH_RISK_CORRIDOR: Segment '{seg.get('route_name')}' risk {seg_risk:.2f} "
                    f"exceeds preferred tolerance threshold of {max_risk_tolerance:.2f}."
                )

        is_feasible = len(violations) == 0

        return {
            "is_feasible": is_feasible,
            "status": "FEASIBLE" if is_feasible else violations[0].split(":")[0],
            "hard_violations": violations,
            "soft_warnings": warnings,
            "passed_hard_constraints": passed_constraints,
        }
