<template>
  <div class="projects-container">
    <div class="category">
      <ph-star
        weight="fill"
        color="#e42038"
        class="icon"
      />
      <div class="category-title">Professional Work</div>
      <ph-star
        weight="fill"
        color="#e42038"
        class="icon"
      />
    </div>
    <div class="project-grid single-grid">
      <project :project="PROJECTS.angryBill" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PROJECTS from "@/utils/projects";
import Project from "./project/Project.vue";

import { PhStar } from "@phosphor-icons/vue";
</script>

<style lang="css" scoped>
/* DEFAULT */
.icon:hover {
  animation: spin 1.5s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .icon:hover {
    animation: none;
  }
}
/* 2XL - 1536px*/
@media (min-width: 96rem) {
  .single-grid {
    margin-inline: auto;
    grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
    width: 55% !important;
  }
}
</style>
