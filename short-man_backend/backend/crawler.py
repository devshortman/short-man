# backend/crawler.py
import os, time, logging
from datetime import datetime, timezone
from typing import List, Dict, Any

from supabase import create_client, Client  # pip install supabase

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_SERVICE_ROLE_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")  # NEVER expose this to frontend!

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")

def get_client() -> Client:
    assert SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY"
    return create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

def discover_items() -> List[Dict[str, Any]]:
    """Return a list of items to insert.
    In real crawler, fetch from Instagram/YouTube APIs or approved data sources.
    Keep only metadata you are allowed to store.
    """
    now_slug = datetime.now(timezone.utc).strftime("demo-%Y%m%d-%H%M%S")
    return [
        {
            "slug": now_slug,
            "title": f"Auto demo item @ {datetime.utcnow().isoformat()}",
            "platform_code": "instagram",
            "region_code": "KR",
            "href": "https://example.com/source",
            "author": "demo_account",
            "tags": ["kr", "trend"],
            "thumb_path": f"thumbs/{now_slug}.jpg",
            "preview_path": f"previews/{now_slug}.mp4",
        }
    ]

def upsert_items(sb: Client, items: List[Dict[str, Any]]):
    # Resolve foreign keys
    platforms = {p["code"]: p["id"] for p in sb.table("platforms").select("id,code").execute().data}
    regions   = {r["code"]: r["id"] for r in sb.table("regions").select("id,code").execute().data}

    rows = []
    for it in items:
        rows.append({
            "slug": it["slug"],
            "title": it["title"],
            "platform_id": platforms[it["platform_code"]],
            "region_id": regions[it["region_code"]],
            "href": it.get("href"),
            "author": it.get("author"),
            "tags": it.get("tags", []),
            "thumb_path": it.get("thumb_path"),
            "preview_path": it.get("preview_path"),
        })

    # Upsert on slug
    res = sb.table("items").upsert(rows, on_conflict="slug").execute()
    logging.info("Upserted items: %s", len(res.data) if res.data else 0)

def refresh_week(sb: Client):
    # Call SQL function to rebuild weekly_sets + weekly_items
    # Using rpc() to call Postgres function
    res = sb.rpc("refresh_week").execute()
    logging.info("refresh_week done")

def main():
    sb = get_client()
    items = discover_items()
    upsert_items(sb, items)
    refresh_week(sb)

if __name__ == "__main__":
    main()
