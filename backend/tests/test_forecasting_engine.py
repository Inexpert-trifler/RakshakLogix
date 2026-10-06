"""
RakshakLogix — Demand Forecasting Engine Tests

Tests candidate forecasting algorithms:
- NaiveForecaster
- SeasonalNaiveForecaster
- HoltWintersForecaster
- MLFeatureForecaster
- Metrics computation (MAE, RMSE, MAPE)
- DemandPredictor & DemandForecaster pipeline
"""

from __future__ import annotations

from datetime import date, timedelta

import numpy as np
import pytest

from app.ml.forecasting.exponential_smoothing import HoltWintersForecaster
from app.ml.forecasting.metrics import (
    compute_mae,
    compute_mape,
    compute_rmse,
    evaluate_forecast,
)
from app.ml.forecasting.naive import NaiveForecaster, SeasonalNaiveForecaster
from app.ml.forecasting.predictor import DemandForecaster, DemandPredictor
from app.ml.forecasting.xgboost_model import MLFeatureForecaster


class TestForecastingMetrics:

    def test_metrics_calculation(self) -> None:
        y_true = np.array([10.0, 20.0, 30.0, 40.0])
        y_pred = np.array([12.0, 18.0, 33.0, 37.0])

        mae = compute_mae(y_true, y_pred)
        rmse = compute_rmse(y_true, y_pred)
        mape = compute_mape(y_true, y_pred)

        assert abs(mae - 2.5) < 0.01
        assert rmse > 0.0
        assert mape > 0.0

        eval_res = evaluate_forecast(y_true, y_pred)
        assert "mae" in eval_res
        assert "rmse" in eval_res
        assert "mape" in eval_res


class TestCandidateForecasters:

    @pytest.fixture
    def sample_time_series(self) -> np.ndarray:
        # 60 days of synthetic series with 7-day pattern
        np.random.seed(42)
        days = 60
        t = np.arange(days)
        seasonal = 10 * np.sin(2 * np.pi * t / 7)
        trend = 0.5 * t
        noise = np.random.normal(0, 1.0, days)
        return np.maximum(5.0, 50.0 + trend + seasonal + noise)

    def test_naive_forecaster(self, sample_time_series: np.ndarray) -> None:
        forecaster = NaiveForecaster()
        train_y = sample_time_series[:50]
        val_y = sample_time_series[50:]

        preds, metrics = forecaster.fit_predict(train_y, val_y, horizon_days=10)
        assert len(preds) == 10
        assert metrics["mae"] >= 0.0

    def test_seasonal_naive_forecaster(self, sample_time_series: np.ndarray) -> None:
        forecaster = SeasonalNaiveForecaster(season_length=7)
        train_y = sample_time_series[:50]
        val_y = sample_time_series[50:]

        preds, metrics = forecaster.fit_predict(train_y, val_y, horizon_days=10)
        assert len(preds) == 10
        assert metrics["mae"] >= 0.0

    def test_holt_winters_forecaster(self, sample_time_series: np.ndarray) -> None:
        forecaster = HoltWintersForecaster(seasonal_periods=7)
        train_y = sample_time_series[:50]
        val_y = sample_time_series[50:]

        preds, metrics = forecaster.fit_predict(train_y, val_y, horizon_days=10)
        assert len(preds) == 10
        assert metrics["mae"] >= 0.0

    def test_ml_feature_forecaster(self, sample_time_series: np.ndarray) -> None:
        forecaster = MLFeatureForecaster()
        train_y = sample_time_series[:50]
        val_y = sample_time_series[50:]

        preds, metrics = forecaster.fit_predict(train_y, val_y, horizon_days=10)
        assert len(preds) == 10
        assert metrics["mae"] >= 0.0


class TestDemandPredictorPipeline:

    def test_demand_predictor_predict(self) -> None:
        start_d = date.today() - timedelta(days=60)
        history = [
            {
                "date": start_d + timedelta(days=i),
                "quantity": 100.0 + (i % 7) * 10 + np.random.uniform(-5, 5),
            }
            for i in range(60)
        ]

        res = DemandPredictor.predict(
            history_records=history, horizon_days=14, preferred_model="AUTO"
        )
        assert "model_name" in res
        assert "model_version" in res
        assert "metrics" in res
        assert len(res["points"]) == 14

        pt = res["points"][0]
        assert "target_date" in pt
        assert "prediction" in pt
        assert "lower_bound" in pt
        assert "upper_bound" in pt
        assert pt["lower_bound"] <= pt["prediction"] <= pt["upper_bound"]

    def test_demand_forecaster_facade(self) -> None:
        start_d = date.today() - timedelta(days=30)
        history = [
            {"date": start_d + timedelta(days=i), "quantity": 50.0 + i}
            for i in range(30)
        ]

        res = DemandForecaster.forecast(
            history=history, horizon_days=7, preferred_model="HOLT_WINTERS"
        )
        assert res["model_name"] in ("HOLT_WINTERS", "HoltWintersForecaster")
        assert len(res["points"]) == 7
