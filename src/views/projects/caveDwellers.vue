<template>
  <project
    :project="PROJECTS['caveDwellers']"
    :features="FEATURES"
    :images="IMAGES"
    :itch-code="PROJECTS['caveDwellers'].itchCode"
    orientation="horizontal"
  />
</template>

<script setup lang="ts">
import Project from "../Project.vue";
import PROJECTS from "../../utils/projects";
import { Image, Feature } from "./../../types";

// Constants
const IMAGES: Image[] = [
  {
    src: "./../portfolio/cave-dwellers/cave-dwellers-1",
    alt: "",
  },
  {
    src: "./../portfolio/cave-dwellers/cave-dwellers-2",
    alt: "",
  },
  {
    src: "./../portfolio/cave-dwellers/cave-dwellers-3",
    alt: "",
  },
  {
    src: "./../portfolio/cave-dwellers/cave-dwellers-4",
    alt: "",
  },
];
const FEATURES: Feature[] = [
  {
    title: "Explore",
    icon: "mdi-arrow-up-thick",
    description:
      "Dodge traps and stomp enemies, dashing your way through the dangers that you encounter.",
  },
  {
    title: "Shine",
    icon: "mdi-star-four-points",
    description:
      "Keep you and your light alive to force away the encroaching darkness that surrounds you.",
  },
  {
    title: "Loot",
    icon: "mdi-treasure-chest",
    description:
      "Collect shiny coins and gems hidden away in the dephts of the cave.",
  },
];
</script>
