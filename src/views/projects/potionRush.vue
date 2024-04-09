<template>
  <project
    :project="PROJECTS['potionRush']"
    :features="FEATURES"
    :images="IMAGES"
    orientation="vertical"
    itch-code="2598797"
  />
</template>

<script setup lang="ts">
import Project from "../Project.vue";
import PROJECTS from "../../utils/projects";
import { Image, Feature } from "./../../types";

// Constants
const IMAGES: Image[] = [
  {
    src: "./../portfolio/potion-rush/potion-rush-1",
    alt: "A comic depicting a potion shop in the middle of a city. Two customers walk in, the first one leaves angrily, the second one waits.",
  },
  {
    src: "./../portfolio/potion-rush/potion-rush-2",
    alt: "An image of a decorated potion shop. A businessman looking customer is asking for a fire potion. In the middle, a blender it's being used. Below it, three ingredients are displayed in a bar.",
  },
  {
    src: "./../portfolio/potion-rush/potion-rush-3",
    alt: "An image of a decorated potion shop. A robot looking customer is asking for a wine potion. In the middle, a cauldron is being stirred. Below it, three ingredients are displayed in a bar.",
  },
  {
    src: "./../portfolio/potion-rush/potion-rush-4",
    alt: "An image of a decorated potion shop. A witch looking customer is asking for a fruity potion. In the middle, a cauldron is being stirred. Below it, three ingredients are displayed in a bar.",
  },
  {
    src: "./../portfolio/potion-rush/potion-rush-5",
    alt: "An image of the game UI  displaying the text in spanish 'Estas pociones no se venderan solas'. Three stars display the money goals for the level.",
  },
  {
    src: "./../portfolio/potion-rush/potion-rush-6",
    alt: "An image of a recipe book displaying a mint and strawberry potion, its required ingredients, its price, the required utensil to make it and a short description.",
  },
  {
    src: "./../portfolio/potion-rush/potion-rush-7",
    alt: "An image of a recipe book displaying a fruit filled potion, its required ingredients, its price, the required utensil to make it and a short description.",
  },
  {
    src: "./../portfolio/potion-rush/potion-rush-8",
    alt: "An image of a recipe book displaying a poisonous coffee potion, its required ingredients, its price, the required utensil to make it and a short description.",
  },
];
const FEATURES: Feature[] = [
  {
    title: "Brew",
    icon: "mdi-bottle-tonic",
    description:
      "Cook up delicious potions with a variety of magical ingredients.",
  },
  {
    title: "Profit",
    icon: "mdi-cash-multiple",
    description:
      "Make as much money as you can by getting tips from satisfied customers to try to pay rent.",
  },
  {
    title: "Mood",
    icon: "mdi-emoticon-angry",
    description:
      "Deal with the ever changing temperament of the many people of New Arkadia.",
  },
];
</script>
