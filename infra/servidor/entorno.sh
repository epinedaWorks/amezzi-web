#!/bin/bash
# Arma /etc/amezzi/amezzi.env con la configuración del servidor y las credenciales
# de correo guardadas en Parameter Store (/amezzi-web/*). Si un parámetro aún no
# existe queda vacío: el sitio funciona igual, solo que el formulario no envía.
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
  echo "RESEND_API_KEY=$(leer /amezzi-web/resend-api-key)"
  echo "EMAIL_FROM=$(leer /amezzi-web/email-from)"
  echo "TEAM_EMAIL=$(leer /amezzi-web/team-email)"
  echo "NODE_ENV=production"
} > /etc/amezzi/amezzi.env.tmp
mv /etc/amezzi/amezzi.env.tmp /etc/amezzi/amezzi.env
