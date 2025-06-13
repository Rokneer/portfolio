<template>
  <div class="mb-48 flex flex-row justify-center gap-24">
    <div class="grid w-full grid-cols-2 place-items-start gap-12">
      <side-project :project="PROJECTS.SoulsOfLight" :images="soulsImages" />
      <side-project :project="PROJECTS.PotionRush" :images="potionImages" />
      <side-project :project="PROJECTS.UnRecuerdo" :images="recuerdoImages" />
      <side-project
        :project="PROJECTS.VoltronInfographic"
        :images="voltronImages"
      />
    </div>

    <img
      class="drop-shadow-violet drop-shadow-4 w-[250px]"
      :src="VineGames"
      alt="A picture two long red vertical vines side by side."
    />

    <div class="grid w-full grid-cols-2 place-items-end gap-12">
      <side-project :project="PROJECTS.Adalet" :images="adaletImages" />
      <side-project :project="PROJECTS.MedievalNinja" :images="ninjaImages" />
      <side-project
        :project="PROJECTS.FloatingIslands"
        :images="islandsImages"
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

import soulsImages from "@/assets/soulsOfLight";
import potionImages from "@/assets/potionRush";
import recuerdoImages from "@/assets/unRecuerdo";
import voltronImages from "@/assets/voltronInfographic";
import adaletImages from "@/assets/adaletCode";
import ninjaImages from "@/assets/medievalNinja";
import islandsImages from "@/assets/floatingIslands";
import lilDungeonImages from "@/assets/littleDungeon";
</script>
