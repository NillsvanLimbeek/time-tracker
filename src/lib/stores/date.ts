import { parseISO } from "date-fns";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useDateStore = defineStore("date", () => {
  const currentDate = ref(new Date());

  const year = computed(() => currentDate.value.getFullYear());
  const month = computed(() => currentDate.value.getMonth());
  const day = computed(() => currentDate.value.getDate());

  function setCurrentDate(date: Date | string): void {
    currentDate.value = typeof date === "string" ? parseISO(date) : date;
  }

  function setToToday(): void {
    currentDate.value = new Date();
  }

  return {
    currentDate,

    year,
    month,
    day,

    setCurrentDate,
    setToToday,
  };
});
