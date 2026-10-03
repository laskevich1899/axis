#!/usr/bin/env bash
# Static export for GitHub Pages — API routes are Node-only and must be excluded.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
API_SRC="$ROOT/src/app/api"
API_BAK="$ROOT/.api-backup-for-pages"

cleanup() {
  if [[ -d "$API_BAK" ]]; then
    rm -rf "$API_SRC"
    mv "$API_BAK" "$API_SRC"
  fi
}
trap cleanup EXIT

if [[ -d "$API_SRC" ]]; then
  rm -rf "$API_BAK"
  mv "$API_SRC" "$API_BAK"
fi

export GITHUB_PAGES=true
npm run build
