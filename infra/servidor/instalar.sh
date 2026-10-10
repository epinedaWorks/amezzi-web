#!/bin/bash
# Instalación inicial del servidor (Amazon Linux 2023, ARM). La ejecuta el UserData
# de infra/servidor.yaml como root, con el repositorio ya clonado en /opt/amezzi.
set -euxo pipefail

NODE_VERSION=24.13.1
DIR=/opt/amezzi/infra/servidor

# Memoria de intercambio: la instancia tiene 1 GB y la compilación de Next.js pide más.
if [ ! -f /swapfile ]; then
  fallocate -l 2G /swapfile
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  echo '/swapfile swap swap defaults 0 0' >> /etc/fstab
fi

# Node.js (misma versión que en desarrollo).
curl -fsSL "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-arm64.tar.xz" \
  | tar -xJ -C /usr/local --strip-components=1

# Caddy: servidor web con HTTPS automático (Let's Encrypt).
curl -fsSL "https://caddyserver.com/api/download?os=linux&arch=arm64" -o /usr/local/bin/caddy
chmod 755 /usr/local/bin/caddy

id amezzi >/dev/null 2>&1 || useradd --system --home-dir /opt/amezzi --shell /sbin/nologin amezzi
id caddy >/dev/null 2>&1 || useradd --system --home-dir /var/lib/caddy --create-home --shell /sbin/nologin caddy
chown -R amezzi:amezzi /opt/amezzi

mkdir -p /etc/caddy
install -m 644 "$DIR/Caddyfile" /etc/caddy/Caddyfile
install -m 644 "$DIR/amezzi-entorno.service" "$DIR/amezzi.service" "$DIR/caddy.service" /etc/systemd/system/
systemctl daemon-reload
systemctl enable --now caddy

# Compila el sitio y lo arranca.
sudo -u amezzi HOME=/opt/amezzi bash -c 'cd /opt/amezzi && npm ci && npm run build'
systemctl enable --now amezzi-entorno amezzi
