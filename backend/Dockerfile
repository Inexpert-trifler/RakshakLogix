# ============================================================
# RakshakLogix Backend — Dockerfile
# Multi-stage build: builder → runtime
# ============================================================

# ── Stage 1: dependency builder ──────────────────────────────
FROM python:3.11-slim AS builder

WORKDIR /build

# Install build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    libffi-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy dependency manifest first (layer cache optimization)
COPY pyproject.toml ./

# Install production dependencies into a local prefix
RUN pip install --no-cache-dir --upgrade pip \
 && pip install --no-cache-dir --prefix=/install ".[dev]" 2>/dev/null || \
    pip install --no-cache-dir --prefix=/install .


# ── Stage 2: runtime image ───────────────────────────────────
FROM python:3.11-slim AS runtime

LABEL maintainer="RakshakLogix Team"
LABEL description="RakshakLogix Backend API"

# Runtime system dependencies only
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq5 \
    libgeos-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Create non-root user for security
RUN groupadd --system rakshak && useradd --system --gid rakshak rakshak

WORKDIR /app

# Copy installed Python packages from builder
COPY --from=builder /install /usr/local

# Copy application source
COPY app/ ./app/
COPY alembic/ ./alembic/
COPY alembic.ini ./alembic.ini
COPY pyproject.toml ./pyproject.toml

# Own the app directory
RUN chown -R rakshak:rakshak /app

USER rakshak

# Expose API port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
    CMD curl -f http://localhost:8000/health || exit 1

# Default: run uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "1"]
