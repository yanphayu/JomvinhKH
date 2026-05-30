<template>
  <div class="w-full">
    <TheHeader/>
    <router-view/>
  </div>
</template>

<script setup>
import TheHeader from './components/layout/TheHeader.vue';
</script>
