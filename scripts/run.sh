#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_DIR"

PORT="${DEPLOY_RUN_PORT:-5000}"

fuser -k "${PORT}/tcp" 2>/dev/null || true
sleep 1

exec node scripts/serve.mjs "$PORT"