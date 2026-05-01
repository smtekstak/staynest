# ── Frontend Dockerfile ──────────────────────────────────
# Serves static HTML via Nginx (no build step needed)
FROM nginx:1.25-alpine

# Copy static frontend files
COPY . /usr/share/nginx/html/

# Custom nginx config for SPA + API proxy
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
