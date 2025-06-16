import type { RecordService } from 'pocketbase';
import type { TimeEntry } from '../models/TimeEntry';
import PocketBase from 'pocketbase';

interface TypedPocketBase extends PocketBase {
  collection: ((name: string) => RecordService) &
    ((name: 'time_entries') => RecordService<TimeEntry>);
}

const pb = new PocketBase(
  import.meta.env.VITE_POCKETBASE_URL,
) as TypedPocketBase;

export function usePocketbase(): TypedPocketBase {
  return pb;
}
