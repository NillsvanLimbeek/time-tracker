<script setup lang="ts">
interface Props {
  formattedTime: string;
  isRunning: boolean;
}

const { formattedTime, isRunning } = defineProps<Props>();
const emit = defineEmits(['start', 'stop', 'reset']);
</script>

<template>
  <div class="mb-3 flex items-center justify-between">
    <h2 class="font-mono text-4xl font-bold text-white">
      {{ formattedTime }}
    </h2>

    <div class="flex justify-center gap-2">
      <UButton
        :disabled="isRunning"
        :variant="isRunning ? 'subtle' : 'solid'"
        icon="i-lucide-play"
        class="flex h-10 w-10 justify-center"
        @click="emit('start')"
      />

      <UButton
        :disabled="!isRunning"
        :variant="!isRunning ? 'subtle' : 'solid'"
        icon="i-lucide-square"
        class="flex h-10 w-10 justify-center"
        @click="emit('stop')"
      />

      <UButton
        icon="i-lucide-rotate-ccw"
        class="flex w-10 justify-center"
        @click="emit('reset')"
      />
    </div>
  </div>
</template>
