<template>
  <tomato-header />
  <div class="overflow-hidden bg-tertiary-500 px-8 py-16 md:px-12 md:py-20">
    <router-view />
  </div>
  <tomato-footer />
</template>

<script setup lang="ts">
import { TomatoHeader, TomatoFooter } from "./components";
</script>
