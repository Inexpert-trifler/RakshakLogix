"""
RakshakLogix — NetworkX Route Graph Builder

Constructs graph representations of forward logistics corridors:
- Nodes: Locations (Depots, Hubs, Forward Sites)
- Edges: Route segments (distance, travel time, terrain risk, road risk, status)
- Connectivity analysis & k-shortest simple paths
"""

from __future__ import annotations

import uuid
from collections.abc import Sequence
from typing import Any

import networkx as nx


class RouteGraphBuilder:
    """Builds and analyzes NetworkX graphs for logistics routing."""

    @classmethod
    def build_graph(
        cls,
        locations: Sequence[dict[str, Any]],
        routes: Sequence[dict[str, Any]],
        avoid_blocked_routes: bool = True,
        max_risk_tolerance: float = 1.0,
    ) -> nx.DiGraph:
        """Constructs a directed graph representing active logistics segments."""
        G = nx.DiGraph()

        for loc in locations:
            loc_id = str(loc["id"])
            G.add_node(
                loc_id,
                name=loc.get("name", "Unknown Location"),
                type=loc.get("type", "HUB"),
                terrain=loc.get("terrain_type", "PLAINS"),
                elevation_m=float(loc.get("elevation_m", 0.0)),
                latitude=float(loc.get("latitude", 0.0)),
                longitude=float(loc.get("longitude", 0.0)),
            )

        for r in routes:
            r_status = (r.get("status") or "ACTIVE").upper()
            if avoid_blocked_routes and r_status == "BLOCKED":
                continue

            base_risk = float(r.get("base_risk_score", 0.0))
            if avoid_blocked_routes and base_risk > max_risk_tolerance:
                continue

            r_id = str(r["id"])
            r_name = r.get("name", "Route Corridor")

            for seg in r.get("segments", []):
                u = str(seg["from_location_id"])
                v = str(seg["to_location_id"])

                if not G.has_node(u) or not G.has_node(v):
                    continue

                dist = float(seg.get("distance_km", 10.0))
                t_hours = float(seg.get("travel_time_hours", 0.5))
                terrain = float(seg.get("terrain_risk", 0.0))
                road = float(seg.get("road_risk", 0.0))

                seg_risk = min(
                    1.0, max(0.0, base_risk * 0.4 + terrain * 0.3 + road * 0.3)
                )

                # Composite traversal weight
                weight = dist * (1.0 + seg_risk * 2.0)

                G.add_edge(
                    u,
                    v,
                    route_id=r_id,
                    route_name=r_name,
                    route_status=r_status,
                    distance_km=dist,
                    travel_time_hours=t_hours,
                    terrain_risk=terrain,
                    road_risk=road,
                    risk_score=seg_risk,
                    weight=weight,
                )

        return G

    @classmethod
    def find_candidate_paths(
        cls,
        G: nx.DiGraph,
        source_id: uuid.UUID | str,
        destination_id: uuid.UUID | str,
        max_paths: int = 5,
    ) -> list[list[str]]:
        """Finds up to `max_paths` shortest simple paths between source and destination."""
        s_str = str(source_id)
        d_str = str(destination_id)

        if not G.has_node(s_str) or not G.has_node(d_str):
            return []

        try:
            return list(nx.shortest_simple_paths(G, s_str, d_str, weight="weight"))[
                :max_paths
            ]
        except (nx.NetworkXNoPath, nx.NodeNotFound):
            return []
