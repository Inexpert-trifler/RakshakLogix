"""
RakshakLogix — Composite Risk Engine

Computes explainable risk scores for locations, routes, and shipments.
Illustrative MVP weights per documentation:
- Inventory runway risk: 30%
- Demand uncertainty: 20%
- Severe weather: 20%
- Route terrain & road risk: 15%
- Delivery delay risk: 15%
"""

from __future__ import annotations

from typing import Any


class CompositeRiskEngine:
    DEFAULT_WEIGHTS = {
        "inventory": 0.30,
        "demand_uncertainty": 0.20,
        "weather": 0.20,
        "route": 0.15,
        "delivery": 0.15,
    }

    @classmethod
    def calculate_location_risk(
        cls,
        available_quantity: float,
        safety_stock: float,
        daily_avg_consumption: float,
        weather_severity: str = "LOW",
        custom_weights: dict[str, float] | None = None,
    ) -> dict[str, Any]:
        """
        Calculates location stockout and environmental risk.
        Returns score (0.0 to 1.0), severity, and human-readable breakdown.
        """
        weights = custom_weights or cls.DEFAULT_WEIGHTS

        # 1. Inventory Runway Risk (0.0 - 1.0)
        runway_days = available_quantity / max(0.1, daily_avg_consumption)
        if runway_days <= 1.0:
            inv_score = 1.0
        elif runway_days <= 3.0:
            inv_score = 0.8
        elif runway_days <= 7.0:
            inv_score = 0.5
        elif runway_days <= 14.0:
            inv_score = 0.2
        else:
            inv_score = 0.0

        if available_quantity < safety_stock:
            inv_score = max(inv_score, 0.7)

        # 2. Demand Uncertainty Risk
        demand_score = 0.3 if daily_avg_consumption > 0 else 0.8

        # 3. Weather Risk
        weather_map = {"LOW": 0.0, "MODERATE": 0.3, "SEVERE": 0.7, "EXTREME": 1.0}
        weather_score = weather_map.get(weather_severity.upper(), 0.1)

        # 4. Route & Delivery baseline assumptions for location
        route_score = 0.1
        delivery_score = 0.1

        # Composite score
        total_score = (
            inv_score * weights["inventory"]
            + demand_score * weights["demand_uncertainty"]
            + weather_score * weights["weather"]
            + route_score * weights["route"]
            + delivery_score * weights["delivery"]
        )

        total_score = min(1.0, max(0.0, total_score))

        # Determine severity label
        if total_score >= 0.75:
            severity = "CRITICAL"
        elif total_score >= 0.5:
            severity = "HIGH"
        elif total_score >= 0.25:
            severity = "MODERATE"
        else:
            severity = "LOW"

        return {
            "score": round(total_score, 3),
            "severity": severity,
            "explanation": {
                "runway_days": round(runway_days, 1),
                "available_quantity": available_quantity,
                "safety_stock": safety_stock,
                "inventory_risk": inv_score,
                "demand_uncertainty_risk": demand_score,
                "weather_risk": weather_score,
                "weights_used": weights,
            },
        }

    @classmethod
    def calculate_route_risk(
        cls,
        base_risk_score: float,
        terrain_risk: float,
        road_risk: float,
        weather_severity: str = "LOW",
    ) -> dict[str, Any]:
        """Calculates dynamic route risk score."""
        weather_map = {"LOW": 0.0, "MODERATE": 0.25, "SEVERE": 0.6, "EXTREME": 0.9}
        w_score = weather_map.get(weather_severity.upper(), 0.0)

        composite = base_risk_score * 0.4 + terrain_risk * 0.25 + road_risk * 0.20 + w_score * 0.15
        composite = min(1.0, max(0.0, composite))

        if composite >= 0.75:
            severity = "CRITICAL"
        elif composite >= 0.5:
            severity = "HIGH"
        elif composite >= 0.25:
            severity = "MODERATE"
        else:
            severity = "LOW"

        return {
            "score": round(composite, 3),
            "severity": severity,
            "explanation": {
                "base_risk": base_risk_score,
                "terrain_risk": terrain_risk,
                "road_risk": road_risk,
                "weather_risk": w_score,
            },
        }
