<script setup lang="ts">
const entriesStore = useEntriesStore();

const timerStore = useTimerStore();
const { stopTimer, startTimer, resetTimer } = timerStore;
const { formattedTime, isRunning } = storeToRefs(timerStore);

const projectStore = useProjectsStore();
const { projects } = storeToRefs(projectStore);
</script>

<template>
  <UCard variant="soft">
    <Timer
      :formatted-time="formattedTime"
      :is-running="isRunning"
      @start="startTimer"
      @stop="stopTimer"
      @reset="resetTimer"
    />

    <AddEntry
      :projects
      @submit="(e) => entriesStore.addTimeEntry(e)"
    />
  </UCard>
</template>
