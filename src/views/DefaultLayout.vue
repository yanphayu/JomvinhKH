<template>
  <div class="flex min-height-screen flex-col">
    <TheHeader />
    <main class="grow">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheFooter from '../components/layout/TheFooter.vue';
import TheHeader from '../components/layout/TheHeader.vue';
</script>
