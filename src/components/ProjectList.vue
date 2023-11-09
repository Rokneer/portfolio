<template>
  <div class="py-6">
    <div
      class="animate__animated animate__fadeInUp flex w-full justify-center bg-gradient-to-l from-tertiary-500 from-20% via-tertiary-300 to-tertiary-500 to-80% py-3 text-4xl font-extrabold uppercase text-white md:text-5xl"
    >
      <span v-if="projectType === 'games'">Games</span>
      <span v-if="projectType === 'others'">Others</span>
    </div>
  </div>
  <div
    class="w-full px-8 py-2 md:px-12 lg:px-40 lg:py-4"
    v-for="project in projects"
    :key="project.title"
  >
    <div class="flex flex-grow flex-row items-center">
      <div class="w-1/2 transition duration-150 hover:scale-110">
        <router-link :to="{ name: project.title }">
          <img
            class="animate__animated animate__fadeInLeft h-auto max-h-[26rem] rounded-3xl border-4 border-secondary-300 object-scale-down text-center align-middle text-white"
            :src="project.imageHorizontal"
            :alt="project.title"
          />
        </router-link>
      </div>
      <div
        class="animate__animated animate__fadeInRight w-1/2 px-12 text-white"
      >
        <div
          class="pb-6 text-2xl font-bold uppercase md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
        >
          {{ project.title }}
        </div>
        <div class="text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          {{ project.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from "../types";

defineProps<{
  projectType: "games" | "others";
  projects: Project[];
}>();
</script>
