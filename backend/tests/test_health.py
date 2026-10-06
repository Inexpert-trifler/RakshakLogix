"""
Tests for health check endpoints.

Validates:
- GET /health returns 200 with correct shape
- GET /api/v1/health returns 200 with dependency status
- Response fields are present and typed correctly
"""

from __future__ import annotations

import pytest
from httpx import AsyncClient


class TestRootHealth:
    """Tests for GET /health (root liveness probe)."""

    @pytest.mark.asyncio
    async def test_health_returns_200(self, client: AsyncClient) -> None:
        response = await client.get("/health")
        assert response.status_code == 200

    @pytest.mark.asyncio
    async def test_health_returns_ok_status(self, client: AsyncClient) -> None:
        response = await client.get("/health")
        data = response.json()
        assert data["status"] == "ok"

    @pytest.mark.asyncio
    async def test_health_contains_required_fields(self, client: AsyncClient) -> None:
        response = await client.get("/health")
        data = response.json()
        assert "status" in data
        assert "service" in data
        assert "version" in data
        assert "environment" in data
        assert "timestamp" in data

    @pytest.mark.asyncio
    async def test_health_service_name(self, client: AsyncClient) -> None:
        response = await client.get("/health")
        data = response.json()
        assert data["service"] == "RakshakLogix"

    @pytest.mark.asyncio
    async def test_health_timestamp_is_iso8601(self, client: AsyncClient) -> None:
        from datetime import datetime

        response = await client.get("/health")
        data = response.json()
        # Should parse without exception
        datetime.fromisoformat(data["timestamp"])


class TestVersionedHealth:
    """Tests for GET /api/v1/health (readiness probe with DB check)."""

    @pytest.mark.asyncio
    async def test_versioned_health_returns_200(self, client: AsyncClient) -> None:
        response = await client.get("/api/v1/health")
        assert response.status_code == 200

    @pytest.mark.asyncio
    async def test_versioned_health_contains_dependencies(
        self, client: AsyncClient
    ) -> None:
        response = await client.get("/api/v1/health")
        data = response.json()
        assert "dependencies" in data
        assert "database" in data["dependencies"]

    @pytest.mark.asyncio
    async def test_versioned_health_database_status_present(
        self, client: AsyncClient
    ) -> None:
        response = await client.get("/api/v1/health")
        data = response.json()
        db_info = data["dependencies"]["database"]
        assert "status" in db_info

    @pytest.mark.asyncio
    async def test_versioned_health_overall_status(self, client: AsyncClient) -> None:
        response = await client.get("/api/v1/health")
        data = response.json()
        assert data["status"] in ("ok", "degraded")

    @pytest.mark.asyncio
    async def test_versioned_health_version_matches_root(
        self, client: AsyncClient
    ) -> None:
        root = await client.get("/health")
        versioned = await client.get("/api/v1/health")
        assert root.json()["version"] == versioned.json()["version"]

    @pytest.mark.asyncio
    async def test_root_index(self, client: AsyncClient) -> None:
        res = await client.get("/")
        assert res.status_code == 200
        assert res.json()["status"] == "ok"

    @pytest.mark.asyncio
    async def test_db_health_endpoint(self, client: AsyncClient) -> None:
        res = await client.get("/health/db")
        assert res.status_code == 200
        assert res.json()["status"] in ("ok", "error")
