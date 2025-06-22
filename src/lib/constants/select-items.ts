interface SelectItem {
  label: string;
  value: string;
  color: `bg-${string}-400`;
}
export const SELECT_ITEMS = ref<SelectItem[]>([
  {
    label: 'Backlog',
    value: 'backlog',
    color: 'bg-red-400',
  },
  {
    label: 'Todo',
    value: 'todo',
    color: 'bg-blue-400',
  },
  {
    label: 'In Progress',
    value: 'in_progress',
    color: 'bg-green-400',
  },
  {
    label: 'Done',
    value: 'done',
    color: 'bg-yellow-400',
  },
]);
