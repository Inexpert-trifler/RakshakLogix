"""
RakshakLogix — Holt-Winters Exponential Smoothing Model
"""

from __future__ import annotations

import numpy as np
from statsmodels.tsa.holtwinters import ExponentialSmoothing

from app.ml.forecasting.base import BaseForecaster
from app.ml.forecasting.metrics import evaluate_forecast
from app.ml.forecasting.naive import NaiveForecaster


class HoltWintersForecaster(BaseForecaster):
    """Triple exponential smoothing capturing linear trend and weekly seasonality."""

    def __init__(self, seasonal_periods: int = 7) -> None:
        super().__init__(name="HOLT_WINTERS", version="1.0.0")
        self.seasonal_periods = seasonal_periods

    def fit_predict(
        self,
        train_y: np.ndarray,
        val_y: np.ndarray | None,
        horizon_days: int,
    ) -> tuple[np.ndarray, dict[str, float]]:
        if len(train_y) < 14:
            # Fallback to naive if insufficient data
            return NaiveForecaster().fit_predict(train_y, val_y, horizon_days)

        try:
            has_seasonality = len(train_y) >= (self.seasonal_periods * 3)
            model = ExponentialSmoothing(
                train_y,
                trend="add" if len(train_y) >= 10 else None,
                seasonal="add" if has_seasonality else None,
                seasonal_periods=self.seasonal_periods if has_seasonality else None,
                initialization_method="estimated",
            ).fit()

            if val_y is not None and len(val_y) > 0:
                val_pred = np.maximum(0.0, model.forecast(len(val_y)))
                metrics = evaluate_forecast(val_y, val_pred)
            else:
                metrics = {"mae": 0.0, "rmse": 0.0, "mape": 0.0}

            preds = np.maximum(0.0, model.forecast(horizon_days))
            return preds, metrics
        except Exception:
            return NaiveForecaster().fit_predict(train_y, val_y, horizon_days)
