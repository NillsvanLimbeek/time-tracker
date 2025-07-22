<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
const emit = defineEmits<{ close: [boolean] }>();
</script>

<template>
  <UModal
    :close="{ onClick: () => emit('close', false) }"
    :title
  >
    <template #body>
      <slot />
    </template>
  </UModal>
</template>
