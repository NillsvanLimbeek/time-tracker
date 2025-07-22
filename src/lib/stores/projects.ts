import z from 'zod/v4';

export const useProjectsStore = defineStore('projects', () => {
  const pb = usePocketbase();
  const projects = ref<Project[]>([]);

  async function getProjects(): Promise<void> {
    const res = await pb.collection('projects').getFullList();

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

  return {
    projects,

    getProjects,
    addProject,
  };
});
