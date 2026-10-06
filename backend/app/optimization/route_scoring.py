"""
RakshakLogix — Multi-Criteria Route Scoring Service

Evaluates route options considering:
- Distance & travel time (ETA)
- Corridor reliability
- Terrain & road risk
- Weather severity score
- Shipment priority weighting (URGENT, ROUTINE)
"""

from __future__ import annotations

from typing import Any

import networkx as nx


class RouteScorer:
    """Calculates multi-attribute route feasibility, risk, and utility scores."""

    DEFAULT_WEIGHTS = {
        "distance": 0.25,
        "travel_time": 0.25,
        "terrain_road_risk": 0.20,
        "weather_risk": 0.15,
        "reliability": 0.15,
    }

    @classmethod
    def score_path(
        cls,
        G: nx.DiGraph,
        path_nodes: list[str],
        weather_risk_score: float = 0.1,
        priority: str = "ROUTINE",
        custom_weights: dict[str, float] | None = None,
    ) -> dict[str, Any]:
        """Scores a path sequence in the graph."""
        weights = custom_weights or cls.DEFAULT_WEIGHTS
        path = path_nodes

        p_upper = priority.upper()
        if p_upper == "URGENT":
            weights = {
                "distance": 0.15,
                "travel_time": 0.40,
                "terrain_road_risk": 0.15,
                "weather_risk": 0.15,
                "reliability": 0.15,
            }

        total_dist = 0.0
        total_time = 0.0
        segment_risks = []
        route_names = set()
        route_ids = set()

        for i in range(len(path) - 1):
            u, v = path[i], path[i + 1]
            edge = G[u][v]
            total_dist += edge.get("distance_km", 0.0)
            total_time += edge.get("travel_time_hours", 0.0)
            seg_r = edge.get("risk_score", 0.0)
            segment_risks.append(seg_r)
            route_names.add(edge.get("route_name", "Route"))
            if edge.get("route_id"):
                route_ids.add(edge.get("route_id"))

        avg_seg_risk = sum(segment_risks) / max(1, len(segment_risks))
        max_seg_risk = max(segment_risks) if segment_risks else 0.0

        # Composite route risk (0.0 to 1.0)
        route_risk = round(avg_seg_risk * 0.6 + max_seg_risk * 0.4, 3)

        # Combine route risk with weather risk
        combined_risk = round(min(1.0, route_risk * 0.7 + weather_risk_score * 0.3), 3)

        # Composite utility score (0 to 100, higher is better)
        dist_utility = max(0.0, 100.0 - (total_dist * 0.3))
        time_utility = max(0.0, 100.0 - (total_time * 5.0))
        risk_utility = max(0.0, 100.0 - (combined_risk * 100.0))

        overall_score = round(
            dist_utility * weights["distance"]
            + time_utility * weights["travel_time"]
            + risk_utility * (weights["terrain_road_risk"] + weights["weather_risk"]),
            1,
        )

        return {
            "path_nodes": path,
            "route_ids": list(route_ids),
            "route_names": list(route_names),
            "total_distance_km": round(total_dist, 1),
            "total_travel_time_hours": round(total_time, 1),
            "route_risk_score": route_risk,
            "combined_risk_score": combined_risk,
            "overall_score": overall_score,
            "factors": {
                "distance_utility": round(dist_utility, 1),
                "time_utility": round(time_utility, 1),
                "risk_utility": round(risk_utility, 1),
                "weather_risk": weather_risk_score,
            },
        }
