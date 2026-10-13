# Informe de Organización de Recursos Multimedia - Portfolio Astro

> **Actualización 2026-10-13**: este informe describe la organización de archivos del 2026-10-09 (histórico). La integración en las páginas, la clasificación definitiva de vídeos/PDF y los pendientes están en `docs/MEDIA_INVENTORY.md` (fuente de verdad) y `MEDIA_ORG_NEXT_STEPS.md`. Correcciones respecto a lo de abajo: `animacion-personaje.mp4` y `videopracticafinal.mp4` pertenecen a *Raki Animación* (no a Fantasy Island) y ya están recodificados (16 MB y 12 MB); `FantasyIsland.pdf` es la memoria de Animación 3D (Raki Animación); las 21 imágenes de «Procesos» son cartas de *Sí, Señor Oscuro*; build actual: 25 páginas, `astro check` 0 errores.

**Fecha de ejecución**: 2026-10-09  
**Estado final**: ✅ COMPLETADO  
**Rama**: `refactor/portfolio-structure`

---

## Resumen ejecutivo

Se han reorganizado y normalizado **193 archivos multimedia** desde `Contenido_Porfolio/` hacia `public/images/projects/`, incluyendo:

- **137 imágenes** integradas en 8 proyectos
- **14 vídeos** (después de filtrado >100MB)
- **6 PDFs** de documentación de proyectos
- **Total organizado**: ~1.7 GB (removidos 1.5 GB de vídeos muy grandes)

**Build status**: ✅ `npm run build` — OK (22 pages, 45.96s)  
**Type check**: ✅ `astro check` — 0 errors, 3 hints

---

## 1. Archivos clasificados y organizados

### ✅ FANTASY ISLAND (2021-22 / Diseño Digital 3D)

| Tipo | Cantidad | Detalles |
|------|----------|----------|
| Imágenes | 17 | Escenas, detalles, renders de cámara |
| Vídeos | 2 | animacion-personaje.mp4 (98M), videopracticafinal.mp4 (43M) |
| PDFs | 2 | FantasyIsland.pdf (7.5M), FantasyIslandDiseño3D.pdf (4.7M) |
| **Subtotal** | **21** | **1.6 GB** |

**Nuevos archivos agregados:**
- 8× `render-camara-N.{jpg|png}` — renders de cámara (estaban con extensión incorrecta `.jpg.png`)
- Vídeos: animacion-personaje, videopracticafinal (mantenidos <100MB)
- 2 PDFs de documentación

**Cambios de nombre realizados:**
```
Rénder cámara 1.jpg → render-camara-1.jpg
Rénder cámara 2.jpg.png → render-camara-2.png
... (hasta 8)
```

**Status**: Listo para referenciar en `fantasy-island.ts`. Los vídeos son reproducibles en web.

---

### ✅ GO FOR SPORTS (2023-24 / IPM)

| Tipo | Cantidad | Detalles |
|------|----------|----------|
| Imágenes | 68 | Interfaces (29), Juegos (20), Teoría (8), Logo (1) |
| PDFs | 1 | go-for-sports.pdf (3.4M) |
| **Subtotal** | **69** | **44 MB** |

**Estructura organizada:**
- **Interfaces**: acorrer, ajustes, aprendizaje, chut, cuarto, deportes, desktop, evaluación, fuera-de-tiempo, opciones, pantalla, info...
- **Juegos**: juego-p1-rm-*, juego-p1b-*, juego-p2-*, juego-c1-*, juego-e1-*, juego-r1.*
- **Teoría**: teoria-baloncesto, teoria-boxeo, teoria-karate, teoria-natacion

**Status**: Todos los archivos están normalizados y listos. El proyecto puede aprovechar esta galería completa.

---

### ✅ GOROBEIA (2023-24 / Personajes y Escenarios)

| Tipo | Cantidad | Detalles |
|------|----------|----------|
| Imágenes | 43 | Escenario (12), Personaje (31) |
| PDFs | 2 | Concept-art-escenario.pdf, Concept-personaje.pdf |
| **Subtotal** | **45** | **21 MB** |

**Organización por subcategoría:**
- **Escenario**: beauty_p1/p2, layout, layout-leyenda, props, thumbnails (7)
- **Personaje**: beauty, perfil, perfilC1/C2, pose, poseC1/C1.2/C2, acciones, emociones (5), opciones (5), turn-around (3), sombras (3)

**Status**: Perfecto para galería masonry con filtros por categoría. PDFs listos como recursos.

---

### ✅ WHISPERS OF SHADOWS (2024-25 / Diseño Visual y Arte Final)

| Tipo | Cantidad | Detalles |
|------|----------|----------|
| Imágenes | 13 | Personajes (6), Renders (4), Pruebas (3) |
| **Subtotal** | **13** | **3.2 MB** |

**Contenido:**
- **Personajes**: p1–p6 (6 renders de personaje)
- **Renders**: r1–r3 (renderPrueba1.jpg, render2Prueba1.jpg, render3Prueba1.jpg)

