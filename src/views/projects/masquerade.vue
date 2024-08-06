<template>
  <project
    :project="PROJECTS['masquerade']"
    :features="FEATURES"
    :images="IMAGES"
    :itch-code="PROJECTS['masquerade'].itchCode"
    :youtube-code="PROJECTS['masquerade'].youtubeCode"
    orientation="horizontal"
  >
    <template #extras>
      <a
        href="https://issuu.com/alejandrohincapie4/docs/masquerade_art_book"
        target="_blank"
        rel="noreferrer"
      >
        <basic-button class="rounded-2xl px-6 py-1 lg:px-10 xl:px-16" block>
          Check out the art book here!
        </basic-button>
      </a>
    </template>
  </project>
</template>

<script setup lang="ts">
import Project from "../Project.vue";
import PROJECTS from "../../utils/projects";
import BasicButton from "../../components/BasicButton.vue";
import { Image, Feature } from "./../../types";

// Constants
const IMAGES: Image[] = [
  {
    src: "./../portfolio/masquerade/masquerade-1",
    alt: "An image of a colorful house with trees at its sides at night. A figure wearing a squirrel mask stands at the right of the house.",
  },
  {
    src: "./../portfolio/masquerade/masquerade-2",
    alt: "An image of a disheveled church at night, its golden bell ringing. Mountains can be seen in the background breaking the cloud top.",
  },
  {
    src: "./../portfolio/masquerade/masquerade-3",
    alt: "An image of a figure wearing an axolotl mask sitting on a beach. A text box at the bottom reads in spanish: 'Tal vez debería darme un chapuzón más tarde, creo que me estoy empezando a cocinar bajo el sol.'",
  },
  {
    src: "./../portfolio/masquerade/masquerade-4",
    alt: "An image of a marketplace during the day, a monument with a floating star stands on the center, three small carts around it. In the background a massive mountain frames the image.",
  },
  {
    src: "./../portfolio/masquerade/masquerade-5",
    alt: "An image of a florally decorated cart with a figure wearing a humming-bird mask tending to it.",
  },
  {
    src: "./../portfolio/masquerade/masquerade-6",
    alt: "An image of two small huts with an assortment of magical looking objects. A purple crystal floats on top of them.",
  },
];
const FEATURES: Feature[] = [
  {
    title: "Solve",
    icon: "mdi-magnify",
    description:
      "Find the answer to the mystery of the floating town trapped in a time loop.",
  },
  {
    title: "Explore",
    icon: "mdi-compass",
    description:
      "Traverse the beautiful islands of Liberio and visit its locales.",
  },
  {
    title: "Help",
    icon: "mdi-handshake",
    description:
      "Aid the masked inhabitants of Liberio with their problems to help them remember who they were.",
  },
];
</script>
