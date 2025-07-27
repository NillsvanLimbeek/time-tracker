import type { Project } from '../models/Project';
import type { TimeEntry } from '../models/TimeEntry';

const projects = generateMockProjects(5);
const timeEntries = generateMockTimeEntries(25);

const pb = usePocketbase();

async function seedProjects(): Promise<void> {
  projects.forEach(async (project, index) => {
    console.log(`creating project ${index + 1} of 5`);
    await pb.collection('projects').create(project);
  });
}

async function seedTimeEntries(): Promise<void> {
  timeEntries.forEach(async (entry, index) => {
    console.log(`creating time entry ${index + 1} of 25`);
    await pb.collection('time_entries').create(entry);
  });
}

seedProjects();
seedTimeEntries();

function distributeTimeEntries(
  projects: Project[],
  timeEntries: TimeEntry[],
  minEntries: number = 1,
  maxEntries: number = 5,
): { projects: Project[]; timeEntries: TimeEntry[] } {
  // Create copies to avoid mutating the original arrays
  const updatedTimeEntries = timeEntries.map(entry => ({ ...entry }));
  const availableEntries = [...updatedTimeEntries];

  // Shuffle the time entries for random distribution
  for (let i = availableEntries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [availableEntries[i], availableEntries[j]] = [availableEntries[j], availableEntries[i]];
  }

  const updatedProjects = projects.map((project) => {
    // Generate random number of entries for this project
    const numEntries = Math.floor(Math.random() * (maxEntries - minEntries + 1)) + minEntries;

    // Take random entries from available pool
    const assignedEntries = availableEntries.splice(0, Math.min(numEntries, availableEntries.length));

    // Update each assigned entry with the project ID
    assignedEntries.forEach((entry) => {
      entry.project = project.id;
    });

    return {
      ...project,
      time_entries: [...(project.time_entries || []), ...assignedEntries.map(entry => entry.id)],
    };
  });

  return {
    projects: updatedProjects,
    timeEntries: updatedTimeEntries,
  };
}

async function updateTimeEntries(entries: TimeEntry[]): Promise<void> {
  entries.forEach((entry) => {
    pb.collection('time_entries').update(entry.id, entry);
  });
}

async function updateProjects(projects: Project[]): Promise<void> {
  projects.forEach((project) => {
    pb.collection('projects').update(project.id, project);
  });
}

setTimeout(async () => {
  const projects = await pb.collection('projects').getFullList();
  const timeEntries = await pb.collection('time_entries').getFullList();

  const shuffled = distributeTimeEntries(projects, timeEntries);

  updateProjects(shuffled.projects);
  updateTimeEntries(shuffled.timeEntries);
}, 500);
