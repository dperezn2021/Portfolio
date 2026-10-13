#!/usr/bin/env bash
# Optimiza los videos del portfolio sin modificar los originales.
# Uso: bash scripts/optimize-videos.sh
# Opcional: FFMPEG=/ruta/ffmpeg FFPROBE=/ruta/ffprobe bash scripts/optimize-videos.sh
set -Eeuo pipefail

FFMPEG="${FFMPEG:-ffmpeg}"
FFPROBE="${FFPROBE:-ffprobe}"
SRC="Contenido_Porfolio/Videos"
PUB="public/images/projects"
PENDING="Contenido_Porfolio/Videos_web_pendientes"
LIMIT_BYTES=95000000
DONE=0
SKIPPED=0
FAILED=0
TMP_FILES=()

cleanup() {
  local file
  for file in "${TMP_FILES[@]}"; do
    [[ -z "$file" ]] || rm -f -- "$file"
  done
}
trap cleanup EXIT

for command in "$FFMPEG" "$FFPROBE"; do
  if ! command -v "$command" >/dev/null 2>&1 && [[ ! -x "$command" ]]; then
    printf 'ERROR: no encuentro %s\n' "$command" >&2
    exit 1
  fi
done

if [[ ! -d "$SRC" || ! -d "$PUB" ]]; then
  echo 'ERROR: ejecuta este script desde la raiz del repositorio.' >&2
  exit 1
fi

valid_video() {
  local file="$1" codec width height
  codec=$("$FFPROBE" -v error -select_streams v:0 -show_entries stream=codec_name -of default=noprint_wrappers=1:nokey=1 "$file") || return 1
  [[ "$codec" == h264 ]] || return 1
  width=$("$FFPROBE" -v error -select_streams v:0 -show_entries stream=width -of default=noprint_wrappers=1:nokey=1 "$file") || return 1
  height=$("$FFPROBE" -v error -select_streams v:0 -show_entries stream=height -of default=noprint_wrappers=1:nokey=1 "$file") || return 1
  [[ "$width" =~ ^[0-9]+$ && "$height" =~ ^[0-9]+$ ]] || return 1
  (( width > 0 && width <= 1920 && height > 0 && height <= 1080 )) || return 1
  "$FFMPEG" -nostdin -v error -xerror -i "$file" -map 0:v:0 -map 0:a:0? -f null - >/dev/null 2>&1
}

encode() {
  local input="$1" output="$2" crf="${3:-24}" public_target="$4"
  local temp size attempt tmpdir
  if [[ ! -f "$input" ]]; then
    printf 'FALTA ORIGINAL: %s\n' "$input" >&2
    FAILED=$((FAILED+1))
    return 0
  fi
  if [[ -e "$output" ]]; then
    printf 'OMITIDO (destino existente): %s\n' "$output"
    SKIPPED=$((SKIPPED+1))
    return 0
  fi
  mkdir -p -- "$(dirname "$output")"
  tmpdir="$(dirname "$output")"
  temp=$(mktemp "$tmpdir/.video-XXXXXXXX.mp4")
  TMP_FILES+=("$temp")
  for attempt in 1 2 3 4; do
    if ! "$FFMPEG" -nostdin -hide_banner -loglevel error -y -i "$input" \
      -map 0:v:0 -map 0:a:0? \
      -vf 'scale=w=1920:h=1080:force_original_aspect_ratio=decrease:force_divisible_by=2:flags=lanczos,format=yuv420p' \
      -c:v libx264 -preset medium -crf "$crf" -pix_fmt yuv420p \
      -c:a aac -b:a 128k -ac 2 -movflags +faststart "$temp"; then
      printf 'ERROR FFmpeg: %s\n' "$input" >&2
      FAILED=$((FAILED+1))
      return 0
    fi
    if ! valid_video "$temp"; then
      printf 'ERROR validacion: %s\n' "$input" >&2
      FAILED=$((FAILED+1))
      return 0
    fi
    size=$(stat -c %s -- "$temp")
    if [[ "$public_target" == yes ]] && (( size > LIMIT_BYTES )); then
      if (( attempt == 4 )); then
        printf 'DEMASIADO GRANDE (%s bytes): %s; no se publica\n' "$size" "$input" >&2
        FAILED=$((FAILED+1))
        return 0
      fi
      crf=$((crf+3))
      printf 'Reintentando %s con CRF %s (tamano %s bytes)\n' "$input" "$crf" "$size"
      continue
    fi
    # -n impide reemplazar un destino creado mientras se codificaba.
    if ! mv -n -- "$temp" "$output"; then
      printf 'ERROR moviendo salida: %s\n' "$output" >&2
      FAILED=$((FAILED+1))
      return 0
    fi
    if [[ ! -f "$output" ]]; then
      printf 'ERROR destino no creado: %s\n' "$output" >&2
      FAILED=$((FAILED+1))
      return 0
    fi
    printf 'OK: %s -> %s (%s -> %s bytes; CRF %s)\n' "$input" "$output" "$(stat -c %s -- "$input")" "$size" "$crf"
    DONE=$((DONE+1))
    return 0
  done
}

RAKI="$PUB/2023-24/animacion-3d/raki-animacion"
encode "$SRC/fantasyIsland/videoExplicativo.mp4" "$RAKI/explicativo.mp4" 23 yes
encode "$SRC/fantasyIsland/videoGameplay.mp4" "$RAKI/gameplay.mp4" 23 yes
encode "$SRC/fantasyIsland/AnimacionPersonaje_DanielPerezNavarro.mp4" "$RAKI/animacion-personaje.mp4" 25 yes
encode "$SRC/fantasyIsland/videoPracticaFinal.mp4" "$RAKI/videopracticafinal.mp4" 23 yes
encode "$SRC/VIDEO_JUEGOS_EN_RED.mp4" "$PUB/2023-24/juegos-en-red/hit-and-ufo/demo-multijugador.mp4" 25 yes

encode "$SRC/videoArbol.mp4" "$PENDING/videoArbol.mp4" 25 no
encode "$SRC/videoTela.mp4" "$PENDING/videoTela.mp4" 25 no
encode "$SRC/videoTela2.mp4" "$PENDING/videoTela2.mp4" 25 no
encode "$SRC/videoPiramide.mp4" "$PENDING/videoPiramide.mp4" 25 no

printf '\nResumen: %s convertidos, %s omitidos, %s fallidos.\n' "$DONE" "$SKIPPED" "$FAILED"
if (( FAILED > 0 )); then
  exit 1
fi