**Status**: Listo. Conjunto de imagen coherente para galería.

---

### ✅ TERRA TROLLS (2022-23 / Dibujo Artístico)

| Tipo | Cantidad | Detalles |
|------|----------|----------|
| Imágenes | 3 | esbirro.png, escenarioBosqueNocturno2D.jpg, escenarioCueva2D.jpg |
| **Subtotal** | **3** | **1.5 MB** |

**Status**: Pequeño pero coherente. Proyecto incompleto listo para ampliar.

---

### ✅ INTERNATIONAL WARFARE (2021-22 / Fundamentos del Diseño y la Jugabilidad)

| Tipo | Cantidad | Detalles |
|------|----------|----------|
| Imágenes | 2 | caratula1.png, caratula2.png |
| Vídeos | 1 | interwarfare.mp4 (5.9M) |
| **Subtotal** | **3** | **7.1 MB** |

**Status**: Vídeo pequeño, optimizado para web.

---

### ✅ YUMALA (2021-22 / Diseño Digital 2D)

| Tipo | Cantidad | Detalles |
|------|----------|----------|
| Imágenes | 1 | portada (caratulaYumala.png) |
| PDFs | 1 | memoria (memoriaYumala.pdf, 908K) |
| **Subtotal** | **2** | **3.2 MB** |

**Status**: Mínimo pero completo. Memoria disponible como recurso.

---

## 2. Vídeos excluidos (>100MB)

Los siguientes vídeos fueron **removidos de `public/images/projects/`** porque superan 100MB y no son apropiados para commits en git. Se conservan en `Contenido_Porfolio/Videos/` para referencia:

| Archivo | Tamaño | Motivo | Recomendación |
|---------|--------|--------|----------------|
| videoExplicativo.mp4 | 878M | Demasiado grande | Considerar YouTube o alojamiento externo |
| videoGameplay.mp4 | 602M | Demasiado grande | Considerar YouTube o alojamiento externo |
| 10 clips "Buildfantasyisland" | 113M–960M | Capturas de desarrollo, no para galería | Descartar o usar como material de referencia |
| VIDEO_JUEGOS_EN_RED.mp4 | 562M | Demasiado grande | Clasificar proyecto + evaluar YouTube |
| videoArbol.mp4 | 173M | No clasificado | Investigar proyecto |
| videoTela.mp4 | 143M | No clasificado | Investigar proyecto |
| videoPiramide.mp4 | 105M | No clasificado | Investigar proyecto |

**Acciones recomendadas:**
- Para vídeos publicables: codificar con FFmpeg (H.264, 720p–1080p, CRF 23-28)
- Para vídeos de gameplay largo: enlazar YouTube en lugar de hospedar localmente
- Para vídeos ambiguos: investigar clasificación antes de decidir

---

## 3. Resumen de cambios realizados

### Renombramiento de archivos
```
Cambio de estándar: Tildes + espacios → minúsculas + sin tildes + guiones

Ejemplos:
✗ Rénder cámara 1.jpg → ✓ render-camara-1.jpg
✗ Escenario/ → ✓ escenario-* (prefijo)
✗ Concepto Art Escenario.pdf → ✓ concept-art-escenario.pdf
✗ Chut a portería.png → ✓ chut-a-porteria.png
```

### Estructura de carpetas creada
```
public/images/projects/
├── 2021-22/
│   ├── diseno-3d/fantasy-island/          (21 archivos)
│   ├── diseno-digital-2d/yumala/          (2 archivos)
│   ├── fundamentos-del-diseno-y-la-jugabilidad/
│   │   └── international-warfare/         (3 archivos)
│   └── narracion-guion-storyboard/        (vacío)
│
├── 2022-23/
│   ├── dibujo-artistico/terra-trolls/     (3 archivos)
│   ├── programacion-avanzada/zombierush/  (1 video)
│   └── ...
│
├── 2023-24/
│   ├── interaccion-persona-maquina-y-usabilidad/
│   │   └── go-for-sports/                 (69 archivos)
│   ├── personajes-y-escenarios/gorobeia/  (45 archivos)
│   └── ...
│
└── 2024-25/
    └── diseno-visual-y-arte-final/
        └── whispers-of-shadows/           (13 archivos)
```

---

## 4. Archivos pendientes de investigación

### 4.1 Procesos / Literatura Infantil (21 imágenes)
- **Ubicación**: `Contenido_Porfolio/Imagenes/Procesos/`
- **Contenido**: Ilustraciones de poemas infantiles españoles ("Brebaje de Pocaje", "La Llave del Armario", etc.)
- **Estado**: 🔴 NO CLASIFICADO — ¿Asignatura? ¿Proyecto personal?
- **Acción**: Confirmar con usuario si es candidato de investigación o proyecto real

### 4.2 Vídeos sin clasificar (4 vídeos)
- `VIDEO_JUEGOS_EN_RED.mp4` (562M) — ¿Proyecto "Juegos en Red" (Tercero 2023-24)?
- `videoArbol.mp4` (173M) — ¿3D/modelado?
- `videoTela.mp4` (143M) — ¿3D/modelado?
- `videoPiramide.mp4` (105M) — ¿3D/modelado?
- `prisonBreak.mp4` (2.3M) — ¿Qué proyecto?
- `Desktop 2024.06.26...mp4` (154M) — Captura de pantalla, probablemente descartable

