#!/bin/bash

# ─── Setup @unifrutti/ui ──────────────────────────────────────────────────────
# Configura el token de Azure Artifacts para instalar @unifrutti/ui
# Uso: bash setup.sh
# ─────────────────────────────────────────────────────────────────────────────

REGISTRY="https://pkgs.dev.azure.com/UnifruttiLatam/FrusysCloud/_packaging/unifrutti-design/npm/registry/"

echo ""
echo "  @unifrutti/ui — Setup"
echo "────────────────────────────────────────"
echo ""
echo "  Necesitas un Personal Access Token (PAT) de Azure DevOps."
echo "  Si no tienes uno:"
echo "  1. Ve a https://dev.azure.com/UnifruttiLatam"
echo "  2. Click en tu avatar → Personal Access Tokens"
echo "  3. New Token → Packaging: Read & Write → Crear"
echo ""
read -rsp "  Pega tu PAT aquí (no se mostrará): " PAT
echo ""

if [ -z "$PAT" ]; then
  echo ""
  echo "  ✗ No ingresaste ningún token. Abortando."
  exit 1
fi

# Codificar en base64
TOKEN_B64=$(echo -n "$PAT" | base64)

# Detectar shell profile
if [ -f "$HOME/.zshrc" ]; then
  PROFILE="$HOME/.zshrc"
elif [ -f "$HOME/.bashrc" ]; then
  PROFILE="$HOME/.bashrc"
elif [ -f "$HOME/.bash_profile" ]; then
  PROFILE="$HOME/.bash_profile"
else
  PROFILE="$HOME/.zshrc"
fi

# Agregar variable de entorno al profile (si no existe ya)
if grep -q "UNIFRUTTI_NPM_TOKEN" "$PROFILE" 2>/dev/null; then
  # Actualizar si ya existe
  sed -i '' "s|export UNIFRUTTI_NPM_TOKEN=.*|export UNIFRUTTI_NPM_TOKEN=\"$TOKEN_B64\"|" "$PROFILE"
  echo "  ✓ Token actualizado en $PROFILE"
else
  echo "" >> "$PROFILE"
  echo "# @unifrutti/ui — Azure Artifacts token" >> "$PROFILE"
  echo "export UNIFRUTTI_NPM_TOKEN=\"$TOKEN_B64\"" >> "$PROFILE"
  echo "  ✓ Token guardado en $PROFILE"
fi

# Exportar en la sesión actual
export UNIFRUTTI_NPM_TOKEN="$TOKEN_B64"

# Crear o actualizar .npmrc en el directorio actual
cat > .npmrc << EOF
@unifrutti:registry=${REGISTRY}
//pkgs.dev.azure.com/UnifruttiLatam/FrusysCloud/_packaging/unifrutti-design/npm/registry/:username=unifrutti
//pkgs.dev.azure.com/UnifruttiLatam/FrusysCloud/_packaging/unifrutti-design/npm/registry/:_password=${TOKEN_B64}
//pkgs.dev.azure.com/UnifruttiLatam/FrusysCloud/_packaging/unifrutti-design/npm/registry/:email=unused
//pkgs.dev.azure.com/UnifruttiLatam/FrusysCloud/_packaging/unifrutti-design/npm/registry/:always-auth=true
EOF
echo "  ✓ .npmrc actualizado en $(pwd)"

echo ""
echo "  Todo listo. Ahora puedes correr:"
echo ""
echo "    npm install @unifrutti/ui"
echo ""
