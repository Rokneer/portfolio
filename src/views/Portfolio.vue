<template>
  <ProjectList project-type="games" :projects="games" />
  <ProjectList project-type="others" :projects="others" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { projects } from "..";
import ProjectList from "../components/ProjectList.vue";
const games = computed(() => {
  return Object.values(projects).filter((game) => game.category === "game");
});
const others = computed(() => {
  return Object.values(projects).filter((game) => game.category === "other");
});
</script>
