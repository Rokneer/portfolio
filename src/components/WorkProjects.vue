<template>
  <div class="projects-container">
    <div class="category">
      <ph-star weight="fill" color="#e42038" class="icon hover:animate-spin" />
      <div class="category-title">Professional Work</div>
      <ph-star weight="fill" color="#e42038" class="icon hover:animate-spin" />
    </div>
    <div class="center-single">
      <project :project="PROJECTS.angryBill" />
    </div>
  </div>
</template>

<style lang="css" scoped>
/* DEFAULT */
.icon:hover {
}

/* 2XL - 1536px*/
@media (min-width: 96rem) {
  .center-single {
    width: 60%;
    margin-inline: auto;
  }
}
</style>

<script setup lang="ts">
import PROJECTS from "@/utils/projects";
import Project from "./project/Project.vue";

import { PhStar } from "@phosphor-icons/vue";
</script>
