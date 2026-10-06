"""
RakshakLogix — Time Series Model Evaluation Metrics

Provides MAE, RMSE, and MAPE metrics for time-series forecasting models.
"""

from __future__ import annotations

import numpy as np


def compute_mae(actual: np.ndarray, predicted: np.ndarray) -> float:
    """Mean Absolute Error."""
    return float(np.mean(np.abs(actual - predicted)))


def compute_rmse(actual: np.ndarray, predicted: np.ndarray) -> float:
    """Root Mean Squared Error."""
    return float(np.sqrt(np.mean((actual - predicted) ** 2)))


def compute_mape(actual: np.ndarray, predicted: np.ndarray) -> float:
    """Mean Absolute Percentage Error (handles zero actual values gracefully)."""
    denom = np.where(actual == 0, 1.0, np.abs(actual))
    return float(np.mean(np.abs(actual - predicted) / denom) * 100.0)


def evaluate_forecast(actual: np.ndarray, predicted: np.ndarray) -> dict[str, float]:
    """Calculates all standard evaluation metrics."""
    return {
        "mae": round(compute_mae(actual, predicted), 2),
        "rmse": round(compute_rmse(actual, predicted), 2),
        "mape": round(compute_mape(actual, predicted), 2),
    }
