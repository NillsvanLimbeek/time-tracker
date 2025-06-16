<script setup lang="ts">
const entriesStore = useEntriesStore();
</script>

<template>
  <UApp>
    <nav class="mx-auto mt-5 w-2/3">
      <UCard variant="soft" class="mb-3">
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
