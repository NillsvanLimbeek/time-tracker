<script setup lang="ts">
interface Props {
  entries: TimeEntry[];
  selectedDate: Date;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'start' | 'edit' | 'delete', id: string): void;
}>();

const filteredEntries = computed(() => {
  return props.entries.filter(entry => isSameDay(props.selectedDate, entry.date));
});
</script>

<template>
  <UCard
    variant="soft"
    class="mt-3"
  >
    <div
      v-if="!props.entries.length"
      class="flex flex-col items-center justify-center gap-3"
    >
      <UIcon
        name="i-lucide-timer"
        class="size-10"
      />
      <h2>No time entries yet</h2>
    </div>

    <div
      v-else
      class="space-y-3"
    >
      <TrackedTimeItem
        v-for="entry in filteredEntries"
        :key="entry.id"
        :entry="entry"
        @start="(e) => emit('start', e)"
        @edit="(e) => emit('edit', e)"
        @delete="(e) => emit('delete', e)"
      />
    </div>
  </UCard>
</template>
