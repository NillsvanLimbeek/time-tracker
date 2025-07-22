<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';

const emit = defineEmits<{
  (e: 'close', data: boolean): void;
  (e: 'submit', data: AddProject): void;
}>();

const state = reactive<Partial<AddProject>>({
  name: undefined,
  color: undefined,
});

function onSubmit(event: FormSubmitEvent<AddProject>): void {
  const project: AddProject = {
    name: event.data.name,
    color: event.data.color,
  };

  // TODO: check with zod

  emit('submit', project);
  emit('close', false);
}
</script>

<template>
  <Modal title="Add New Project">
    <UForm
      :schema="AddProjectSchema"
      :state
      @submit="onSubmit"
    >
      <UFormField
        name="name"
        class="mb-5"
      >
        <UInput
          v-model="state.name"
          class="w-full"
          placeholder="Project name"
          size="xl"
        />
      </UFormField>

      <UFormField
        name="color"
        class="mb-5"
      >
        <USelect
          v-model="state.color"
          placeholder="Select a color"
          :items="PROJECT_COLOR"
          class="w-full"
          size="xl"
        >
          <template #leading="{ modelValue }">
            <div
              class="m-2 flex h-2 w-2 items-center justify-center rounded-full"
              :class="modelValue || 'bg-gray-400'"
            />
          </template>

          <template #item-leading="{ item }">
            <div
              class="m-2 flex h-2 w-2 items-center justify-center rounded-full"
              :class="`${item.value}`"
            />
          </template>
        </USelect>
      </UFormField>

      <div class="w-full flex justify-end gap-3">
        <UButton
          type="button"
          variant="outline"
          @click="emit('close', false)"
        >
          Cancel
        </UButton>
        <UButton
          type="submit"
          icon="i-lucide-plus"
        >
          Add Project
        </UButton>
      </div>
    </UForm>
  </Modal>
</template>
