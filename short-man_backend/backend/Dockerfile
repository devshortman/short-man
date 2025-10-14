# backend/Dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
# Expect SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY at runtime
CMD ["python", "crawler.py"]
