# Inventario de recursos multimedia

**Actualizado**: 2026-10-13 · Fuente: `Contenido_Porfolio/` (193 archivos, 5,8 GB, solo referencia local, no se sube a Git) → `public/images/projects/{curso}/{asignatura}/{slug}/`.
Los originales de `Contenido_Porfolio/` no se han modificado ni borrado.

## 1. Integrado en las páginas

| Proyecto | Multimedia en la página |
|---|---|
| fantasy-island | 8 capturas + 8 renders de cámara; Memoria PDF (incrustada) |
| raki | 7 imágenes (sin cambios) |
| raki-animacion | Vídeo explicativo como contenido principal; en la galería 3 vídeos (recorrido por la escena, práctica final, animación del personaje) + 11 imágenes de Raki en la isla + 9 escenas del escenario animado; Memoria PDF local + enlaces Drive (vídeo demo y memoria) |
| yumala | Carátula final; Memoria PDF |
| international-warfare | Carátulas, capturas y `gameplay.mp4` (320×240, 6 MB) |
| willy-fog | `animacionWillyFog.mp4` como contenido principal (publicado) |
| michael-soffield-the-rescue | `gameplay.mp4` (fragmento de 14 s, de `prisonBreak.mp4`) como contenido principal (publicado) |
| terra-trolls | 2 escenarios 2D (publicado; `esbirro.png` queda fuera: es un personaje, no mi aportación) |
| zombierush | `gameplay.mp4` (69 MB, 1080p60) como contenido principal (publicado) |
| si-senor-oscuro | 21 cartas (`carta-01..21.png`) + portada |
| go-for-sports | 24 imágenes curadas (de 64 disponibles) y prototipo Figma. **Sin memoria PDF** (retirada por privacidad, ver §3) |
| gorobeia | 29 imágenes curadas (de 41 disponibles); 2 PDF de concept art |
| whispers-of-shadows | Portada + 9 imágenes curadas (se omiten `p1-p6` y las pruebas de render) |
| simulacion-fisicas-unity | 4 vídeos de prácticas de Unity en la galería (`tela-suspendida`, `tela-bandera`, `estructura-piramidal`, `arbol-viento`), con pósters |
| bonk | Sin imágenes todavía: tarjeta con fondo neutro; carpetas preparadas en `2025-26/personal/bonk/<juego>/` |
| histeria | `histeria26.mp4` (19,8 MB) como contenido principal + 22 imágenes |
| hit-and-ufo | Demo con dos clientes en red local como contenido principal + 15 capturas |
| astrofury, alien-rush, flappy-chef, menteando, redes-sociales | Imágenes ya existentes con texto alternativo |

## 2. Vídeos: estado (2026-10-13)

Todos los vídeos de `public/` son MP4 H.264 + AAC ≤ 1920×1080 con `faststart`, se reproducen con controles (`<video controls preload="metadata">`, sin autoplay) y todos llevan póster. Ninguno alcanza 100 MB.

| Vídeo en `public/` | Tamaño | Origen / tratamiento | Página |
|---|---|---|---|
| raki-animacion/`explicativo.mp4` | 61,9 MB | `videoExplicativo` (878 MB, 1080p60). CRF 29, preset slow, sin artefactos visibles | raki-animacion (principal) |
| raki-animacion/`gameplay.mp4` | 54,9 MB | `videoGameplay` (602 MB, 4K60 → 1080p60), vía script | raki-animacion (galería) |
| raki-animacion/`videopracticafinal.mp4` | 12,2 MB | `videoPracticaFinal` (4K → 1080p, CRF 23); antes 44,9 MB en 4K | raki-animacion (galería) |
| raki-animacion/`animacion-personaje.mp4` | 16,4 MB | `AnimacionPersonaje_…` (CRF 25); antes 102,4 MB | raki-animacion (galería) |
| hit-and-ufo/`demo-multijugador.mp4` | 19,5 MB | `VIDEO_JUEGOS_EN_RED` (562 MB, 1080p60), vía script | hit-and-ufo (principal) |
| michael-soffield-the-rescue/`gameplay.mp4` | 2,4 MB | `prisonBreak.mp4` sin recodificar | principal |
| willy-fog/`animacionWillyFog.mp4` | 0,7 MB | sin recodificar (848×480) | principal |
| zombierush/`gameplay.mp4` | 69,2 MB | único ejemplar (no está en `Contenido_Porfolio`); solo remux `faststart`, sin recodificar | principal |
| histeria/`histeria26.mp4` | 19,8 MB | remux `faststart` | principal |
| international-warfare/`gameplay.mp4` | 6,1 MB | 320×240, remux `faststart` | galería |

Notas:
- La duración de cada vídeo recodificado coincide con la del original y todos se decodifican completos sin errores.
- `scripts/optimize-videos.sh` **omite destinos que ya existen**: `animacion-personaje.mp4` y `videopracticafinal.mp4` se recodificaron a mano con los mismos parámetros del script.
- Los pósters (`*-poster.jpg`) son fotogramas extraídos de cada vídeo.
- Posible mejora: `zombierush/gameplay.mp4` (69 MB, 5,7 Mbps) podría recodificarse a ~30 MB; haz antes una copia, porque es el único ejemplar.

### Sin publicar
| Original (`Contenido_Porfolio/Videos/`) | Estado |
|---|---|
| `videoArbol/Tela/Tela2/Piramide.mp4` | **Integrados** en `simulacion-fisicas-unity` (copias en `public/.../animacion-3d/simulacion-fisicas-unity/`); las versiones de `Videos_web_pendientes/` se conservan |
| `Desktop 2024.06.26 - 23.31.39.09.mp4` | Captura bruta de la práctica de la pirámide; descartada |
| `fantasyIsland/Clips/Buildfantasyisland*.mp4` (10) | Material bruto de Raki Animación; no se publican |

## 3. PDF

| Archivo | Proyecto | Estado |
|---|---|---|
| `fantasyislanddiseno3d.pdf` (4,9 MB) | fantasy-island | Integrado (memoria propia, 37 págs.) |
| `yumala/memoria.pdf` (0,9 MB) | yumala | Integrado |
| `raki-animacion/fantasyisland.pdf` (7,8 MB) | raki-animacion | Integrado (memoria de Animación 3D, 69 págs.) |
| `gorobeia/concept-art-escenario.pdf`, `concept-personaje.pdf` | gorobeia | Integrados |
| `GoForSports.pdf` | go-for-sports | **Retirado de la web** (nombres, edades y salud de los 6 usuarios entrevistados). Solo existe la copia privada `Contenido_Porfolio/Documentos/GoForSports.pdf` (ignorada por Git); ni `public/` ni el enlace de Drive se publican |
| `retratoCara.pdf` | ¿retrato-de-carla? | Pendiente: asociación no confirmada y retrato de un tercero |
| `atletiPlantilla.pdf`, `leganesPlantilla.pdf` | — | Sin proyecto; material externo |

## 4. Resueltos desde el inventario anterior

- **Procesos (21 imágenes)**: son cartas de *Sí, Señor Oscuro* (Proceso de Desarrollo de Videojuegos); renombradas a `carta-01..21.png`.
- **Extensiones/nombres**: `teoria-kÁrate*.png` → `teoria-karate*.png`.
- **Duplicados**: `yumala/portada.png`, `yumala1.png` y `yumala_portada.png` son idénticos; `gorobeia7.png` = portada.
