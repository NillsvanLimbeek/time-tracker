import type { UseQueryReturnType } from '@tanstack/vue-query';
import { useQuery } from '@tanstack/vue-query';
import { z } from 'zod/v4';

export const useEntriesStore = defineStore('time-entries', () => {
  const pb = usePocketbase();
  const entries = ref<TimeEntry[]>([]);

  async function fetchTimeEntries(): Promise<TimeEntry[]> {
    const res = await pb.collection('time_entries').getFullList({ expand: 'project.id' });

    try {
      TimeEntryResponse.parse(res);
      entries.value = res;

      return res;
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new TypeError(error.message);
      }

      throw new Error('time entries error');
    }
  }

  function useFetchTimeEntries(): UseQueryReturnType<TimeEntry[], Error> {
    return useQuery({
      queryKey: ['time-entries'],
      queryFn: fetchTimeEntries,
      staleTime: 60 * 60,

    });
  }

  function addTimeEntry(entry: CreateTimeEntry): void {
    console.log(entry);
  }

  return {
    entries,

    useFetchTimeEntries,
    addTimeEntry,
  };
});
