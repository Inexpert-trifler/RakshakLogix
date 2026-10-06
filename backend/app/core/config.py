"""
RakshakLogix — Centralized Application Configuration
All settings are read from environment variables (12-factor app).
"""

from __future__ import annotations

import json
from functools import lru_cache
from typing import Any, Literal

from pydantic import field_validator, model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    # ------------------------------------------------------------------
    # Application
    # ------------------------------------------------------------------
    app_env: Literal["development", "staging", "production"] = "development"
    app_name: str = "RakshakLogix"
    app_version: str = "0.1.0"
    app_debug: bool = False
    log_level: str = "INFO"

    # ------------------------------------------------------------------
    # API
    # ------------------------------------------------------------------
    api_v1_prefix: str = "/api/v1"
    cors_origins: list[str] = ["http://localhost:3000", "http://localhost:5173"]

    # ------------------------------------------------------------------
    # Database — PostgreSQL/PostGIS
    # ------------------------------------------------------------------
    database_url: str = (
        "postgresql+asyncpg://rakshak:rakshak_dev@localhost:5432/rakshaklogix"
    )
    database_sync_url: str = (
        "postgresql+psycopg2://rakshak:rakshak_dev@localhost:5432/rakshaklogix"
    )
    database_pool_size: int = 10
    database_max_overflow: int = 20
    database_echo: bool = False

    # ------------------------------------------------------------------
    # Redis / Celery
    # ------------------------------------------------------------------
    redis_url: str = "redis://localhost:6379/0"
    celery_broker_url: str = "redis://localhost:6379/0"
    celery_result_backend: str = "redis://localhost:6379/1"

    # ------------------------------------------------------------------
    # Authentication — JWT
    # ------------------------------------------------------------------
    jwt_secret_key: str = "CHANGE_ME_BEFORE_PRODUCTION_USE_A_STRONG_RANDOM_SECRET"
    jwt_algorithm: str = "HS256"
    jwt_access_token_expire_minutes: int = 60
    jwt_refresh_token_expire_days: int = 7

    # ------------------------------------------------------------------
    # Password hashing
    # ------------------------------------------------------------------
    password_hash_scheme: Literal["argon2id", "bcrypt"] = "argon2id"

    # ------------------------------------------------------------------
    # Rate limiting
    # ------------------------------------------------------------------
    rate_limit_auth_requests: int = 10
    rate_limit_auth_window_seconds: int = 60

    # ------------------------------------------------------------------
    # Synthetic data
    # ------------------------------------------------------------------
    synthetic_data_seed: int = 42

    # ------------------------------------------------------------------
    # Validators
    # ------------------------------------------------------------------
    @field_validator("cors_origins", mode="before")
    @classmethod
    def parse_cors_origins(cls, v: Any) -> list[str]:
        if isinstance(v, str):
            try:
                return json.loads(v)
            except json.JSONDecodeError:
                return [origin.strip() for origin in v.split(",")]
        return v

    @model_validator(mode="after")
    def warn_insecure_jwt_secret(self) -> Settings:
        if self.app_env == "production" and self.jwt_secret_key.startswith("CHANGE_ME"):
            raise ValueError(
                "JWT_SECRET_KEY must be changed before running in production mode."
            )
        return self

    # ------------------------------------------------------------------
    # Helpers
    # ------------------------------------------------------------------
    @property
    def is_development(self) -> bool:
        return self.app_env == "development"

    @property
    def is_production(self) -> bool:
        return self.app_env == "production"


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    """Return a cached singleton Settings instance."""
    return Settings()


settings = get_settings()
