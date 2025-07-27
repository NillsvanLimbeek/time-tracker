import z from 'zod/v4';

export const useProjectsStore = defineStore('projects', () => {
  const pb = usePocketbase();
  const projects = ref<Project[]>([]);

  async function getProjects(): Promise<void> {
    const res = await pb.collection('projects').getFullList({ expand: 'time_entries.id' });

    try {
      ProjectResponse.parse(res);
      projects.value = res;
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.warn(error);
      }
    }
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

    getProjects,
    addProject,
    findProject,
  };
});
