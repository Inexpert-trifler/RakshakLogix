"""
RakshakLogix — Inventory Runway & Stockout Engine

Calculates projected inventory trajectory and estimates:
- days_to_stockout
- safety_stock_breach_date
- projected_stockout_date
- net_available_inventory (Current - Reserved + Incoming)
"""

from __future__ import annotations

from collections.abc import Sequence
from datetime import date
from typing import Any


class InventoryRunwayEngine:
    """Computes daily inventory projection and stockout metrics."""

    @classmethod
    def calculate_runway(
        cls,
        current_quantity: float,
        reserved_quantity: float,
        safety_stock: float,
        min_stock: float,
        forecast_points: Sequence[dict[str, Any]],
        incoming_shipments: Sequence[dict[str, Any]] | None = None,
        start_date: date | None = None,
    ) -> dict[str, Any]:
        """
        Calculates projected inventory runway over forecast horizon.

        `forecast_points`: list of dicts with 'target_date' and 'prediction'.
        `incoming_shipments`: list of dicts with 'arrival_date' and 'quantity'.
        """
        if start_date is None:
            start_date = date.today()

        incoming_by_date: dict[date, float] = {}
        if incoming_shipments:
            for s in incoming_shipments:
                arr = s.get("arrival_date")
                if isinstance(arr, str):
                    arr = date.fromisoformat(arr)
                if arr:
                    incoming_by_date[arr] = incoming_by_date.get(arr, 0.0) + float(
                        s.get("quantity", 0.0)
                    )

        net_starting = max(0.0, current_quantity - reserved_quantity)
        running_stock = net_starting

        days_to_stockout: float | None = None
        days_to_safety_breach: float | None = None
        safety_breach_date: date | None = None
        stockout_date: date | None = None

        daily_projections = []
        total_forecast_demand = 0.0

        sorted_points = sorted(
            forecast_points,
            key=lambda p: (
                p["target_date"]
                if isinstance(p["target_date"], date)
                else date.fromisoformat(str(p["target_date"]))
            ),
        )

        for day_idx, pt in enumerate(sorted_points, start=1):
            t_date = pt["target_date"]
            if isinstance(t_date, str):
                t_date = date.fromisoformat(t_date)

            predicted_demand = float(pt.get("prediction", 0.0))
            total_forecast_demand += predicted_demand

            inc_qty = incoming_by_date.get(t_date, 0.0)
            running_stock = running_stock + inc_qty - predicted_demand

            is_safety_breached = running_stock < safety_stock
            is_stockout = running_stock <= 0.0

            if is_safety_breached and safety_breach_date is None:
                safety_breach_date = t_date
                days_to_safety_breach = float(day_idx)

            if is_stockout and stockout_date is None:
                stockout_date = t_date
                days_to_stockout = float(day_idx)

            daily_projections.append(
                {
                    "target_date": t_date,
                    "incoming_supply": round(inc_qty, 2),
                    "predicted_demand": round(predicted_demand, 2),
                    "projected_stock": round(max(0.0, running_stock), 2),
                    "is_safety_breached": is_safety_breached,
                    "is_stockout": is_stockout,
                }
            )

        avg_daily_demand = (
            total_forecast_demand / max(1, len(sorted_points)) if sorted_points else 1.0
        )
        if days_to_stockout is None:
            # If stockout not hit within forecast horizon, extrapolate from end stock
            if running_stock > 0 and avg_daily_demand > 0:
                extrapolated = len(sorted_points) + (running_stock / avg_daily_demand)
                days_to_stockout = round(extrapolated, 1)
            else:
                days_to_stockout = 999.0

        return {
            "current_quantity": current_quantity,
            "reserved_quantity": reserved_quantity,
            "net_available_quantity": net_starting,
            "safety_stock": safety_stock,
            "min_stock": min_stock,
            "days_to_stockout": (
                round(days_to_stockout, 1) if days_to_stockout is not None else 999.0
            ),
            "days_to_safety_breach": (
                round(days_to_safety_breach, 1)
                if days_to_safety_breach is not None
                else None
            ),
            "safety_breach_date": safety_breach_date,
            "stockout_date": stockout_date,
            "projected_end_stock": round(max(0.0, running_stock), 2),
            "projections": daily_projections,
        }
