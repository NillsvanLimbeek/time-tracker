import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useTimerStore = defineStore('timer', () => {
  const seconds = ref<number>(0);
  const isRunning = ref<boolean>(false);
  let intervalId: number | null = null;

  const formattedTime = computed<string>(() => {
    const hours = Math.floor(seconds.value / 3600);
    const minutes = Math.floor((seconds.value % 3600) / 60);
    const secs = seconds.value % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  });

  function startTimer(): void {
    if (!isRunning.value) {
      isRunning.value = true;
      intervalId = window.setInterval(() => {
        seconds.value++;
      }, 1000);
    }
  }

  function stopTimer(): void {
    if (isRunning.value && intervalId !== null) {
      isRunning.value = false;
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function resetTimer(): void {
    stopTimer();
    seconds.value = 0;
  }

  function cleanup(): void {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  return {
    seconds,
    isRunning,

    formattedTime,

    startTimer,
    stopTimer,
    resetTimer,
    cleanup,
  };
});
