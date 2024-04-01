<template>
  <ProjectList project-type="games" :projects="games" />
  <ProjectList project-type="others" :projects="others" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import Projects from "../utils/projects";
import ProjectList from "../components/ProjectList.vue";
const games = computed(() =>
  Object.values(Projects).filter((game) => game.category === "game"),
);
const others = computed(() =>
  Object.values(Projects).filter((game) => game.category === "other"),
);
</script>
