<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import AddProject from './components/modals/AddProject.vue';

const dateStore = useDateStore();
const { currentDate } = storeToRefs(dateStore);
const { setCurrentDate } = dateStore;

const entriesStore = useEntriesStore();
const { useFetchTimeEntries } = entriesStore;
const { entries } = storeToRefs(entriesStore);

const projectStore = useProjectsStore();
const { useFetchProjects, addProject } = projectStore;

const overlay = useOverlay();
const addProjectModal = overlay.create(AddProject);

useFetchProjects();
useFetchTimeEntries();
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
        <DaySelector
          :selected-date="currentDate"
          @update:selected-date="(e) => setCurrentDate(e)"
        />
        <Navigation />
      </UCard>
    </nav>

    <main class="mx-auto w-2/3">
      <RouterView />

      <TrackedTime
        :entries
        :selected-date="currentDate"
      />
    </main>

    <VueQueryDevtools />
  </UApp>
</template>
