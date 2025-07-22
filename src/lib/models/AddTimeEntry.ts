import { z } from 'zod/v4';

export const AddEntrySchema = z.object({
  project: z.string({ message: 'Select a project' }),
  workingOn: z.string({ message: 'Add a description' }),
});

export type AddEntry = z.output<typeof AddEntrySchema>;
