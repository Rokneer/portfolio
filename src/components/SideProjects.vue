<template>
  <div
    class="@7xl:gap-24 @7xl:flex-row @5xl:gap-12 @xl:gap-8 @7xl:mb-48 @5xl:mb-25 @xl:mb-20 @lg:mb-12 mb-8 flex flex-col justify-center gap-3"
  >
    <!--* FIRST PROJECTS  -->
    <div
      class="@5xl:gap-12 @xl:gap-6 grid w-full grid-cols-2 place-items-start gap-2"
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
      class="drop-shadow-violet @7xl:drop-shadow-6 @5xl:drop-shadow-4 @xl:drop-shadow-3 drop-shadow-1 @7xl:w-[250px] @7xl:block hidden"
      :src="VineGames"
      alt="A picture two long red vertical vines side by side."
    />
    <!--* HORIZONTAL DIVIDER  -->
    <img
      class="drop-shadow-violet @7xl:drop-shadow-6 @5xl:drop-shadow-4 @xl:drop-shadow-3 drop-shadow-1 @7xl:w-[250px] @7xl:hidden"
      :src="VineMid"
      alt="A picture two long red vertical vines side by side."
    />

    <!--* SECOND PROJECTS  -->
    <div
      class="@7xl:gap-12 @xl:gap-6 grid w-full grid-cols-2 place-items-start gap-2"
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
