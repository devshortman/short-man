# backend/config.py
# Use environment variables. Keep secrets in GitHub Actions/host env, NOT in repo.
# Example (local .env):
#   SUPABASE_URL=...
#   SUPABASE_SERVICE_ROLE_KEY=...
import os
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
