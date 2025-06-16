<script setup lang="ts">
const entriesStore = useEntriesStore();

const timerStore = useTimerStore();
const { stopTimer, startTimer, resetTimer } = timerStore;
</script>

<template>
  <UCard variant="soft">
    <Timer
      :formatted-time="timerStore.formattedTime"
      :is-running="timerStore.isRunning"
      @start="startTimer"
      @stop="stopTimer"
      @reset="resetTimer"
    />
    <AddEntry @submit="(e) => entriesStore.addTimeEntry(e)" />
  </UCard>
</template>
