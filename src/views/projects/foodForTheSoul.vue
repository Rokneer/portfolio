<template>
  <project
    :project="PROJECTS['foodForTheSoul']"
    :features="FEATURES"
    :images="IMAGES"
    orientation="horizontal"
    itch-code="2753590"
  />
</template>

<script setup lang="ts">
import Project from "../Project.vue";
import PROJECTS from "../../utils/projects";
import { Image, Feature } from "./../../types";

// Constants
const IMAGES: Image[] = [
  {
    src: "./../portfolio/food-for-the-soul/food-for-the-soul-1",
    alt: "An image of",
  },
  {
    src: "./../portfolio/food-for-the-soul/food-for-the-soul-2",
    alt: "An image of",
  },
  {
    src: "./../portfolio/food-for-the-soul/food-for-the-soul-3",
    alt: "An image of",
  },
  {
    src: "./../portfolio/food-for-the-soul/food-for-the-soul-4",
    alt: "An image of",
  },
  {
    src: "./../portfolio/food-for-the-soul/food-for-the-soul-5",
    alt: "An image of",
  },
  {
    src: "./../portfolio/food-for-the-soul/food-for-the-soul-6",
    alt: "An image of",
  },
];
const FEATURES: Feature[] = [
  {
    title: "Photograph",
    icon: "mdi-camera-enhance",
    description:
      "Take pictures of ghostly ingredients and stun zombies with your flash.",
  },
  {
    title: "Run",
    icon: "mdi-run",
    description:
      "Move around inside a chaotic kitchen infested with undead customers.",
  },
  {
    title: "Cook",
    icon: "mdi-chef-hat",
    description:
      "Create delicious Colombian plates by a variety of traditional ingredients.",
  },
];
</script>
