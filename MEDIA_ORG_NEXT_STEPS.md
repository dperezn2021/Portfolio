# Multimedia — pasos pendientes

Estado completo en `docs/MEDIA_INVENTORY.md`. Aquí solo lo que falta. Los vídeos ya están optimizados e integrados.

## Decisiones tuyas

- **Google Drive de Go For Sports**: la web ya no enlaza la memoria, pero el archivo de Drive sigue siendo accesible para quien tenga el enlace antiguo (que permanece en el historial de Git y en cualquier despliegue anterior). Quita el uso compartido en Drive (`1vPIxjVVV_J-wlNxr6CigIUlY7ocMf11r`) si no quieres que siga abierto.
- **`retratoCara.pdf`**: ¿es de *Retrato de Carla*? Además es el retrato de una persona real.
- **Whispers of Shadows `p1–p6`**: no están en la galería porque no consta si son el antagonista; si lo son, añádelos.
- **Menteando**: la ficha menciona web, vídeo, memoria y presentación, pero la entrada no tiene ningún enlace/archivo. Facilítalos y se añaden a `resources`.
- **Vídeos de Raki Animación**: `explicativo` y `gameplay` se asignaron a este proyecto porque muestran al personaje en el escenario animado; confírmalo al verlos. Los títulos («Recorrido por la escena con Raki», «Práctica final») son descriptivos y puedes cambiarlos en `raki-animacion.ts`.
- **Zombierush `gameplay.mp4`** (69 MB): único ejemplar. Si quieres reducirlo, copia antes el original a `Contenido_Porfolio/Videos/` y recodifícalo.
- **Proyectos ocultos sin material**: `fly-fumigator`, `retrato-de-carla`, `animales-y-plantas-fantasticos`, `figura-femenina-con-armadura`, `investigacion-ratchet-and-clank`, `juego-de-la-vida`, `fabrica`, `rompecubos`, `practica-a-estrella`, `entrenamiento-q-learning`, `entornos-multijugador`, `proyecto-valorant-datos`, `personaje-dj-autonomo`, `quest`, `wordle`, y los 4 sin ficha (`bingo`, `producto-haptico-startup`, `storyboard-escena-literaria`, `presentacion-directx12`).

## Antes de hacer commit

- Revisa los textos que no te convenzan (edítalos en el `.ts` y en `translations.ts`, ES y EN; ver `docs/PROJECT_CHEATSHEET.md`).
- `Contenido_Porfolio/` está en `.gitignore` (contiene la memoria privada de Go For Sports y vídeos de varios GB). **No lo fuerces** con `git add -f`. Son 5,7 GB de material local.
- `scripts/optimize-videos.sh` omite destinos que ya existen; para volver a codificar un vídeo, borra antes su copia en `public/`.
- Si la próxima vez añades vídeos: MP4 H.264, ≤1080p, `faststart`, <100 MB (mejor <60), con `poster`.
