<template>
  <div class="flex flex-col items-center text-center text-white">
    <img src="tomato-logo.png.png" alt="Masquerade Logo" />
    <div
      class="my-3 w-full bg-gradient-to-l from-tertiary-500 from-20% via-tertiary-300 to-tertiary-500 to-80% p-2 text-5xl lg:my-6 lg:text-6xl"
    >
      {{ project.title }}
    </div>
    <div class="text-md flex w-10/12 py-4 lg:text-2xl">
      {{ project.long_description }}
    </div>
    <div class="flex w-10/12 py-4 text-sm lg:text-xl">
      {{ project.role }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from "../types";

defineProps<{
  project: Project;
}>();
</script>
