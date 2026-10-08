# pendientes-investigacion/

**Esto NO es parte de la estructura pública de proyectos.** Es una zona provisional para guardar material (escaneos, fotos, capturas, apuntes...) de asignaturas que son **candidatos de investigación**: podrían convertirse en un proyecto del portfolio en el futuro, pero todavía no tienen ni nombre de proyecto confirmado ni descripción real.

No confundir con `public/images/projects/`, que es solo para proyectos ya seleccionados (ocultos o publicados).

## Estructura

```
pendientes-investigacion/{curso}/{asignatura}/
```

## Candidatos registrados actualmente

Ver `src/data/academic-catalog.ts` (campo `researchFolder`) y `docs/ACADEMIC_PROJECTS.md` para la lista completa y el motivo de cada uno:

- `2021-22/modelado-geometrico/` — operaciones con matrices, transformaciones y rotaciones de objetos 3D.
- `2021-22/narracion-guion-storyboard/` — colección de análisis de videojuegos (asignatura Narración, Guion y Storyboard).
- `2022-23/estadistica/` — posibles prácticas con R.
- `2022-23/informatica-grafica/` — prácticas de programación gráfica, gráficos 3D y APIs.

## Cuándo promocionar un candidato a proyecto real

Cuando tengas claro qué es exactamente el trabajo (nombre, qué hiciste, con qué herramienta) y tengas al menos algo de material:

1. Crea `src/data/projects/entries/<slug>.ts` con `publicable: false`.
2. Mueve el material de aquí a `public/images/projects/{curso}/{asignatura-principal}/<slug>/`.
3. Actualiza la fila correspondiente en `src/data/academic-catalog.ts` (cambia `status` a `incompleto`, añade el `slug` a `projectSlugs`, quita `researchFolder`).
4. Borra la carpeta vacía de aquí (o déjala si crees que habrá más candidatos de esa asignatura).
