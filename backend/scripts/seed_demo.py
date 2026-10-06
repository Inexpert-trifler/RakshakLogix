"""
RakshakLogix — Seed Demo Data CLI Script

Usage:
  python scripts/seed_demo.py [--seed 42] [--reset]
"""

from __future__ import annotations

import argparse
import asyncio
import sys
from pathlib import Path

# Ensure backend root is in PYTHONPATH
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from scripts.generate_demo_data import run_data_generation


def main() -> None:
    parser = argparse.ArgumentParser(description="RakshakLogix Seed Demo Data CLI")
    parser.add_argument(
        "--seed",
        type=int,
        default=42,
        help="Random seed for deterministic generation (default: 42)",
    )
    parser.add_argument(
        "--reset",
        action="store_true",
        help="Drop and recreate database schema before generation (dev only)",
    )
    args = parser.parse_args()

    asyncio.run(run_data_generation(seed=args.seed, reset=args.reset))


if __name__ == "__main__":
    main()
