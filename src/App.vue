<script setup lang="ts">
import AddProject from './components/modals/AddProject.vue';

const entriesStore = useEntriesStore();
const { getTimeEntries } = entriesStore;

const projectStore = useProjectsStore();
const { addProject } = projectStore;

const overlay = useOverlay();
const addProjectModal = overlay.create(AddProject);

onMounted(() => getTimeEntries());
</script>

<template>
  <UApp>
    <UCard
      variant="soft"
      class="mx-auto w-2/3 mt-5"
    >
      <div class="flex justify-between items-center">
        <h1 class="font-mono text-xl font-bold">
          Time Tracker
        </h1>

        <UButton
          icon="i-lucide-plus"
          @click="addProjectModal.open({
            onSubmit: (e) => addProject(e),
          })"
        >
          Add Project
        </UButton>
      </div>
    </UCard>

    <nav class="mx-auto mt-5 w-2/3">
      <UCard
        variant="soft"
        class="mb-3"
      >
        <DaySelector :selected-date="new Date()" />
        <Navigation />
      </UCard>
    </nav>

    <main class="mx-auto w-2/3">
      <RouterView />

      <TrackedTime
        :entries="entriesStore.entries"
        @delete="(e) => console.log(e)"
      />
    </main>
  </UApp>
</template>
