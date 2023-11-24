<template>
  <div class="py-3 sm:py-6">
    <div
      class="animate__animated animate__fadeInUp flex w-full justify-center bg-gradient-to-l from-tertiary-500 from-20% via-tertiary-200 to-tertiary-500 to-80% py-3 text-2xl font-extrabold uppercase backdrop-blur xs:text-3xl sm:text-4xl md:text-5xl"
    >
      <span v-if="projectType === 'games'">Games</span>
      <span v-if="projectType === 'others'">Others</span>
    </div>
  </div>
  <div
    v-for="project in projects"
    :key="project.title"
    class="w-full py-3 sm:py-8 md:px-12 lg:px-40 lg:py-4"
  >
    <div class="flex flex-grow flex-row items-center">
      <div class="w-1/2 transition duration-150 hover:scale-110">
        <router-link
          :to="{
            name: `${project.title}`,
          }"
        >
          <img
            class="animate__animated animate__fadeInLeft rounded-3xl border-3 border-secondary-200 object-scale-down text-center text-white sm:border-4"
            :src="`/portfolio/${project.title}/${project.title}-horizontal.png`"
            :alt="`${project.title.replace(/-/g, ' ')} horizontal image`"
          />
        </router-link>
      </div>
      <div
        class="animate__animated animate__fadeInRight w-1/2 px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div
          class="pb-3 text-lg font-extrabold uppercase xs:text-xl sm:pb-6 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
        >
          {{ project.title.replace(/-/g, " ") }}
        </div>
        <div
          class="sm:text-md text-xs xs:text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
        >
          {{ project.short_description }}
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
