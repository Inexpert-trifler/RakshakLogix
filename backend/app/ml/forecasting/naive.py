"""
RakshakLogix — Naive & Seasonal Naive Baseline Models
"""

from __future__ import annotations

import numpy as np

from app.ml.forecasting.base import BaseForecaster
from app.ml.forecasting.metrics import evaluate_forecast


class NaiveForecaster(BaseForecaster):
    """Predicts future values using recent historical mean baseline."""

    def __init__(self, window: int = 7) -> None:
        super().__init__(name="NAIVE_BASELINE", version="1.0.0")
        self.window = window

    def fit_predict(
        self,
        train_y: np.ndarray,
        val_y: np.ndarray | None,
        horizon_days: int,
    ) -> tuple[np.ndarray, dict[str, float]]:
        recent_vals = train_y[-self.window :] if len(train_y) >= self.window else train_y
        mean_val = float(np.mean(recent_vals)) if len(recent_vals) > 0 else 0.0

        if val_y is not None and len(val_y) > 0:
            val_pred = np.full(len(val_y), mean_val)
            metrics = evaluate_forecast(val_y, val_pred)
        else:
            metrics = {"mae": 0.0, "rmse": 0.0, "mape": 0.0}

        predictions = np.full(horizon_days, max(0.0, mean_val))
        return predictions, metrics


class SeasonalNaiveForecaster(BaseForecaster):
    """Predicts future values using equivalent seasonal period (e.g. 7-day weekly season)."""

    def __init__(self, season_length: int = 7) -> None:
        super().__init__(name="SEASONAL_NAIVE", version="1.0.0")
        self.season_length = season_length

    def fit_predict(
        self,
        train_y: np.ndarray,
        val_y: np.ndarray | None,
        horizon_days: int,
    ) -> tuple[np.ndarray, dict[str, float]]:
        if len(train_y) < self.season_length:
            # Fallback to simple naive
            return NaiveForecaster().fit_predict(train_y, val_y, horizon_days)

        seasonal_pattern = train_y[-self.season_length :]

        if val_y is not None and len(val_y) > 0:
            val_pred = np.tile(seasonal_pattern, int(np.ceil(len(val_y) / self.season_length)))[
                : len(val_y)
            ]
            metrics = evaluate_forecast(val_y, val_pred)
        else:
            metrics = {"mae": 0.0, "rmse": 0.0, "mape": 0.0}

        predictions = np.tile(seasonal_pattern, int(np.ceil(horizon_days / self.season_length)))[
            :horizon_days
        ]
        return np.maximum(0.0, predictions), metrics
