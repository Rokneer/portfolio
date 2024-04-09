<template>
  <project
    :project="PROJECTS['voltronInfographic']"
    :features="FEATURES"
    :images="IMAGES"
    orientation="horizontal"
    itch-code="2598849"
  />
</template>

<script setup lang="ts">
import Project from "../Project.vue";
import PROJECTS from "../../utils/projects";
import { Image, Feature } from "./../../types";

// Constants
const IMAGES: Image[] = [
  {
    src: "./../portfolio/voltron-infographic/voltron-infographic-1",
    alt: "An image displaying Voltron from Voltron: Legendary Defender, three of the show's main planets: Altea, Daibazal and Balmera, as well as the Lion's Castle spaceship and an edited version of the show's logo.",
  },
  {
    src: "./../portfolio/voltron-infographic/voltron-infographic-2",
    alt: "An image displaying two character descriptions from Voltron: Legendary Defender, to the left is the Black Lion and to the right is Shiro, leader of Voltron.",
  },
  {
    src: "./../portfolio/voltron-infographic/voltron-infographic-3",
    alt: "An image displaying two character descriptions from Voltron: Legendary Defender, to the left is the Yellow Lion and to the right is Hunk mechanic and cook of Voltron.",
  },
  {
    src: "./../portfolio/voltron-infographic/voltron-infographic-4",
    alt: "An image displaying two descriptions from Voltron: Legendary Defender, to the left is the planet of Altea and to the right is Allura, Altea's princess.",
  },
  {
    src: "./../portfolio/voltron-infographic/voltron-infographic-5",
    alt: "An image displaying two descriptions from Voltron: Legendary Defender, to the left is the planet of Daibazaal and to the right is Zarkon, king of the Galra people.",
  },
  {
    src: "./../portfolio/voltron-infographic/voltron-infographic-6",
    alt: "An image displaying three detailed weapon descriptions from Voltron: Legendary Defender, the weapons are separated into their pieces. To the left is Voltron's energy shield, to the upper right is Voltron's shoulder mounted laser cannon and to the lower right is Voltron's energy sword, its main weapon.",
  },
];
const FEATURES: Feature[] = [
  {
    title: "Learn",
    icon: "mdi-school",
    description:
      "Learn about the story of Voltron's characters, their motivations and abilities.",
  },
  {
    title: "Discover",
    icon: "mdi-earth",
    description:
      "Explore worlds key to the Voltron adventure and their people.",
  },
  {
    title: "Compare",
    icon: "mdi-compare",
    description:
      "Compare the power levels of the many heroes and villains of the universe",
  },
];
</script>
