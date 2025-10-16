# Backend Crawler Overview (초안)

## 목적
- 외부에서 합법적으로 수집한 숏폼 메타데이터를 `items` 테이블에 upsert
- 주간 단위 TopN 집계를 위해 `refresh_week()` 함수를 호출하여 `weekly_sets / weekly_items` 재구성

## 파이프라인 요약
1. **discover_items()**: 후보 메타데이터 수집(플랫폼 API/승인된 피드)
2. **upsert_items()**: `slug` 기준 upsert, FK(`platforms`, `regions`) 해석
3. **refresh_week()**: 이번 주 ISO Week 기준으로 랭킹 1..20 재생성

## 실행 방법
### 로컬
```bash
cd /short-man_backend/backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
export SUPABASE_URL=<your-supabase-url>
export SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
python crawler.py
```

### GitHub Actions(스케줄)
- `.github/workflows/crawl-schedule.yml` 에 정의
- Secrets에 `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` 등록

## 주의 사항
- **service_role 키는 절대 프론트에 노출 금지**
- 플랫폼 약관 및 robots.txt를 준수한 수집만 허용 (법무/정책 검토 선행)
- 동영상/썸네일 파일은 Storage 버킷 규칙을 준수
  - thumbs: 공개 읽기, `thumbs/{slug}.jpg`
  - previews: 서명 URL, `previews/{slug}.mp4`

## 향후 작업(To-Do)
- 실서비스 크롤러 로직 구현(공식 API/파트너 소스)
- 실패 백오프/재시도, 중복 방지, 로깅/모니터링 강화
- Edge Function로 미리보기 파일 업로드 자동화(선택)
