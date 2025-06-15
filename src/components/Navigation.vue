<script setup lang="ts">
const route = useRoute();

function setVariant(link: string): 'subtle' | 'solid' {
  if (route.fullPath !== link) {
    return 'subtle';
  }

  return 'solid';
}
</script>

<template>
  <div class="flex justify-center">
    <UButtonGroup size="md" class="w-full rounded-sm">
      <UButton
        v-for="link in LINKS"
        :key="link.to"
        :to="link.to"
        :variant="setVariant(link.to)"
        :icon="link.icon"
        class="flex w-full justify-center"
      >
        {{ link.label }}
      </UButton>
    </UButtonGroup>
  </div>
</template>
