<template>
  <tomato-header />
  <div
    class="overflow-hidden bg-tertiary-500 px-4 py-8 xs:px-6 xs:py-12 sm:px-8 sm:py-16 md:px-12 md:py-20"
  >
    <router-view />
  </div>
  <tomato-footer />
</template>

<script setup lang="ts">
import { TomatoHeader, TomatoFooter } from "./components";
</script>
