import type { CreateTimeEntry } from '../models/TimeEntry';
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

const taskDescriptions = [
  'Frontend development',
  'Backend API work',
  'Database optimization',
  'Code review and testing',
  'Bug fixes and debugging',
  'Meeting with stakeholders',
  'Documentation writing',
  'UI/UX improvements',
  'Performance optimization',
  'Security audit',
  'Feature implementation',
  'Research and planning',
  'Deployment and DevOps',
  'Client communication',
  'Project management',
];

export function generateMockTimeEntry(): CreateTimeEntry {
  const entryDate = faker.date.between({ from: startOfWeek(new Date()), to: endOfWeek(new Date()) });

  return {
    date: entryDate.toISOString().split('T')[0], // YYYY-MM-DD format
    description: faker.helpers.arrayElement(taskDescriptions),
    project: '',
    time: faker.number.int({ min: 0, max: 60 * 60 * 8 }),
    color: `bg-${faker.helpers.arrayElement(tailwindColors)}-400` as const,
  };
}

export function generateMockTimeEntries(count: number = 5): CreateTimeEntry[] {
  return Array.from({ length: count }, () => generateMockTimeEntry());
}
