interface ProjectColor {
  label: string;
  value: `bg-${string}-400`;
}

export const PROJECT_COLOR = ref<ProjectColor[]>([
  {
    label: 'Blue',
    value: 'bg-blue-400',
  },
  {
    label: 'Red',
    value: 'bg-red-400',
  },
  {
    label: 'Green',
    value: 'bg-green-400',
  },
  {
    label: 'Yellow',
    value: 'bg-yellow-400',
  },
]);
