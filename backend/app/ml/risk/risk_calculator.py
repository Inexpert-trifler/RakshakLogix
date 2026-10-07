"""
RakshakLogix — Composite Risk Engine & Factor Explanations

Calculates explainable risk score (0-100) based on weighted factors:
- Inventory Risk: 30%
- Demand Uncertainty: 20%
- Weather Risk: 20%
- Route Risk: 15%
- Delivery Risk: 15%
"""

from __future__ import annotations

from typing import Any


class CompositeRiskCalculator:
    """Calculates explainable composite risk scores and factor breakdowns."""

    DEFAULT_WEIGHTS = {
        "inventory": 0.30,
        "demand_uncertainty": 0.20,
        "weather": 0.20,
        "route": 0.15,
        "delivery": 0.15,
    }

    @classmethod
    def calculate_risk(
        cls,
        days_to_stockout: float,
        is_safety_breached: bool,
        demand_cv: float = 0.15,
        weather_severity: str = "LOW",
        route_risk_score: float = 0.10,
        delivery_delay_hours: float = 0.0,
        custom_weights: dict[str, float] | None = None,
    ) -> dict[str, Any]:
        """
        Calculates location & supply item composite risk.

        Returns score (0 to 100), severity, factor breakdown, and dynamic explanation.
        """
        weights = custom_weights or cls.DEFAULT_WEIGHTS

        # 1. Inventory Factor (0 - 100)
        if days_to_stockout <= 1.0:
            inv_factor = 100.0
        elif days_to_stockout <= 3.0:
            inv_factor = 85.0
        elif days_to_stockout <= 7.0:
            inv_factor = 60.0
        elif days_to_stockout <= 14.0:
            inv_factor = 35.0
        else:
            inv_factor = 10.0

        if is_safety_breached:
            inv_factor = max(inv_factor, 75.0)

        # 2. Demand Uncertainty Factor (0 - 100)
        demand_factor = min(100.0, max(0.0, demand_cv * 250.0))

        # 3. Weather Risk Factor (0 - 100)
        w_map = {"LOW": 10.0, "MODERATE": 40.0, "SEVERE": 75.0, "EXTREME": 95.0}
        weather_factor = w_map.get(weather_severity.upper(), 15.0)

        # 4. Route Risk Factor (0 - 100)
        route_factor = min(100.0, max(0.0, route_risk_score * 100.0))

        # 5. Delivery Delay Risk Factor (0 - 100)
        if delivery_delay_hours <= 0:
            delivery_factor = 10.0
        elif delivery_delay_hours <= 12:
            delivery_factor = 40.0
        elif delivery_delay_hours <= 48:
            delivery_factor = 75.0
        else:
            delivery_factor = 95.0

        # Calculate composite weighted risk score
        risk_score = round(
            inv_factor * weights["inventory"]
            + demand_factor * weights["demand_uncertainty"]
            + weather_factor * weights["weather"]
            + route_factor * weights["route"]
            + delivery_factor * weights["delivery"],
            1,
        )

        # Classify severity
        if risk_score >= 75.0:
            severity = "CRITICAL"
        elif risk_score >= 50.0:
            severity = "HIGH"
        elif risk_score >= 25.0:
            severity = "MODERATE"
        else:
            severity = "LOW"

        # Generate dynamic explanation
        reasons = []
        if days_to_stockout <= 3.0:
            reasons.append(f"Imminent stockout projected in {days_to_stockout:.1f} days.")
        elif is_safety_breached:
            reasons.append("Current inventory is projected below safety stock threshold.")

        if demand_cv >= 0.3:
            reasons.append("High demand volatility / spike detected in recent consumption history.")

        if weather_severity.upper() in ("SEVERE", "EXTREME"):
            reasons.append(
                f"{weather_severity.capitalize()} weather conditions along transport corridor."
            )

        if route_risk_score >= 0.5:
            reasons.append(f"Elevated terrain/road risk on supply route ({route_risk_score:.2f}).")

        if delivery_delay_hours >= 12.0:
            reasons.append(
                f"Incoming shipment delayed by approximately {delivery_delay_hours:.1f} hours."
            )

        if not reasons:
            reasons.append(
                "Supply levels and logistics corridor remain stable with standard operating parameters."
            )

        explanation = f"Risk: {severity}. Primary contributors:\n" + "\n".join(
            f"{i + 1}. {r}" for i, r in enumerate(reasons)
        )

        return {
            "risk_score": int(round(risk_score)),
            "severity": severity,
            "factors": {
                "inventory": int(round(inv_factor)),
                "demand_uncertainty": int(round(demand_factor)),
                "weather": int(round(weather_factor)),
                "route": int(round(route_factor)),
                "delivery": int(round(delivery_factor)),
            },
            "explanation": explanation,
        }
