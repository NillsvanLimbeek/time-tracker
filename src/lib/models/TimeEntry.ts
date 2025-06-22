import { z } from 'zod/v4';

export const TimeEntrySchema = z.object({
  date: z.string(),
  description: z.string(),
  id: z.string(),
  project: z.string(),
  time: z.number().positive(),
  color: z.templateLiteral(['bg-', z.string(), '-400']),
  created: z.string(),
  updated: z.string(),
});

export const TimeEntryResponse = z.array(TimeEntrySchema);
export type TimeEntry = z.infer<typeof TimeEntrySchema>;
export type CreateTimeEntry = Omit<TimeEntry, 'id' | 'created' | 'updated'>;
