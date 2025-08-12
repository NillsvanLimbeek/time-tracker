<script setup lang="ts">
const projectsStore = useProjectsStore();
const { projects } = storeToRefs(projectsStore);
</script>

<template>
  <AddEntry :projects />
</template>
