<template>
  <div>
    <div
      class="animate__animated animate__fadeInUp my-3 flex justify-center bg-gradient-to-l from-tertiary-500 from-10% via-tertiary-200 to-tertiary-500 to-90% py-3 text-3xl font-black uppercase sm:my-6 sm:text-4xl md:text-5xl"
    >
      {{ typeTitle }}
    </div>
    <div class="grid lg:grid-cols-2">
      <project-card
        v-for="project in projects"
        :key="project.title"
        :project="project"
        class="px-4 py-3 sm:p-6"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Project } from "../types";
import { ProjectCard } from "./../components";

// Types
type ProjectType = "game" | "other";

// Properties
const props = defineProps<{
  projectType: ProjectType;
  projects: Project[];
}>();

// Computed
const typeTitle = computed(() => {
  switch (props.projectType) {
    case "game":
      return "Games";
    case "other":
    default:
      return "Others";
  }
});
</script>
