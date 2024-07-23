<template>
  <project
    :project="PROJECTS['foodForTheSoul']"
    :features="FEATURES"
    :images="IMAGES"
    orientation="horizontal"
    youtube-code="PrqyUO0w4ic"
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
    alt: "A first person view of a dilapidated restaurant, the player character is holding a polaroid-like camera and pointing it at a zombie.",
  },
  {
    src: "./../portfolio/food-for-the-soul/food-for-the-soul-2",
    alt: "A first person view of a zoomed in camera viewport pointing at a plate of food in a wood beam.",
  },
  {
    src: "./../portfolio/food-for-the-soul/food-for-the-soul-3",
    alt: "An image of a dilapidated restaurant, two zombies are in frame with colorful chairs and tables thrown about.",
  },
  {
    src: "./../portfolio/food-for-the-soul/food-for-the-soul-4",
    alt: "An image of an evil looking chef looking maliciously from behind a kitchen window.",
  },
  {
    src: "./../portfolio/food-for-the-soul/food-for-the-soul-5",
    alt: "An image of a single zombie walkin through a dilapidated restaurant.",
  },
  {
    src: "./../portfolio/food-for-the-soul/food-for-the-soul-6",
    alt: "An wide shot image of dilapidated restaurant, three zombies walk forwards towards the counter while ingredients float in the wooden beams above.",
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
