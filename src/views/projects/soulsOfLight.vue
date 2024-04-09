<template>
  <project
    :project="PROJECTS['soulsOfLight']"
    :features="FEATURES"
    :images="IMAGES"
    orientation="horizontal"
    itch-code="2598860"
    youtube-code="iAwDhvxiL7o"
  />
</template>

<script setup lang="ts">
import Project from "../Project.vue";
import PROJECTS from "../../utils/projects";
import { Image, Feature } from "./../../types";

// Constants
const IMAGES: Image[] = [
  {
    src: "./../portfolio/souls-of-light/souls-of-light-1",
    alt: "An image of a dark castle room illuminated by red lamp light. A floating bright emblem sits on top of a skeleton.",
  },
  {
    src: "./../portfolio/souls-of-light/souls-of-light-2",
    alt: "An image of a dark castle room illuminated by blue lamp light. A monster made of plants stands aside the playable character.",
  },
  {
    src: "./../portfolio/souls-of-light/souls-of-light-3",
    alt: "An image of a dark castle room illuminated by blue lamp light. A text box displaying a conversation between the playable character and a ghostly old man.",
  },
  {
    src: "./../portfolio/souls-of-light/souls-of-light-4",
    alt: "An image of a dark castle room illuminated by green lamp light. The playable character is in the middle of a jump.",
  },
  {
    src: "./../portfolio/souls-of-light/souls-of-light-5",
    alt: "An image of a dark castle room illuminated by blue lamp light. A monster made of plants is frozen in a block of ice.",
  },
  {
    src: "./../portfolio/souls-of-light/souls-of-light-6",
    alt: "An image of a dark castle room illuminated by red lamp light. Darken vines burn besides a skeleton.",
  },
];
const FEATURES: Feature[] = [
  {
    title: "Solve",
    icon: "mdi-puzzle",
    description:
      "Figure out the solutions to puzzles with the multiple powers your mysterious lamp gives you.",
  },
  {
    title: "Escape",
    icon: "mdi-run",
    description:
      "Fight your way through the darkened halls of the castle and find the truth about your own past.",
  },
  {
    title: "Save",
    icon: "mdi-ghost",
    description:
      "Help the lost souls of the castle and free them from their sad state.",
  },
];
</script>
