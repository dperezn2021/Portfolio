// src/data/collections/index.ts
import type { CollectionItem, ProjectCollection } from './types';
import { BONK_COLLECTION } from './bonk';

export * from './types';

export const COLLECTIONS: ProjectCollection[] = [BONK_COLLECTION];

const isPublic = (item: CollectionItem) => item.publicable !== false;

export function getCollection(projectSlug: string): ProjectCollection | undefined {
  return COLLECTIONS.find((collection) => collection.projectSlug === projectSlug);
}

export function getPublicItems(projectSlug: string): CollectionItem[] {
  return getCollection(projectSlug)?.items.filter(isPublic) ?? [];
}

export const collectionPaths = COLLECTIONS.flatMap((collection) =>
  collection.items.filter(isPublic).map((item) => ({ collection, item })),
);
