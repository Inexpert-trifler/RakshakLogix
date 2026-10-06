"""
RakshakLogix — Demand Forecast Predictor Pipeline

Coordinates model candidate selection, chronological validation, metric scoring,
and upper/lower confidence interval generation.
"""

from __future__ import annotations

from collections.abc import Sequence
from datetime import date, timedelta
from typing import Any

import numpy as np
import pandas as pd

from app.ml.forecasting.exponential_smoothing import HoltWintersForecaster
from app.ml.forecasting.naive import NaiveForecaster, SeasonalNaiveForecaster
from app.ml.forecasting.xgboost_model import MLFeatureForecaster


class DemandPredictor:
    """Orchestrates candidate model evaluation and forecast output formatting."""

    @classmethod
    def predict(
        cls,
        history_records: Sequence[dict[str, Any]],
        horizon_days: int = 30,
        preferred_model: str = "AUTO",
    ) -> dict[str, Any]:
        """
        Runs candidate models on historical time-series data without data leakage.

        `history_records`: list of dicts with 'date' and 'quantity'.
        """
        if not history_records:
            return cls._empty_response(horizon_days)

        df = pd.DataFrame(history_records)
        df["date"] = pd.to_datetime(df["date"])
        df["quantity"] = pd.to_numeric(df["quantity"], errors="coerce").fillna(0.0)
        df = df.sort_values("date").drop_duplicates(subset=["date"])

        start_date = df["date"].min()
        end_date = df["date"].max()
        full_range = pd.date_range(start=start_date, end=end_date, freq="D")
        df = df.set_index("date").reindex(full_range, fill_value=0.0).reset_index()
        df.rename(columns={"index": "date"}, inplace=True)

        y = df["quantity"].values
        n_samples = len(y)

        # Chronological validation split (last 14 days or max 20% data)
        val_size = min(14, max(3, int(n_samples * 0.2)))
        train_y = y[:-val_size] if n_samples > val_size else y
        val_y = y[-val_size:] if n_samples > val_size else None

        # Candidate models dictionary
        candidates = {
            "NAIVE": NaiveForecaster(),
            "SEASONAL_NAIVE": SeasonalNaiveForecaster(season_length=7),
            "HOLT_WINTERS": HoltWintersForecaster(seasonal_periods=7),
            "XGBOOST": MLFeatureForecaster(),
        }

        # Evaluate candidate models
        model_results = {}
        for key, forecaster in candidates.items():
            preds, metrics = forecaster.fit_predict(train_y, val_y, horizon_days)
            model_results[key] = {
                "forecaster": forecaster,
                "predictions": preds,
                "metrics": metrics,
            }

        # Model selection strategy
        pref = preferred_model.upper()
        if pref in model_results:
            selected_key = pref
        else:
            # AUTO: Select candidate with lowest MAE
            selected_key = min(
                model_results.keys(), key=lambda k: model_results[k]["metrics"]["mae"]
            )

        selected = model_results[selected_key]
        forecaster = selected["forecaster"]
        final_preds, metrics = forecaster.fit_predict(y, None, horizon_days)

        std_err = metrics["rmse"] if metrics["rmse"] > 0 else max(1.0, float(np.std(y)))
        last_date = end_date.date()

        points = []
        for i, val in enumerate(final_preds, start=1):
            target = last_date + timedelta(days=i)
            pred_val = float(np.round(val, 2))
            margin = float(np.round(1.96 * std_err * np.sqrt(1 + i * 0.05), 2))
            points.append(
                {
                    "target_date": target,
                    "prediction": pred_val,
                    "lower_bound": max(0.0, float(np.round(pred_val - margin, 2))),
                    "upper_bound": float(np.round(pred_val + margin, 2)),
                }
            )

        return {
            "model_name": forecaster.name,
            "model_version": f"{forecaster.name.lower()}_v{forecaster.version}",
            "metrics": metrics,
            "points": points,
        }


class DemandForecaster(DemandPredictor):
    """Facade class matching API requirements for forecast execution."""

    @classmethod
    def forecast(
        cls,
        history: Sequence[dict[str, Any]],
        horizon_days: int = 30,
        preferred_model: str = "AUTO",
    ) -> dict[str, Any]:
        return cls.predict(
            history_records=history,
            horizon_days=horizon_days,
            preferred_model=preferred_model,
        )

    @classmethod
    def _empty_response(cls, horizon_days: int) -> dict[str, Any]:
        today = date.today()
        return {
            "model_name": "EMPTY_HISTORY",
            "model_version": "empty_v1.0",
            "metrics": {"mae": 0.0, "rmse": 0.0, "mape": 0.0},
            "points": [
                {
                    "target_date": today + timedelta(days=i),
                    "prediction": 0.0,
                    "lower_bound": 0.0,
                    "upper_bound": 0.0,
                }
                for i in range(1, horizon_days + 1)
            ],
        }
