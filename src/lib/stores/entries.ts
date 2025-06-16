export const useEntriesStore = defineStore('time-entries', () => {
  const pb = usePocketbase();
  const entries = ref<TimeEntry[]>([]);

  async function getTimeEntries(): Promise<void> {
    const res = await pb.collection('time_entries').getFullList();
    entries.value = res;
  }

  function addTimeEntry(entry: TimeEntry): void {
    entries.value.push(entry);
  }

  return {
    entries,

    getTimeEntries,
    addTimeEntry,
  };
});
