import type { APIRoute } from 'astro';
import { searchIndex } from '../data/search-index';

export const GET: APIRoute = () =>
  new Response(JSON.stringify(searchIndex), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
