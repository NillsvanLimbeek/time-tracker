<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';

const emit = defineEmits<{
  (e: 'submit', data: CreateTimeEntry): void;
}>();

const dateStore = useDateStore();
const timerStore = useTimerStore();

const state = reactive<Partial<AddEntry>>({
  project: undefined,
  workingOn: undefined,
});

function onSubmit(event: FormSubmitEvent<AddEntry>): void {
  const entry: CreateTimeEntry = {
    color: getColor(event.data.project),
    date: dateStore.currentDate.toUTCString(),
    description: event.data.workingOn,
    project: event.data.project,
    time: timerStore.seconds,
  };

  // TODO: check with zod

  emit('submit', entry);
}

function getColor(value: string | undefined): `bg-${string}-400` {
  if (!value) {
    return 'bg-gray-400';
  }

  const color = SELECT_ITEMS.value.find((item) => item.value === value)?.color;

  if (!color) {
    return 'bg-gray-400';
  }

  return color;
}
</script>

<template>
  <UForm
    :schema="AddEntrySchema"
    :state
    class="flex flex-col gap-3"
    @submit="onSubmit"
  >
    <div class="flex gap-2">
      <UFormField
        name="project"
        class="w-full"
      >
        <USelect
          v-model="state.project"
          placeholder="Select a project"
          :items="SELECT_ITEMS"
          class="w-full"
          size="xl"
        >
          <template #leading="{ modelValue }">
            <div
              class="m-2 flex h-2 w-2 items-center justify-center rounded-full"
              :class="getColor(modelValue)"
            />
          </template>

          <template #item-leading="{ item }">
            <div
              class="m-2 flex h-2 w-2 items-center justify-center rounded-full"
              :class="`${item.color}`"
            />
          </template>
        </USelect>
      </UFormField>

      <UFormField
        name="workingOn"
        class="w-full"
      >
        <UInput
          v-model="state.workingOn"
          class="w-full"
          placeholder="What are you working on?"
          size="xl"
        />
      </UFormField>

      <UButton
        type="submit"
        icon="i-lucide-circle-plus"
        class="flex h-10 w-10 justify-center px-4"
      />
    </div>
  </UForm>
</template>
