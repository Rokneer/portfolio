<template>
  <div
    class="@7xl:mb-32 @5xl:mb-24 @xl:mb-20 @lg:mb-12 @7xl:gap-40 @lg:gap-20 mb-8 flex flex-row items-center justify-center gap-4"
  >
    <div
      class="@7xl:gap-x-16 @7xl:gap-y-12 @7xl:grid-cols-2 @xl:gap-y-6 grid w-full gap-y-2"
    >
      <main-project :project="PROJECTS.Masquerade" :images="masqueradeImages" />
      <main-project :project="PROJECTS.FoodForTheSoul" :images="foodImages" />
      <main-project :project="PROJECTS.CaveDwellers" :images="caveImages" />
      <main-project :project="PROJECTS.VelezShowcase" :images="velezImages" />
    </div>
    <img
      class="@xl:drop-shadow-6 drop-shadow-3 drop-shadow-violet w-[30%] -scale-x-100 justify-center"
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
