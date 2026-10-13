// src/data/projects/entries/proyecto-valorant-datos.ts
// Oculto hasta recuperar material visual. No inventar portada, galería ni recursos.
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const proyectoValorantDatos: ProjectInput = {
  slug: 'proyecto-valorant-datos',
  year: 2024,
  academicYear: '2023-24',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Proyecto Valorant (Datos)',
  description: 'Trabajo grupal de gestión de datos sobre Valorant (agentes, habilidades, partidas y otros), con documentos XML y JSON almacenados en MongoDB y consultados con filtros desde MongoDB Compass.',
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Trabajo grupal de la asignatura Gestión de Datos en Medios Digitales, con datos del videojuego Valorant: agentes, habilidades, partidas y otros.',
        'Group assignment for the Data Management in Digital Media course, using data from the video game Valorant: agents, abilities, matches and more.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'Se estructuraron los datos en XML y JSON y se trabajó con MongoDB Compass, realizando consultas y filtros sobre ellos. Participé en distintas tareas del trabajo, repartidas entre el grupo.',
        'The data was structured in XML and JSON and managed with MongoDB Compass, running queries and filters on it. I took part in several tasks, shared among the group.'
      ),
    },
    {
      kind: 'learning',
      icon: 'insights',
      text: localizedText(
        'No me resultó difícil: trabajar con bases de datos es un área en la que me desenvuelvo con facilidad.',
        'It was not difficult for me: working with databases is an area where I feel comfortable.'
      ),
    },
  ],
  skillGains: [
    localizedText('Modelado de datos en XML y JSON', 'Data modelling in XML and JSON'),
    localizedText('Consultas y filtros en MongoDB', 'Queries and filters in MongoDB'),
  ],
  tags: ['Bases de datos', 'MongoDB', 'JSON', 'XML'],
  subjects: ['Gestión de Datos en Medios Digitales'],
  disciplines: ['bases-datos'],
  technologies: [
    { name: 'MongoDB Compass', level: 'principal' },
    { name: 'JSON', level: 'principal' },
    { name: 'XML', level: 'principal' },
  ],
  publicable: false,
  featured: false,
  team: 'Proyecto académico grupal',
};
