<template>
  <div
    class="xs:gap-8 xs:mb-10 3xl:mb-42 4xl:mb-50 mb-8 flex flex-row items-center justify-center gap-6 sm:mb-14 sm:gap-12 md:mb-16 md:gap-14 lg:mb-20 lg:gap-20 xl:mb-24 xl:gap-30 2xl:mb-30 2xl:gap-40"
  >
    <div
      class="xs:gap-4 grid w-full gap-3 md:gap-6 xl:gap-8 2xl:grid-cols-2 2xl:gap-10"
    >
      <main-project :project="PROJECTS.Masquerade" :images="masqueradeImages" />
      <main-project :project="PROJECTS.FoodForTheSoul" :images="foodImages" />
      <main-project :project="PROJECTS.CaveDwellers" :images="caveImages" />
      <main-project :project="PROJECTS.VelezShowcase" :images="velezImages" />
    </div>
    <img
      class="drop-shadow-2 sm:drop-shadow-3 lg:drop-shadow-4 xl:drop-shadow-6 2xl:drop-shadow-8 3xl:drop-shadow-10 drop-shadow-violet w-[30%] -scale-x-100 justify-center 2xl:w-[10%]"
      :src="VineContact"
      alt="A picture small red vertical vine."
    />
  </div>
</template>

<script setup lang="ts">
import PROJECTS from "@/utils/projects";
import MainProject from "./project/MainProject.vue";

import VineContact from "/common/tomate/vines/VineContact.svg";

import masqueradeImages from "@/assets/masquerade";
import foodImages from "@/assets/foodForTheSoul";
import caveImages from "@/assets/caveDwellers";
import velezImages from "@/assets/velezShowcase";
</script>
