<template>
  <project-list project-type="games" :projects="games" />
  <project-list project-type="others" :projects="others" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import PROJECTS from "../utils/projects";
import ProjectList from "../components/ProjectList.vue";

// Computed
const games = computed(() =>
  Object.values(PROJECTS).filter((game) => game.category === "game"),
);
const others = computed(() =>
  Object.values(PROJECTS).filter((game) => game.category === "other"),
);
</script>
