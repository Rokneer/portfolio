<template>
  <div class="mb-32 flex flex-row justify-center gap-40">
    <div class="grid grid-cols-2 gap-x-16 gap-y-12">
      <main-project :project="PROJECTS.Masquerade" :images="masqueradeImages" />
      <main-project :project="PROJECTS.FoodForTheSoul" :images="foodImages" />
      <main-project :project="PROJECTS.CaveDwellers" :images="caveImages" />
      <main-project :project="PROJECTS.VelezShowcase" :images="velezImages" />
    </div>
    <img
      class="drop-shadow-6 drop-shadow-violet h-[1048px] -scale-x-100"
      :src="VineTop"
      alt="A picture small red vertical vine."
    />
  </div>
</template>

<script setup lang="ts">
import PROJECTS from "@/utils/projects";
import MainProject from "./project/MainProject.vue";

import VineTop from "/common/tomate/vines/VineTop.svg";

import masqueradeImages from "@/assets/masquerade";
import foodImages from "@/assets/foodForTheSoul";
import caveImages from "@/assets/caveDwellers";
import velezImages from "@/assets/velezShowcase";
</script>
