<template>
  <ProjectList project-type="games" :projects="games" />
  <ProjectList project-type="others" :projects="others" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { PROJECTS } from "..";
import ProjectList from "../components/ProjectList.vue";
const games = computed(() =>
  Object.values(PROJECTS).filter((game) => game.category === "game"),
);
const others = computed(() =>
  Object.values(PROJECTS).filter((game) => game.category === "other"),
);
</script>
