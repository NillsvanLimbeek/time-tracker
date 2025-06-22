import { z } from 'zod/v4';

export const useEntriesStore = defineStore('time-entries', () => {
  const pb = usePocketbase();
  const entries = ref<TimeEntry[]>([]);

  async function getTimeEntries(): Promise<void> {
    const res = await pb.collection('time_entries').getFullList();

    try {
      TimeEntryResponse.parse(res);
      entries.value = res;
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.warn(error);
      }
    }
  }

  function addTimeEntry(entry: CreateTimeEntry): void {
    console.log(entry);
  }

  return {
    entries,

    getTimeEntries,
    addTimeEntry,
  };
});
