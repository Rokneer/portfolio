<template>
  <tomato-header />
  <div class="overflow-hidden bg-tertiary-500 p-4 xs:p-6 sm:p-8">
    <router-view />
  </div>
  <tomato-footer />
</template>

<script setup lang="ts">
import TomatoHeader from "./components/TomatoHeader.vue";
import TomatoFooter from "./components/TomatoFooter.vue";
</script>
