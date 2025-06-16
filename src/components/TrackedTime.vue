<script setup lang="ts">
const props = defineProps<{ entries: TimeEntry[] }>();
const emit = defineEmits<{
  (e: 'start' | 'edit' | 'delete', id: string): void;
}>();
</script>

<template>
  <UCard variant="soft" class="mt-3">
    <div
      v-if="!props.entries.length"
      class="flex flex-col items-center justify-center gap-3"
    >
      <UIcon name="i-lucide-timer" size="50" />
      <h2>No time entries yet</h2>
    </div>

    <div v-else class="space-y-3">
      <TrackedTimeItem
        v-for="entry in entries"
        :key="entry.id"
        :entry="entry"
        @start="(e) => emit('start', e)"
        @edit="(e) => emit('edit', e)"
        @delete="(e) => emit('delete', e)"
      />
    </div>
  </UCard>
</template>
