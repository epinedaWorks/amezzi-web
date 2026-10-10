#!/bin/bash
# Publica la última versión de GitHub: descarga, compila y reinicia el sitio.
# Se ejecuta en el servidor como root (por SSM desde infra/publicar.sh).
set -euo pipefail

cd /opt/amezzi
sudo -u amezzi HOME=/opt/amezzi git pull --ff-only
sudo -u amezzi HOME=/opt/amezzi bash -c 'npm ci && npm run build'

# Por si cambiaron los archivos de servicio o el Caddyfile.
install -m 644 infra/servidor/amezzi-entorno.service infra/servidor/amezzi.service infra/servidor/caddy.service /etc/systemd/system/
install -m 644 infra/servidor/Caddyfile /etc/caddy/Caddyfile
systemctl daemon-reload
systemctl restart amezzi-entorno amezzi
systemctl reload caddy || systemctl restart caddy

echo "Publicada la versión $(sudo -u amezzi git rev-parse --short HEAD)"
