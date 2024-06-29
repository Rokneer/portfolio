<template>
  <div
    class="animate__animated animate__fadeInLeft flex flex-row items-center py-3 sm:py-6 lg:px-12"
  >
    <router-link class="transition hover:scale-105" :to="{ name: 'about' }">
      <img
        class="w-40 min-w-32 rounded-full bg-secondary-200 p-1 sm:w-64 md:w-72 lg:w-80"
        src="/common/headshot.png"
        alt="A portrait drawing of the portfolio owner"
        width="624"
        height="624"
        fetchpriority="high"
      />
    </router-link>
    <div>
      <div
        class="animate__animated animate__fadeInLeft animate__faster py-1 pl-4 text-xl font-semibold xs:text-2xl sm:py-3 sm:pl-8 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
      >
        Hi there, my name is Alejandro.
      </div>
      <div
        class="animate__animated animate__fadeInLeft py-1 pl-4 text-sm sm:py-3 sm:pl-8 sm:text-2xl md:text-4xl lg:text-5xl xl:text-[3.3rem]"
      >
        I design and develop games and other neat stuff!
      </div>
    </div>
  </div>
  <project-list project-type="game" :projects="games" />
  <project-list project-type="other" :projects="others" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ProjectList } from "./../components";
import PROJECTS from "../utils/projects";

// Computed
const games = computed(() =>
  Object.values(PROJECTS).filter((game) => game.category === "game"),
);
const others = computed(() =>
  Object.values(PROJECTS).filter((game) => game.category === "other"),
);
</script>