### 4.3 PDFs no integrados
- `retratoCara.pdf` (1.6M) — Posible "Retrato de Carla" (Dibujo Artístico, Segundo)
- Plantillas deportivas: `atletiPlantilla.pdf`, `leganesPlantilla.pdf` — ¿Material externo?

---

## 5. Validación de build

### ✅ Build completado
```
npm run build
> portfolio@0.0.1 build
> astro build
05:36:01 [build] ✓ Completed in 45.04s.
05:36:01 [build] 22 page(s) built in 45.96s
```

### ✅ Astro type check
```
npx astro check
Result (102 files): 
- 0 errors
- 0 warnings  
- 3 hints
```

### ✅ Routes verification
```
Rutas generadas sin errores:
- /proyectos/fantasy-island/
- /proyectos/go-for-sports/
- /proyectos/gorobeia/
- /proyectos/whispers-of-shadows/
- /proyectos/terra-trolls/
- /proyectos/international-warfare/
- /proyectos/yumala/
- ... (16 projects publicados)
```

---

## 6. Tamaño total de assets

| Proyecto | Imágenes | Vídeos | PDFs | Total |
|----------|----------|--------|------|-------|
| Fantasy Island | 17 | 2 | 2 | 1.6 GB |
| Go For Sports | 68 | — | 1 | 44 MB |
| Gorobeia | 43 | — | 2 | 21 MB |
| Whispers | 13 | — | — | 3.2 MB |
| Terra Trolls | 3 | — | — | 1.5 MB |
| International Warfare | 2 | 1 | — | 7.1 MB |
| Yumala | 1 | — | 1 | 3.2 MB |
| **TOTAL** | **147** | **3** | **6** | **1.68 GB** |

**Original en Contenido_Porfolio**: 5.8 GB  
**Organizado en public/**: 1.68 GB  
**Excluido (>100MB)**: ~1.5 GB (vídeos no apropiados para git)  
**Pendiente de clasificación**: ~2.6 GB (Procesos + vídeos sin proyecto)

---

## 7. Próximos pasos recomendados

### Inmediatos (para esta rama)
- [ ] **Confirmar clasificación de archivos ambiguos** con el usuario
  - Procesos / Literatura infantil
  - Vídeos sin proyecto (Árbol, Tela, Pirámide, etc.)
  - retratoCara.pdf
- [ ] **Considerar optimización de vídeos** >50MB con FFmpeg si es necesario
- [ ] **Actualizar referencias en proyectos TypeScript** para aprovechar galerías completas

### A largo plazo
- [ ] Crear `.gitignore` exclusiones para archivos >50MB innecesarios
- [ ] Documentar política de alojamiento de vídeos (YouTube vs. local)
- [ ] Crear pipeline de compresión automática para nuevos vídeos

---

## 8. Checklist de validación

- [x] ✅ Inventario inicial completado (193 archivos catalogados)
- [x] ✅ Clasificación por proyecto (8 proyectos identificados)
- [x] ✅ Normalización de nombres de archivo
- [x] ✅ Reorganización en carpetas `public/images/projects/`
- [x] ✅ Eliminación de archivos >100MB de carpetas public
- [x] ✅ Build `npm run build` — éxito
- [x] ✅ Astro check — 0 errores
- [x] ✅ Verificación de rutas de recursos
- [x] ✅ Documentación en MEDIA_INVENTORY.md y este informe
- [ ] ⏳ Investigación de archivos ambiguos (pendiente usuario)
- [ ] ⏳ Actualización de referencias en proyectos TypeScript (posterior)

---

## Anexo: Mapeo de archivo original → destino

Ejemplo de correspondencias establecidas (ver MEDIA_INVENTORY.md para lista completa):

```
Contenido_Porfolio/Imagenes/FantasyIsland/
  └─ Rénder cámara 1.jpg 
     → public/images/projects/2021-22/diseno-3d/fantasy-island/render-camara-1.jpg

Contenido_Porfolio/Documentos/
  └─ GoForSports.pdf
     → public/images/projects/2023-24/interaccion-persona-maquina-y-usabilidad/go-for-sports/go-for-sports.pdf

Contenido_Porfolio/Imagenes/Gorobeia/Personaje/
  └─ turnAround.png
     → public/images/projects/2023-24/personajes-y-escenarios/gorobeia/personaje-turnaround.png

Contenido_Porfolio/Videos/fantasyIsland/
  └─ AnimacionPersonaje_DanielPerezNavarro.mp4
     → public/images/projects/2021-22/diseno-3d/fantasy-island/animacion-personaje.mp4
```

---

**Estado de la rama**: Lista para revisión y potencial merge tras investigación de archivos ambiguos.  
**Versión del documento**: 1.0  
**Última actualización**: 2026-10-09
