// src/data/collections/bonk.ts
// Los siete juegos de la colección BONK (itch.io). Datos verificados con las fichas
// del autor y con las páginas públicas de cada juego. Para añadir un octavo juego,
// copia uno de los objetos de `items` y cambia su `slug`, textos y `playUrl`.
import { localizedText as L } from '../projects/types';
import type { ProjectCollection } from './types';

const ITCH = 'https://bonkplay.itch.io';

export const BONK_COLLECTION: ProjectCollection = {
  projectSlug: 'bonk',
  storeUrl: ITCH,
  items: [
    {
      slug: 'blade-spin',
      title: 'Blade Spin',
      genre: L('Arcade de precisión', 'Precision arcade'),
      summary: L(
        'Lanza cuchillos contra un tronco que no deja de girar sin chocar con los que ya están clavados.',
        'Throw knives into a constantly spinning log without hitting the ones already stuck in it.'
      ),
      description: L(
        'Un único control y una única regla: un cuchillo que golpea a otro ya clavado puede acabar la partida. Todo el juego gira alrededor del tempo del lanzamiento, con frutas doradas que premian el riesgo y potenciadores que alteran el giro del tronco.',
        'One input and one rule: a knife that hits another one already stuck can end the run. The whole game is about the timing of each throw, with golden fruit that rewards risk and power-ups that change how the log spins.'
      ),
      controls: [
        L('Clic o toque para lanzar un cuchillo.', 'Click or tap to throw a knife.'),
        L('Clava los cuchillos necesarios para completar el objetivo y superar el nivel.', 'Stick the required knives to fill the target and clear the level.'),
        L('Evita golpear un cuchillo ya clavado.', 'Avoid hitting a knife that is already stuck.'),
      ],
      mechanics: [
        L('Un tronco gira en el centro de la pantalla y cada nivel exige completar su objetivo.', 'A log spins at the centre of the screen and each level asks you to complete its target.'),
        L('Un cuchillo que choca con otro clavado puede terminar la partida.', 'A knife that hits another stuck knife can end the run.'),
        L('Las frutas doradas que giran junto al objetivo dan puntos extra.', 'Golden fruit spinning around the target gives bonus points.'),
        L('Las monedas de cada partida se gastan en ventajas temporales; las gemas, en mejoras permanentes.', 'Coins earned in a run are spent on temporary advantages; gems on permanent upgrades.'),
        L('Los niveles son cada vez más peligrosos y exigen adaptarse a la rotación.', 'Levels get more dangerous and require adapting to the rotation.'),
      ],
      powerUps: [
        L('Slow: ralentiza el giro del tronco durante unos segundos.', 'Slow: slows the log’s rotation for a few seconds.'),
        L('Gold: convierte la siguiente fruta en dorada, que da el doble de puntos.', 'Gold: turns the next fruit golden for double points.'),
        L('Clear: elimina de golpe todos los cuchillos clavados.', 'Clear: instantly removes every stuck knife.'),
      ],
      upgrades: [
        L('Shield: absorbe un golpe mortal por partida.', 'Shield: absorbs one fatal hit per run.'),
        L('Coin Boost: más monedas por cada cuchillo clavado.', 'Coin Boost: extra coins for every knife stuck.'),
        L('Fruit Boost: más monedas al golpear fruta.', 'Fruit Boost: extra coins when hitting fruit.'),
        L('Slow Duration: el potenciador Slow dura más.', 'Slow Duration: the Slow power-up lasts longer.'),
      ],
      highlights: [
        L('Un solo control: toda la dificultad está en el timing.', 'A single input: all the difficulty is in the timing.'),
        L('Lienzo de 480 × 800 con escalado adaptable a distintas pantallas.', '480 × 800 canvas with adaptive scaling for different screens.'),
        L('Audio generado con WebAudio y arte procedural.', 'WebAudio-generated sound and procedural art.'),
        L('Progresión guardada entre partidas con Platform.storage.', 'Progress saved between runs with Platform.storage.'),
      ],
      technologies: ['Phaser 3', 'Arte procedural', 'WebAudio', 'Platform.storage'],
      playUrl: `${ITCH}/blade-spin`,
      icon: 'target',
      accent: 'rose',
      cover: '/images/projects/2025-26/personal/bonk/blade-spin/knifeBanner.png',
      gallery: [
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/blade-spin/knifeImage.png', alt: 'Pantalla de juego de Blade Spin: cuchillos clavados en un tronco giratorio' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/blade-spin/knifeLevels.png', alt: 'Pantalla de niveles de Blade Spin' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/blade-spin/knifePlay.png', alt: 'Gameplay de Blade Spin con puntuación' },
      ],
    },
    {
      slug: 'dodger',
      title: 'Dodger',
      genre: L('Supervivencia arcade', 'Arcade survival'),
      summary: L(
        'Pilota una nave entre oleadas de obstáculos y gana puntos rozándolos sin chocar.',
        'Steer a ship through waves of obstacles and score by grazing them without crashing.'
      ),
      description: L(
        'Aquí esquivar no basta: pasar muy cerca de un obstáculo sin chocar da Graze Points, y encadenar roces sube el combo. Arriesgar es la forma más rentable de jugar, a lo largo de seis fases que cambian el patrón de obstáculos.',
        'Dodging is not enough here: passing very close to an obstacle without crashing awards Graze Points, and chaining grazes raises the combo. Taking risks is the most rewarding way to play, across six phases that change the obstacle patterns.'
      ),
      controls: [
        L('Arrastra horizontalmente con el ratón o el dedo para dirigir la nave.', 'Drag horizontally with the mouse or your finger to steer the ship.'),
        L('No hay botones: mueve, esquiva y sobrevive.', 'No buttons: move, dodge and survive.'),
      ],
      mechanics: [
        L('Sobrevive a oleadas interminables de obstáculos mientras superas tu récord.', 'Survive endless waves of obstacles while chasing your high score.'),
        L('Graze Points: cuanto más cerca pasas sin chocar, más puntos consigues.', 'Graze Points: the closer you pass without crashing, the more points you earn.'),
        L('Encadenar roces aumenta el combo y también da más monedas.', 'Chaining grazes builds the combo and also earns more coins.'),
        L('Seis fases de dificultad creciente: Takeoff, Swarm, Drift, Cascade, Storm y Core.', 'Six phases of rising difficulty: Takeoff, Swarm, Drift, Cascade, Storm and Core.'),
        L('Aparecen patrones nuevos, como obstáculos en pareja, muros y cristales a la deriva.', 'New patterns appear, such as paired obstacles, walls and drifting crystals.'),
      ],
      powerUps: [
        L('Shield: bloquea el siguiente golpe.', 'Shield: blocks the next hit.'),
        L('Slow-Mo: frena los obstáculos durante unos segundos.', 'Slow-Mo: slows the obstacles for a few seconds.'),
        L('x2 Points: duplica temporalmente la puntuación.', 'x2 Points: temporarily doubles your score.'),
      ],
      upgrades: [
        L('Reinforced Hull: empieza con una vida extra.', 'Reinforced Hull: start with an extra life.'),
        L('Market Contacts: los potenciadores cuestan menos monedas.', 'Market Contacts: power-ups cost fewer coins.'),
        L('Coin Magnet: mayor radio para recoger monedas.', 'Coin Magnet: larger coin pickup radius.'),
        L('Emergency Shield: cada partida empieza con un escudo activo.', 'Emergency Shield: every run starts with a shield active.'),
        L('Golden Core: las monedas valen más.', 'Golden Core: coins are worth more.'),
      ],
      highlights: [
        L('Sistema de Graze Points y combos que premia el riesgo.', 'Graze Points and combo system that rewards risk.'),
        L('Seis fases con nombre, de Takeoff a Core.', 'Six named phases, from Takeoff to Core.'),
        L('Las gemas se conservan entre partidas y se gastan en el menú principal.', 'Gems persist between runs and are spent from the main menu.'),
        L('Control táctil de un solo gesto.', 'One-gesture touch control.'),
      ],
      technologies: ['Phaser 3', 'Arte procedural', 'Persistencia local'],
      playUrl: `${ITCH}/dodger`,
      icon: 'rocket_launch',
      accent: 'cyan',
      cover: '/images/projects/2025-26/personal/bonk/dodger/dodgerImage.png',
      gallery: [
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/dodger/dodgeTitulo.png', alt: 'Pantalla de título de Dodger' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/dodger/dodgerLevels.png', alt: 'Pantalla de fases de Dodger' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/dodger/dodgerPlay.png', alt: 'Gameplay de Dodger con nave esquivando obstáculos' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/dodger/dodgerUpgrades.png', alt: 'Tienda de mejoras de Dodger' },
      ],
    },
    {
      slug: 'lumber-valley',
      title: 'Lumber Valley',
      genre: L('Simulación, gestión e idle-tycoon', 'Simulation, management and idle tycoon'),
      summary: L(
        'Tala, carga y vende madera para convertir un pequeño bosque en un negocio maderero.',
        'Chop, carry and sell wood to turn a small forest into a lumber business.'
      ),
      description: L(
        'Un leñador en un valle abierto que trabaja casi solo: tala por proximidad, carga troncos a la espalda y los vende en el mercado. Lo que lo distingue es que el valle recuerda: un árbol talado sigue caído hasta que acaba su tiempo real de reaparición, aunque cierres el juego.',
        'A lumberjack in an open valley who almost works on their own: chopping happens by proximity, logs stack on your back and are sold at the market. What sets it apart is that the valley remembers: a felled tree stays down until its real-time respawn ends, even if you close the game.'
      ),
      controls: [
        L('Arrastra en cualquier parte de la pantalla para mover al leñador.', 'Drag anywhere on the screen to move the lumberjack.'),
        L('Talar, recoger e interactuar ocurre automáticamente al acercarte.', 'Chopping, collecting and interacting happen automatically when you get close.'),
        L('Cuando lleves suficiente madera, vuelve al mercado y véndela.', 'When you carry enough wood, head back to the market and sell it.'),
      ],
      mechanics: [
        L('Los árboles talados sueltan troncos que se apilan sobre la espalda del personaje.', 'Felled trees drop logs that stack on the character’s back.'),
        L('Vender la carga da dinero para reinvertir en el negocio.', 'Selling the load gives money to reinvest in the business.'),
        L('Contratar jornaleros autónomos que talan árboles por su cuenta.', 'Hire autonomous workers who chop trees on their own.'),
        L('Ampliar el territorio, desbloqueando zonas con más árboles.', 'Expand the territory, unlocking areas with more trees.'),
        L('Mejorar el aserradero para que cada tronco valga más.', 'Upgrade the sawmill so every log is worth more.'),
        L('Mejorar capacidad de carga, velocidad de movimiento y velocidad de tala.', 'Upgrade carry capacity, walk speed and chop speed.'),
      ],
      highlights: [
        L('Los árboles talados conservan su estado hasta que acaba su tiempo real de reaparición, incluso con el juego cerrado.', 'Felled trees keep their state until their real-time respawn ends, even with the game closed.'),
        L('Control de un solo gesto: arrastrar para moverse.', 'One-gesture control: drag to move.'),
        L('Progresión de pequeña tala a negocio con trabajadores y aserradero.', 'Progression from a small clearing to a business with workers and a sawmill.'),
      ],
      technologies: ['Phaser 3', 'Arte procedural'],
      playUrl: `${ITCH}/lumber-valley`,
      icon: 'forest',
      accent: 'emerald',
      cover: '/images/projects/2025-26/personal/bonk/lumber-valley/lumberBanner.png',
      gallery: [
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/lumber-valley/lumberImage.png', alt: 'Mapa del juego Lumber Valley con árboles y mercado' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/lumber-valley/lumberMenu.png', alt: 'Menú principal de Lumber Valley' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/lumber-valley/lumberTienda.png', alt: 'Tienda y mejoras de Lumber Valley' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/lumber-valley/LUMBERPlay.png', alt: 'Gameplay de Lumber Valley: leñador talando árboles' },
      ],
    },
    {
      slug: 'merge-fruits',
      title: 'Merge Fruits',
      genre: L('Puzle de físicas', 'Physics puzzle'),
      summary: L(
        'Suelta frutas en un tarro y fusiona las iguales para crear otras mayores sin desbordar la línea roja.',
        'Drop fruit into a jar and merge matching ones into bigger fruit without crossing the red line.'
      ),
      description: L(
        'Cada lanzamiento cambia un tablero gobernado por físicas, y el objetivo es construir la mayor fruta posible. Sus tres potenciadores, sobre todo Undo, que restaura el estado exacto anterior, convierten los errores en decisiones que se pueden corregir.',
        'Every drop changes a physics-driven board, and the goal is to build the biggest fruit possible. Its three power-ups, above all Undo, which restores the exact previous state, turn mistakes into decisions you can correct.'
      ),
      controls: [
        L('Mueve el ratón o el dedo a izquierda y derecha para colocar la fruta.', 'Move the mouse or your finger left and right to position the fruit.'),
        L('Toca o haz clic para soltarla.', 'Tap or click to drop it.'),
      ],
      mechanics: [
        L('Dos frutas iguales que se tocan se fusionan en la siguiente, más grande.', 'Two matching fruits that touch merge into the next, bigger one.'),
        L('Si la pila asentada supera la línea roja superior, la partida termina.', 'If the settled pile rises above the red line, the run ends.'),
        L('Planificar los lanzamientos permite provocar reacciones en cadena.', 'Planning your drops lets you trigger chain reactions.'),
        L('Las monedas de la partida se gastan en potenciadores; las gemas, en mejoras permanentes.', 'Coins earned in a run are spent on power-ups; gems on permanent upgrades.'),
      ],
      powerUps: [
        L('Undo: devuelve todo el tablero al estado anterior a tu último lanzamiento.', 'Undo: restores the whole board to how it was before your previous drop.'),
        L('Choose: eliges la siguiente fruta entre dos opciones aleatorias.', 'Choose: pick your next fruit from two random options.'),
        L('Boost: convierte al instante la siguiente fruta en una más grande.', 'Boost: instantly upgrades the next fruit into a bigger one.'),
      ],
      upgrades: [
        L('Starting Coins: empiezas cada partida con monedas extra.', 'Starting Coins: begin every run with extra coins.'),
        L('Grace Time: más margen antes de que un desborde termine la partida.', 'Grace Time: more time before an overflow ends the run.'),
        L('Gem Gain: más gemas al terminar cada partida.', 'Gem Gain: earn more gems after each run.'),
        L('Faster Drops: menos espera entre una fruta y la siguiente.', 'Faster Drops: less waiting between fruits.'),
      ],
      highlights: [
        L('Undo restaura el tablero exactamente como estaba antes del último lanzamiento.', 'Undo restores the board exactly as it was before the last drop.'),
        L('Choose y Boost permiten influir en la siguiente fruta.', 'Choose and Boost let you influence the next fruit.'),
        L('Monedas de partida y gemas persistentes entre partidas.', 'Per-run coins and gems that persist between runs.'),
      ],
      technologies: ['Phaser 3', 'Arte procedural'],
      playUrl: `${ITCH}/merge-fruits`,
      icon: 'nutrition',
      accent: 'orange',
      cover: '/images/projects/2025-26/personal/bonk/merge-fruits/mergeBanner.png',
      gallery: [
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/merge-fruits/mergeImage.png', alt: 'Tarro con frutas en Merge Fruits' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/merge-fruits/mergePlay.png', alt: 'Gameplay de Merge Fruits: fusionando frutas' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/merge-fruits/mergeMejoras.png', alt: 'Tienda de potenciadores de Merge Fruits' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/merge-fruits/mergeComplete.png', alt: 'Fruta completada en Merge Fruits' },
      ],
    },
    {
      slug: 'wave-clicker',
      title: 'Wave Clicker',
      genre: L('Arcade, clicker y defensa por oleadas', 'Arcade, clicker and wave defence'),
      summary: L(
        'Toca a los enemigos antes de que crucen la línea defensiva y sobrevive a oleadas cada vez más duras.',
        'Tap enemies before they cross the defensive line and survive increasingly tough waves.'
      ),
      description: L(
        'Un clicker en el que cada toque es un ataque y la base está siempre en peligro. Las oleadas mezclan enemigos con escudo, atacantes rápidos y jefes, y las mejoras instantáneas se compran durante la partida con teclas o botones.',
        'A clicker where every tap is an attack and the base is always at risk. Waves mix shielded enemies, fast attackers and bosses, and instant upgrades are bought mid-run with keys or buttons.'
      ),
      controls: [
        L('Clic o toque sobre un enemigo para atacarlo.', 'Click or tap an enemy to attack it.'),
        L('Teclas 1, 2 y 3 para comprar mejoras instantáneas.', 'Keys 1, 2 and 3 to buy instant upgrades.'),
        L('Las mismas mejoras están disponibles con botones en pantalla.', 'The same upgrades are available through on-screen buttons.'),
      ],
      mechanics: [
        L('Los enemigos bajan desde la parte superior hacia la base; hay que destruirlos antes de que crucen la línea defensiva.', 'Enemies march down from the top towards the base; destroy them before they cross the defensive line.'),
        L('Cada oleada trae más enemigos y combinaciones más peligrosas, con enemigos con escudo, atacantes que aceleran y oleadas de jefes.', 'Each wave brings more enemies and more dangerous combinations, with shielded enemies, accelerating attackers and boss waves.'),
        L('Cada nivel se supera alcanzando su oleada objetivo.', 'Each level is cleared by reaching its target wave.'),
        L('Destruir enemigos seguidos sin dejar pasar ninguno sube el combo y da puntos extra.', 'Destroying enemies in a row without letting any through builds the combo and gives bonus points.'),
      ],
      powerUps: [
        L('Damage: ataques más fuertes.', 'Damage: stronger attacks.'),
        L('Auto-Attack: una torreta temporal dispara sola.', 'Auto-Attack: a temporary turret fires automatically.'),
        L('Bomb: destruye todos los enemigos que haya en pantalla.', 'Bomb: destroys every enemy on screen.'),
      ],
      upgrades: [
        L('Base Damage: empiezas cada partida golpeando más fuerte.', 'Base Damage: start every run hitting harder.'),
        L('Base Health: la base aguanta más daño.', 'Base Health: the base survives more damage.'),
        L('Upgrade Discount: las mejoras instantáneas cuestan menos.', 'Upgrade Discount: instant upgrades are cheaper.'),
        L('Shockwave: tus ataques dañan también a enemigos cercanos.', 'Shockwave: your attacks also damage nearby enemies.'),
        L('Regeneration: la base recupera vida lentamente.', 'Regeneration: the base slowly restores health.'),
        L('Critical Hit: probabilidad de causar daño adicional.', 'Critical Hit: a chance to deal extra damage.'),
      ],
      highlights: [
        L('Mejoras instantáneas con teclado (1, 2, 3) o botones táctiles.', 'Instant upgrades via keyboard (1, 2, 3) or touch buttons.'),
        L('Oleadas con jefes, enemigos con escudo y atacantes rápidos.', 'Waves with bosses, shielded enemies and fast attackers.'),
        L('Seis mejoras permanentes que persisten entre partidas.', 'Six permanent upgrades that persist between runs.'),
      ],
      technologies: ['Phaser 3', 'Arte procedural', 'Persistencia local'],
      playUrl: `${ITCH}/wave-clicker`,
      icon: 'ads_click',
      accent: 'violet',
      cover: '/images/projects/2025-26/personal/bonk/wave-clicker/waveBannerq.png',
      gallery: [
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/wave-clicker/waveImage.png', alt: 'Pantalla de juego de Wave Clicker con enemigos' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/wave-clicker/waveMenu.png', alt: 'Menú principal de Wave Clicker' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/wave-clicker/wavePlay.png', alt: 'Gameplay de Wave Clicker: atacando enemigos' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/wave-clicker/waveUpgrades.png', alt: 'Tienda de mejoras de Wave Clicker' },
      ],
    },
    {
      slug: 'season-grove',
      title: 'Season Grove',
      genre: L('Arcade de reflejos', 'Reflex arcade'),
      summary: L(
        'Poda las ramas antes de que lleguen al seto mientras el vergel cambia de estación.',
        'Prune branches before they reach the hedge while the grove changes with the seasons.'
      ),
      description: L(
        'Las ramas crecen a ambos lados de un tronco central y el reto cambia con cada estación: primavera, verano, otoño e invierno. En invierno aparecen ramas congeladas que piden dos toques, uno para romper el hielo y otro para podarlas.',
        'Branches grow on both sides of a central trunk and the challenge changes with each season: spring, summer, autumn and winter. In winter, frozen branches appear that need two taps, one to break the ice and another to prune them.'
      ),
      controls: [
        L('Clic o toque sobre una rama para podarla.', 'Click or tap a branch to prune it.'),
        L('Poda antes de que la rama alcance el límite del seto.', 'Prune before the branch reaches the edge of the hedge.'),
      ],
      mechanics: [
        L('Las ramas brotan de ambos lados del tronco y crecen despacio hacia el seto.', 'Branches sprout from both sides of the trunk and slowly grow towards the hedge.'),
        L('Si se escapan demasiadas ramas, la partida termina.', 'If too many branches escape, the run ends.'),
        L('El escenario pasa por primavera, verano, otoño e invierno, con otro ambiente y nuevos retos.', 'The grove cycles through spring, summer, autumn and winter, changing the atmosphere and adding new challenges.'),
        L('Cada nivel se supera alcanzando su objetivo de podas.', 'Each level is cleared by reaching its pruning target.'),
      ],
      powerUps: [
        L('Freeze: detiene temporalmente el crecimiento de todas las ramas.', 'Freeze: temporarily stops every branch from growing.'),
        L('Mercy: perdona el siguiente fallo.', 'Mercy: forgives your next mistake.'),
      ],
      upgrades: [
        L('Deep Roots: un fallo adicional antes de perder.', 'Deep Roots: one additional mistake before game over.'),
        L('Patient Sap: las ramas crecen más despacio.', 'Patient Sap: branches grow more slowly.'),
        L('Fertile Soil: una moneda extra por cada rama podada.', 'Fertile Soil: an extra coin for every branch pruned.'),
        L('Lucky Charm: cada partida empieza con un perdón gratuito.', 'Lucky Charm: start each run with a free mistake pardon.'),
      ],
      highlights: [
        L('Cuatro estaciones que cambian el ambiente y la dificultad.', 'Four seasons that change the atmosphere and the difficulty.'),
        L('Ramas congeladas en invierno que requieren dos toques.', 'Frozen branches in winter that need two taps.'),
        L('Las semillas ganadas se invierten en mejoras permanentes.', 'Seeds earned after each run are spent on permanent upgrades.'),
      ],
      technologies: ['Phaser 3', 'Arte procedural', 'Persistencia local'],
      playUrl: `${ITCH}/season-grove`,
      icon: 'eco',
      accent: 'amber',
      cover: '/images/projects/2025-26/personal/bonk/season-grove/groveImage.png',
      gallery: [
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/season-grove/SEASONbANNER.png', alt: 'Banner de Season Grove con las cuatro estaciones' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/season-grove/Captura de pantalla 2026-09-23 141712.png', alt: 'Gameplay de Season Grove: podando ramas' },
      ],
    },
    {
      slug: 'stack',
      title: 'Stack',
      genre: L('Arcade de precisión y apilamiento', 'Precision stacking arcade'),
      summary: L(
        'Suelta bloques en movimiento sobre una torre; lo que sobresale se recorta y la base se estrecha.',
        'Drop moving blocks onto a tower; whatever overhangs is trimmed and the base gets narrower.'
      ),
      description: L(
        'Un apilador de un solo botón donde cada fallo cuesta anchura: el bloque desalineado se recorta y la plataforma se vuelve peligrosamente estrecha. Colocar casi a la perfección activa el sistema PERFECT, con monedas extra y combos, y la red de seguridad salva un mal lanzamiento.',
        'A one-button stacker where every miss costs width: a misaligned block is trimmed and the platform becomes dangerously thin. Landing almost perfectly triggers the PERFECT system, with bonus coins and combos, and the safety net can save a bad drop.'
      ),
      controls: [
        L('Clic, toque o barra espaciadora para soltar el bloque.', 'Click, tap or press the space bar to drop the block.'),
        L('Suelta cada bloque en el momento justo para alinearlo con la torre.', 'Drop each block at exactly the right moment to align it with the tower.'),
      ],
      mechanics: [
        L('Los bloques se deslizan de lado a lado sobre la torre.', 'Blocks slide from side to side above the tower.'),
        L('Un bloque desalineado se recorta a la parte que coincide con el de debajo; fallar reduce la anchura disponible.', 'A misaligned block is trimmed to the overlap with the block below; missing reduces the available width.'),
        L('Cada nivel se supera alcanzando su altura objetivo.', 'Each level is cleared by reaching its target height.'),
        L('PERFECT: colocar casi a la perfección da monedas extra y sube el combo.', 'PERFECT: landing almost perfectly gives bonus coins and builds the combo.'),
        L('Bloques dorados (dan monedas) y anchos (recuperan parte de la anchura perdida).', 'Golden blocks (award coins) and wide blocks (restore some lost width).'),
        L('A medida que crece la torre cambian los patrones de movimiento.', 'As the tower grows, movement patterns change.'),
      ],
      powerUps: [
        L('Width: recupera la anchura de la torre.', 'Width: restores the tower’s width.'),
        L('Slow: ralentiza el bloque en movimiento.', 'Slow: slows the moving block.'),
        L('Net: te salva de una mala colocación.', 'Net: saves you from one bad drop.'),
      ],
      upgrades: [
        L('Starting Width: base inicial más ancha.', 'Starting Width: begin with a wider base.'),
        L('Free Safety Net: cada partida empieza con una red preparada.', 'Free Safety Net: every run starts with a net ready.'),
        L('Combo Scaffolding: el combo sobrevive a un fallo.', 'Combo Scaffolding: your combo survives one miss.'),
        L('Starting Coins: monedas iniciales.', 'Starting Coins: begin each run with extra coins.'),
        L('Extended Precision: más margen para conseguir un PERFECT.', 'Extended Precision: a larger margin for a PERFECT.'),
      ],
      highlights: [
        L('Sistema PERFECT con monedas extra y combos.', 'PERFECT system with bonus coins and combos.'),
        L('Bloques dorados y anchos que cambian el ritmo de la partida.', 'Golden and wide blocks that change the pace of a run.'),
        L('Se controla con un solo clic, toque o la barra espaciadora.', 'Controlled with a single click, tap or the space bar.'),
      ],
      technologies: ['Phaser 3', 'HTML5'],
      playUrl: `${ITCH}/stack`,
      icon: 'layers',
      accent: 'sky',
      cover: '/images/projects/2025-26/personal/bonk/stack/stackBanner.png',
      gallery: [
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/stack/stackImage.png', alt: 'Torre en construcción en Stack' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/stack/stackMenu.png', alt: 'Menú de Stack' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/stack/stackPlay.png', alt: 'Gameplay de Stack: soltando un bloque' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/stack/stackUpgrades.png', alt: 'Tienda de mejoras de Stack' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/stack/stackTorre1.png', alt: 'Torre alta en Stack' },
        { type: 'image', src: '/images/projects/2025-26/personal/bonk/stack/stackTorre2.png', alt: 'Torre en progresión en Stack' },
      ],
    },
  ],
};
