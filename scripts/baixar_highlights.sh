#!/usr/bin/env bash
set -euo pipefail

# Baixa highlights do Instagram em lote usando gallery-dl e cookies do navegador.

usage() {
  cat <<'EOF'
Uso:
  ./scripts/baixar_highlights.sh [opcoes] [URL ...]

Opcoes:
  --user USUARIO        Baixa todos os highlights de https://www.instagram.com/USUARIO/highlights/
  --file ARQUIVO        Lê URLs de highlights (uma por linha)
  --browser NAVEGADOR   Navegador para ler cookies (padrao: chrome)
  --dest PASTA          Pasta de destino (padrao: ./downloads/highlights-instagram)
  --force               Sobrescreve arquivos ja existentes
  --dry-run             Apenas simula (nao baixa)
  -h, --help            Mostra esta ajuda

Exemplos:
  ./scripts/baixar_highlights.sh --user marcenioficial
  ./scripts/baixar_highlights.sh --file scripts/highlights-urls.txt
  ./scripts/baixar_highlights.sh "https://www.instagram.com/stories/highlights/18143424844172731/"
EOF
}

if ! command -v gallery-dl >/dev/null 2>&1; then
  echo "Erro: gallery-dl nao encontrado no PATH."
  echo "Instale e tente novamente."
  exit 1
fi

BROWSER="chrome"
DEST="./downloads/highlights-instagram"
USER_NAME=""
URL_FILE=""
DRY_RUN=0
FORCE=0
EXTRA_URLS=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    --user)
      USER_NAME="${2:-}"
      shift 2
      ;;
    --file)
      URL_FILE="${2:-}"
      shift 2
      ;;
    --browser)
      BROWSER="${2:-}"
      shift 2
      ;;
    --dest)
      DEST="${2:-}"
      shift 2
      ;;
    --dry-run)
      DRY_RUN=1
      shift
      ;;
    --force)
      FORCE=1
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      EXTRA_URLS+=("$1")
      shift
      ;;
  esac
done

URLS=()

if [[ -n "$URL_FILE" ]]; then
  if [[ ! -f "$URL_FILE" ]]; then
    echo "Erro: arquivo nao encontrado: $URL_FILE"
    exit 1
  fi

  while IFS= read -r line || [[ -n "$line" ]]; do
    line="${line%%#*}"
    line="$(printf '%s' "$line" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')"
    [[ -z "$line" ]] && continue
    URLS+=("$line")
  done < "$URL_FILE"
fi

if [[ -n "$USER_NAME" ]]; then
  URLS+=("https://www.instagram.com/${USER_NAME}/highlights/")
fi

if [[ ${#EXTRA_URLS[@]} -gt 0 ]]; then
  URLS+=("${EXTRA_URLS[@]}")
fi

if [[ ${#URLS[@]} -eq 0 ]]; then
  echo "Erro: informe pelo menos uma fonte de URLs (--user, --file ou URL direta)."
  echo
  usage
  exit 1
fi

mkdir -p "$DEST"
ARCHIVE_FILE="$DEST/.download-archive.txt"

ARGS=(
  --cookies-from-browser "$BROWSER"
  -D "$DEST"
  --download-archive "$ARCHIVE_FILE"
  --sleep-request "1-2"
  --sleep "0.5-1.2"
)

if [[ $FORCE -eq 1 ]]; then
  ARGS+=(--no-skip)
fi

if [[ $DRY_RUN -eq 1 ]]; then
  ARGS+=(-s -v)
fi

echo "Destino: $DEST"
echo "Browser: $BROWSER"
echo "Total de entradas: ${#URLS[@]}"
echo

gallery-dl "${ARGS[@]}" "${URLS[@]}"

echo
echo "Concluido. Arquivos em: $DEST"
