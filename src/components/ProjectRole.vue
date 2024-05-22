<template>
  <div
    class="animate__animated flex flex-row items-center py-1 font-semibold leading-snug"
  >
    <img
      class="mr-3 w-7 md:mr-4 md:w-11"
      src="/android-chrome-192x192.png"
      alt="Tomate icon"
      width="192"
      height="192"
    />
    <div class="text-left">{{ project.role }}</div>
  </div>
</template>
<script lang="ts" setup>
import { Project } from "../types";

defineProps<{ project: Project }>();
</script>
