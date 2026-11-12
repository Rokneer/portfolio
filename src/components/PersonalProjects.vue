<template>
  <div class="projects-container">
    <div class="category">
      <ph-heart
        weight="fill"
        color="#e42038"
        class="icon"
      />
      <div class="category-title">Personal Projects</div>
      <ph-heart
        weight="fill"
        color="#e42038"
        class="icon"
      />
    </div>
    <div class="project-grid">
      <project :project="PROJECTS.foodForTheSoul" />
      <project :project="PROJECTS.masquerade" />
      <project :project="PROJECTS.caveDwellers" />
      <project :project="PROJECTS.potionRush" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PROJECTS from "@/utils/projects.ts";
import Project from "./project/Project.vue";

import { PhHeart } from "@phosphor-icons/vue";
</script>
<style lang="css" scoped>
/* DEFAULT */
.icon:hover {
  animation: wave 0.8s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .icon:hover {
    animation: none;
  }
}
</style>
