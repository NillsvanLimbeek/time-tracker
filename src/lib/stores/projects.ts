import type { UseQueryReturnType } from '@tanstack/vue-query';
import { useQuery } from '@tanstack/vue-query';
import z from 'zod/v4';

export const useProjectsStore = defineStore('projects', () => {
  const pb = usePocketbase();
  const projects = ref<Project[]>([]);

  async function fetchProjects(): Promise<Project[]> {
    const res = await pb.collection('projects').getFullList({ expand: 'time_entries.id' });

    try {
      ProjectResponse.parse(res);
      projects.value = res;

      return res;
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new TypeError(error.message);
      }

      // TODO:
      throw new Error('projects error');
    }
  }

  function useFetchProjects(): UseQueryReturnType<Project[], Error> {
    return useQuery({
      queryKey: ['projects'],
      queryFn: fetchProjects,
      staleTime: 60 * 60,
    });
  }

  function addProject(project: CreateProject): void {
    console.log(project);
  }

  function findProject(id: string): Project | null {
    if (!id) {
      return null;
    }

    const project = projects.value.find(project => project.id === id);

    if (!project) {
      throw new Error(`no project with id: ${id} found`);
    }

    return project;
  }

  return {
    projects,

    useFetchProjects,
    addProject,
    findProject,
  };
});
