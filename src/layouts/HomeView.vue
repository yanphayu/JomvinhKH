<template>
  <DefaultLayout>
    <HeroSection />
    <MissionSection />
    <HistorySection />
    <ActionSection />
    <QuoteSection />
  </DefaultLayout>
</template>

<script setup>
import HeroSection from '../components/sections/HeroSection.vue';
import MissionSection from '../components/sections/MissionSection.vue';
import HistorySection from '../components/sections/HistorySection.vue';
import ActionSection from '../components/sections/ActionSection.vue';
import QuoteSection from '../components/sections/QuoteSection.vue';
import DefaultLayout from '../views/DefaultLayout.vue';
</script>
