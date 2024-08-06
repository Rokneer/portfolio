<template>
  <project
    :project="PROJECTS['unRecuerdo']"
    :youtube-code="PROJECTS['unRecuerdo'].youtubeCode"
  />
</template>

<script setup lang="ts">
import Project from "../Project.vue";
import PROJECTS from "../../utils/projects";
</script>
