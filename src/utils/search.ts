// Motor de búsqueda local del portfolio: sin dependencias, insensible a
// mayúsculas y tildes, con coincidencia por prefijo de palabra y por
// subcadena (a partir de 3 caracteres). Todos los términos deben coincidir.
import type { SearchEntry, SearchGroup } from '../data/search-index';

export type { SearchEntry, SearchGroup };

export const GROUP_ORDER: SearchGroup[] = ['projects', 'skills', 'experience', 'education'];

export const normalize = (value: string): string =>
  value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

const toWords = (value: string): string[] =>
  normalize(value)
    .split(/[^a-z0-9#+.]+/)
    .map((word) => word.replace(/^\.+|\.+$/g, ''))
    .filter(Boolean);

interface Field {
  text: string;
  words: string[];
}

export interface PreparedEntry {
  entry: SearchEntry;
  title: Field;
  kw: Field;
  desc: Field;
}

const field = (value: string): Field => ({ text: normalize(value), words: toWords(value) });

export function prepare(entries: SearchEntry[]): PreparedEntry[] {
  return entries.map((entry) => ({
    entry,
    title: field(`${entry.title.es} ${entry.title.en}`),
    kw: field(entry.kw),
    desc: field(`${entry.desc.es} ${entry.desc.en}`),
  }));
}

function scoreField(f: Field, token: string, exact: number, prefix: number, substring: number): number {
  if (f.words.includes(token)) return exact;
  if (f.words.some((word) => word.startsWith(token))) return prefix;
  if (token.length >= 3 && f.text.includes(token)) return substring;
  return 0;
}

export interface SearchResult {
  entry: SearchEntry;
  score: number;
}

export function search(prepared: PreparedEntry[], query: string): SearchResult[] {
  const tokens = toWords(query);
  if (tokens.length === 0) return [];

  const results: SearchResult[] = [];
  for (const item of prepared) {
    let total = 0;
    let matchesAll = true;
    for (const token of tokens) {
      const score = Math.max(
        scoreField(item.title, token, 12, 9, 5),
        scoreField(item.kw, token, 6, 4, 2),
        scoreField(item.desc, token, 3, 2, 1)
      );
      if (score === 0) {
        matchesAll = false;
        break;
      }
      total += score;
    }
    if (matchesAll) results.push({ entry: item.entry, score: total });
  }

  return results.sort(
    (a, b) => b.score - a.score || a.entry.title.es.localeCompare(b.entry.title.es, 'es')
  );
}

export function groupResults(results: SearchResult[]): { group: SearchGroup; items: SearchResult[] }[] {
  return GROUP_ORDER.map((group) => ({
    group,
    items: results.filter((r) => r.entry.group === group),
  })).filter((g) => g.items.length > 0);
}
