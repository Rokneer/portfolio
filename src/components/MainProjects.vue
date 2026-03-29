<template>
  <div
    class="flex flex-row items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-20 xl:gap-30"
  >
    <div class="grid w-full gap-4 md:gap-6 xl:gap-8 2xl:grid-cols-2 2xl:gap-10">
      <main-project :project="PROJECTS.FoodForTheSoul" :images="foodImages" />
      <main-project :project="PROJECTS.Masquerade" :images="masqueradeImages" />
      <main-project :project="PROJECTS.CaveDwellers" :images="caveImages" />
      <main-project :project="PROJECTS.PotionRush" :images="potionImages" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PROJECTS from "@/utils/projects";
import MainProject from "./project/MainProject.vue";

import foodImages from "@/assets/foodForTheSoul";
import masqueradeImages from "@/assets/masquerade";
import caveImages from "@/assets/caveDwellers";
import potionImages from "@/assets/potionRush";
</script>
