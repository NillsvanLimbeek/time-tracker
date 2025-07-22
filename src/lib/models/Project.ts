import { z } from 'zod/v4';

export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.templateLiteral(['bg-', z.string(), '-400']),
  created: z.string(),
  updated: z.string(),
});

export const ProjectResponse = z.array(ProjectSchema);
export type Project = z.infer<typeof ProjectSchema>;
export type CreateProject = Omit<Project, 'id' | 'created' | 'updated'>;
