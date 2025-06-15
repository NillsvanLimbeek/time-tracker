<template>
  <UApp>
    <nav class="mx-auto mt-5 w-2/3">
      <DaySelector :selected-date="new Date()" />
      <Navigation />
    </nav>

    <main class="mx-auto w-2/3">
      <RouterView />
    </main>
  </UApp>
</template>
