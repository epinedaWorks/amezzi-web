#!/bin/bash
# Arma /etc/amezzi/amezzi.env con la configuración del servidor y los correos del
# equipo guardados en Parameter Store (/amezzi-web/team-email). El envío usa SES
# con el rol de la instancia, así que no hay claves que guardar. Si el parámetro
# aún no existe queda vacío: el sitio funciona igual, solo que el formulario no envía.
set -euo pipefail
# shellcheck disable=SC1091
source /etc/amezzi/config

leer() {
  aws ssm get-parameter --region "$AMEZZI_AWS_REGION" --name "$1" --with-decryption \
    --query Parameter.Value --output text 2>/dev/null || true
}

umask 077
{
  cat /etc/amezzi/config
  echo "TEAM_EMAIL=$(leer /amezzi-web/team-email)"
  echo "NODE_ENV=production"
} > /etc/amezzi/amezzi.env.tmp
mv /etc/amezzi/amezzi.env.tmp /etc/amezzi/amezzi.env
