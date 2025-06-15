<script setup lang="ts">
const props = defineProps<{
  selectedDate: Date;
}>();

const emit = defineEmits<{
  (e: 'update:selectedDate', date: Date): void;
}>();

const dates = computed(() => {
  const start = startOfWeek(props.selectedDate);
  const end = endOfWeek(props.selectedDate);

  return eachDayOfInterval({ start, end });
});
</script>

<template>
  <div class="mb-3 grid grid-cols-7 gap-3">
    <UButton
      v-for="date in dates"
      :key="String(date)"
      class="flex h-20 flex-shrink-0 flex-col items-center justify-center rounded-lg"
      :variant="isSameDay(date, selectedDate) ? 'solid' : 'subtle'"
      @click="emit('update:selectedDate', date)"
    >
      <span class="text-xs font-medium">
        {{ format(date, 'EEE') }}
      </span>
      <span class="text-xl font-bold">
        {{ format(date, 'd') }}
      </span>
    </UButton>
  </div>
</template>
