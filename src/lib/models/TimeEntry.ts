export interface TimeEntry {
  date: Date;
  description: string;
  id: ReturnType<typeof crypto.randomUUID>;
  project: string;
  time: number;
  color: string;
}
