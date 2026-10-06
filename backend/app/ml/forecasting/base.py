"""
RakshakLogix — Base Forecaster Class
"""

from __future__ import annotations

from abc import ABC, abstractmethod

import numpy as np


class BaseForecaster(ABC):
    """Abstract base class for all demand forecasting algorithms."""

    def __init__(self, name: str, version: str = "1.0.0") -> None:
        self.name = name
        self.version = version

    @abstractmethod
    def fit_predict(
        self,
        train_y: np.ndarray,
        val_y: np.ndarray | None,
        horizon_days: int,
    ) -> tuple[np.ndarray, dict[str, float]]:
        """Fits model on training data and generates predictions for horizon_days."""
        pass
