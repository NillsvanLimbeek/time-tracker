export const useEntriesStore = defineStore('time-entries', () => {
  const entries = ref<TimeEntry[]>([]);

  // async function getTimeEntries(): Promise<TimeEntry[]> {
  //   const res = await pb.collection<TimeEntry>('time_entries').getFullList();
  //   return res;
  // }

  function addTimeEntry(entry: TimeEntry): void {
    entries.value.push(entry);
  }

  return {
    entries,

    // getTimeEntries,
    addTimeEntry,
  };
});
