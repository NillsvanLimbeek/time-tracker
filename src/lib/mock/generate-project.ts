import type { CreateProject } from '../models/Project';
import { faker } from '@faker-js/faker';

const tailwindColors = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
];

export function generateMockProject(): CreateProject {
  return {
    name: faker.company.name(),
    color: `bg-${faker.helpers.arrayElement(tailwindColors)}-400` as const,
    time_entries: [],
  };
}

/**
 * Generates multiple mock projects
 */
export function generateMockProjects(count: number = 5): CreateProject[] {
  return Array.from({ length: count }, () => generateMockProject());
}
