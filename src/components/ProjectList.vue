<template>
  <div class="py-3 sm:py-6">
    <div
      class="animate__animated animate__fadeInUp flex justify-center bg-gradient-to-l from-tertiary-500 from-20% via-tertiary-200 to-tertiary-500 to-80% py-3 text-2xl font-black uppercase xs:text-3xl sm:text-4xl md:text-5xl"
    >
      <span v-if="projectType === 'games'">Games</span>
      <span v-if="projectType === 'others'">Others</span>
    </div>
  </div>
  <div
    v-for="project in projects"
    :key="project.title"
    class="py-3 sm:py-8 md:px-12 lg:px-40 lg:py-4"
  >
    <div class="flex flex-grow flex-row items-center">
      <div class="w-1/2 transition hover:scale-110">
        <router-link
          :to="{
            name: `${project.title}`,
          }"
        >
          <img
            class="animate__animated animate__fadeInLeft rounded-3xl border-2 border-secondary-200 bg-secondary-200 object-scale-down content-visibility-auto sm:border-4"
            :src="`/portfolio/${project.title}/${project.title}-horizontal-2048x.avif`"
            :srcset="`
              /portfolio/${project.title}/${project.title}-horizontal-2048x.avif 2048w,
              /portfolio/${project.title}/${project.title}-horizontal-1920x.avif 1920w,
              /portfolio/${project.title}/${project.title}-horizontal-1580x.avif 1580w,
              /portfolio/${project.title}/${project.title}-horizontal-1130x.avif 1130w,
              /portfolio/${project.title}/${project.title}-horizontal-256x.avif 256w
            `"
            sizes="
              (min-width: 2800px) calc(50vw - 200px),
              (min-width: 2680px) calc(36vw - 150px),
              (min-width: 1040px) calc(50vw - 200px),
              (min-width: 1000px) calc(50vw - 88px),
              calc(45.77vw - 7px)
            "
            :alt="`${project.title.replace(/-/g, ' ')} horizontal image`"
            width="2048"
            height="1152"
          />
        </router-link>
      </div>
      <div
        class="animate__animated animate__fadeInRight w-1/2 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div
          class="pb-1 font-extrabold uppercase xs:pb-3 xs:text-xl sm:pb-6 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
        >
          {{ project.title.replace(/-/g, " ") }}
        </div>
        <div
          class="text-xs xs:text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
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
