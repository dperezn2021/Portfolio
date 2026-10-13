# Juegos para YT playables desarrollados con IA

- **Año de desarrollo:** 2026
- **Objetivo:** Poder publicar el videojuego en YT playables
- **Herramientas:** ChatGPT, Claude Code, YT Playables, JS, Phaser3
- **Material:** capturas, enlace al juego, la idea seria hacer algun video de los juegos pero no se como, ya sea tutorial o mini gameplay


## Info de los juegos
/**
 * Blade Spin - juego principal.
 *
 * Contrato compartido con los juegos hermanos (dodger/stack/wave-clicker):
 * Phaser3 puro via CDN local (phaser.min.js), sin build step, arte 100%
 * procedural con Graphics, audio via WebAudio generado por codigo, guardado
 * persistente via Platform.storage (ver platform.js) bajo la key
 * pt_blade-spin_save. Canvas 480x800, Scale.FIT + CENTER_BOTH.
 *
 * Este archivo se construyo de forma incremental (ver CLAUDE.md / historial
 * de la tarea): primero un esqueleto minimo que arranca sin errores, luego
 * secciones anadidas una a una (audio, botones, niveles, escena de juego,
 * colision de cuchillos, resultado). Cada seccion se verifica con
 * `node --check games/blade-spin/game.js`.
 */

 /**
 * Dodger - minijuego Phaser 3 standalone.
 * Autoarrancable: al cargar este script se crea el Phaser.Game directamente.
 * Sin assets externos: todo el arte es procedural (Graphics/Text/Tweens/Particles).
 * Persistencia en localStorage bajo la clave "pt_dodger_save".
 */

 // Lumber Valley - open-world lumberjack idle-tycoon
// Phaser 3, procedural art only, no build step. See dodger/merge-fruits for shared conventions.

/**
 * Merge Fruits - estilo Suika Game / 2048.
 * Ver CLAUDE.md del repo para el contrato general de estos juegos:
 * Phaser3 puro, sin build step, arte procedural, doble moneda
 * (monedas por partida, gemas persistentes), 18 niveles con umbral
 * de puntuacion creciente y 0-3 estrellas.
 */

/**
 * Wave Clicker (edicion mejorada, standalone)
 * --------------------------------------------
 * Minijuego autocontenido en Phaser 3. El jugador toca/hace click sobre
 * enemigos que avanzan desde arriba hacia la base. Cada muerte da puntos y
 * a veces una moneda; las monedas se gastan al instante en mejoras de la
 * propia partida (dano, autoataque temporal, bomba).
 *
 * Ademas existe una moneda persistente ("Gemas") que se gana al terminar
 * cada partida en funcion de la puntuacion/oleada alcanzada. Las gemas se
 * gastan en mejoras PERMANENTES (persisten entre partidas) desde el menu.
 *
 * Este archivo se autoarranca: al cargarse crea el Phaser.Game y muestra
 * su propio menu. No depende de ningun HTML/menu externo.
 */

     /* global Phaser, Platform */
/**
 * Season Grove - minijuego Phaser 3 standalone.
 * Autoarrancable: al cargar este script se crea el Phaser.Game directamente.
 * Sin assets externos: todo el arte es procedural (Graphics/Text/Tweens).
 * Persistencia en localStorage (via Platform.storage) bajo la clave
 * "pt_season-grove_save".
 *
 * Mecanica: de un tronco central brotan ramas alternando izquierda/derecha
 * que crecen hacia un marco de seto (limite visual fijo). Hay que podarlas
 * (tocarlas) antes de que la punta cruce el seto. Cada temporada dura un
 * numero fijo de ramas resueltas; en invierno aparecen "ramas de escarcha"
 * (heladas): son mas duras y hacen falta DOS toques para partir el hielo
 * antes de que la punta cruce el seto - sigue siendo el jugador quien debe
 * tocarlas activamente, solo que cuestan mas.
 */