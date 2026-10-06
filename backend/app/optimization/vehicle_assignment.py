"""
RakshakLogix — Vehicle Allocation & Capacity Matching Service

Manages vehicle fleet selection and capacity assignment for transport shipments:
- Filters vehicles by availability (AVAILABLE vs IN_TRANSIT / MAINTENANCE)
- Calculates multi-vehicle load allocation when shipment volume exceeds single truck capacity
- Enforces strict vehicle capacity hard constraints
"""

from __future__ import annotations

import uuid
from collections.abc import Sequence
from typing import Any


class VehicleAssignmentEngine:
    """Matches shipment requirements with available transport vehicle capacity."""

    @classmethod
    def allocate_vehicles(
        cls,
        available_vehicles: Sequence[dict[str, Any]],
        required_load_kg: float,
        source_location_id: uuid.UUID | str | None = None,
    ) -> dict[str, Any]:
        """
        Allocates available vehicles to fulfill required shipment load.

        Returns list of selected vehicles, load per vehicle, utilization, and feasibility status.
        """
        if required_load_kg <= 0.0:
            return {
                "status": "FEASIBLE",
                "allocated_vehicles": [],
                "total_allocated_capacity_kg": 0.0,
                "utilization": 1.0,
                "unfulfilled_load_kg": 0.0,
            }

        # Filter strictly available vehicles
        feasible_fleet = [
            v
            for v in available_vehicles
            if (v.get("availability_status") or "AVAILABLE").upper() == "AVAILABLE"
        ]

        if not feasible_fleet:
            return {
                "status": "NO_FEASIBLE_VEHICLE",
                "allocated_vehicles": [],
                "total_allocated_capacity_kg": 0.0,
                "utilization": 0.0,
                "unfulfilled_load_kg": required_load_kg,
                "reason": "No vehicles with status 'AVAILABLE' found in fleet.",
            }

        # Sort fleet by capacity descending (heaviest trucks first)
        sorted_fleet = sorted(
            feasible_fleet,
            key=lambda v: float(v.get("capacity_kg", 0.0)),
            reverse=True,
        )

        remaining_load = required_load_kg
        allocated = []
        total_cap = 0.0

        for veh in sorted_fleet:
            cap = float(veh.get("capacity_kg", 0.0))
            if cap <= 0.0:
                continue

            assigned = min(remaining_load, cap)
            allocated.append(
                {
                    "vehicle_id": veh["id"],
                    "vehicle_name": veh.get("name", "Transport Truck"),
                    "vehicle_type": veh.get("vehicle_type", "TRUCK"),
                    "capacity_kg": cap,
                    "allocated_load_kg": round(assigned, 1),
                    "vehicle_utilization": round(assigned / cap, 3),
                }
            )

            total_cap += cap
            remaining_load -= assigned

            if remaining_load <= 0.0:
                break

        if remaining_load > 0.0:
            return {
                "status": "NO_FEASIBLE_VEHICLE",
                "allocated_vehicles": allocated,
                "total_allocated_capacity_kg": total_cap,
                "utilization": round(required_load_kg / max(1.0, total_cap), 3),
                "unfulfilled_load_kg": round(remaining_load, 1),
                "reason": (
                    f"Total available fleet capacity ({total_cap:.1f}kg) is insufficient for "
                    f"required shipment load ({required_load_kg:.1f}kg)."
                ),
            }

        overall_util = round(
            required_load_kg / max(1.0, sum(a["capacity_kg"] for a in allocated)), 3
        )

        return {
            "status": "FEASIBLE",
            "allocated_vehicles": allocated,
            "total_allocated_capacity_kg": total_cap,
            "utilization": overall_util,
            "unfulfilled_load_kg": 0.0,
            "reason": f"Fulfills {required_load_kg:.1f}kg load across {len(allocated)} vehicle(s).",
        }
