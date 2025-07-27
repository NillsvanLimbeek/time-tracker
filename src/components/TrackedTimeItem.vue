<script setup lang="ts">
interface Props {
  entry: TimeEntry;
}

const { entry } = defineProps<Props>();
const emit = defineEmits<{
  (e: 'start' | 'edit' | 'delete', id: string): void;
}>();

const projectStore = useProjectsStore();
const { findProject } = projectStore;

const project = ref(findProject(entry.project));

function handleClick(event: 'start' | 'edit' | 'delete'): void {
  emit(event, entry.id);
}
</script>

<template>
  <UCard
    variant="soft"
    class="border border-gray-700"
    :ui="{ body: 'p-4 sm:p-4' }"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div
          class="mr-5 h-4 w-4 rounded-full"
          :class="entry.color"
        />

        <div>
          <h2 class="font-bold">
            {{ entry.description }}
          </h2>

          <p
            v-if="project"
            class="text-md font-light"
          >
            {{ project.name }}
          </p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <span class="mr-5 font-mono">{{
          formatSecondsToHHMM(entry.time)
        }}</span>

        <UButton
          icon="i-lucide-play"
          variant="outline"
          @click="handleClick('start')"
        />
        <UButton
          icon="i-lucide-pencil"
          variant="outline"
          color="info"
          @click="handleClick('edit')"
        />
        <UButton
          icon="i-lucide-trash"
          variant="outline"
          color="error"
          @click="handleClick('delete')"
        />
      </div>
    </div>
  </UCard>
</template>
