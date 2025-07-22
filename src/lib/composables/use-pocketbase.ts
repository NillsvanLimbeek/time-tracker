import type { RecordService } from 'pocketbase';
import PocketBase from 'pocketbase';

interface TypedPocketBase extends PocketBase {
  collection: ((name: string) => RecordService) &
  ((name: 'time_entries') => RecordService<TimeEntry>) &
  ((name: 'projects') => RecordService<Project>);

}

const pb = new PocketBase(
  import.meta.env.VITE_POCKETBASE_URL,
) as TypedPocketBase;

export function usePocketbase(): TypedPocketBase {
  return pb;
}
