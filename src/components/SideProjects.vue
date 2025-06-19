<template>
  <div
    class="xs:mb-10 3xl:mb-42 4xl:mb-50 3xl:gap-14 mb-8 flex flex-col justify-center gap-4 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-24 xl:gap-8 2xl:mb-30 2xl:flex-row 2xl:gap-12"
  >
    <!--* FIRST PROJECTS  -->
    <div
      class="xs:gap-4 3xl:gap-8 grid w-full grid-cols-2 place-items-start gap-3 md:gap-6 xl:gap-8 2xl:gap-10"
    >
      <side-project :project="PROJECTS.SoulsOfLight" :images="soulsImages" />
      <side-project :project="PROJECTS.PotionRush" :images="potionImages" />
      <side-project :project="PROJECTS.UnRecuerdo" :images="recuerdoImages" />
      <side-project
        :project="PROJECTS.VoltronInfographic"
        :images="voltronImages"
      />
    </div>

    <!--* VERTICAL DIVIDER  -->
    <img
      class="drop-shadow-2 sm:drop-shadow-3 lg:drop-shadow-4 xl:drop-shadow-6 2xl:drop-shadow-8 3xl:drop-shadow-10 drop-shadow-violet hidden 2xl:block 2xl:w-[200px]"
      :src="VineGames"
      alt="A picture two long red vertical vines side by side."
    />
    <!--* HORIZONTAL DIVIDER  -->
    <img
      class="drop-shadow-2 sm:drop-shadow-3 lg:drop-shadow-4 xl:drop-shadow-6 2xl:drop-shadow-8 3xl:drop-shadow-10 drop-shadow-violet 2xl:hidden 2xl:w-[250px]"
      :src="VineMid"
      alt="A picture two long red vertical vines side by side."
    />

    <!--* SECOND PROJECTS  -->
    <div
      class="xs:gap-4 3xl:gap-8 grid w-full grid-cols-2 place-items-start gap-3 md:gap-6 xl:gap-8 2xl:gap-10"
    >
      <side-project :project="PROJECTS.Adalet" :images="adaletImages" />
      <side-project :project="PROJECTS.MedievalNinja" :images="ninjaImages" />
      <side-project
        :project="PROJECTS.RainbowConstellation"
        :images="constellationImages"
      />
      <side-project
        :project="PROJECTS.LittleDungeon"
        :images="lilDungeonImages"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PROJECTS from "@/utils/projects";
import SideProject from "./project/SideProject.vue";

import VineGames from "/common/tomate/vines/VineGames.svg";
import VineMid from "/common/tomate/vines/VineMid.svg";

import soulsImages from "@/assets/soulsOfLight";
import potionImages from "@/assets/potionRush";
import recuerdoImages from "@/assets/unRecuerdo";
import voltronImages from "@/assets/voltronInfographic";
import adaletImages from "@/assets/adaletCode";
import ninjaImages from "@/assets/medievalNinja";
import constellationImages from "@/assets/rainbowConstellation";
import lilDungeonImages from "@/assets/littleDungeon";
</script>
