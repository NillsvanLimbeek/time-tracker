import { z } from 'zod/v4';

export const AddProjectSchema = z.object({
  name: z.string({ message: 'Please enter a name' }),
  color: z.templateLiteral(['bg-', z.string(), '-400'], { message: 'Please select a color' }),
});

export type AddProject = z.output<typeof AddProjectSchema>;
