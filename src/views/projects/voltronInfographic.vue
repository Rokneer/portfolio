<template>
  <div class="flex flex-col items-center text-center">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown max-w-xs object-scale-down p-4 content-visibility-auto lg:max-w-xl"
      src="/voltron-infographic/voltron-infographic-logo.png"
      alt="Voltron Infographic logo"
      width="880"
      height="326"
    />
    <!-- LONG DESCRIPTION -->
    <div class="animate__animated animate__fadeInDown w-10/12 py-6 lg:text-2xl">
      {{ PROJECTS["voltron_infographic"].long_description }}
    </div>
    <!-- SMALL DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown flex w-10/12 flex-row items-center justify-center py-4 sm:py-8 lg:text-xl"
    >
      <img
        class="mr-4 w-10 content-visibility-auto lg:w-12"
        src="/android-chrome-192x192.png"
        alt="Tomate icon"
        width="192"
        height="192"
        loading="lazy"
      />
      <div class="text-left">
        {{ PROJECTS["voltron_infographic"].role }}
      </div>
    </div>
    <!-- GAME -->
    <div
      class="animate__animated animate__fadeInDown flex items-center justify-center pb-6 pt-4 xs:text-xl sm:text-2xl lg:text-3xl"
    >
      <iframe
        frameborder="0"
        src="https://itch.io/embed/2598849?bg_color=A20058&amp;fg_color=ffffff&amp;link_color=9a00db&amp;border_color=ffffff"
        width="552"
        height="167"
      >
        <a href="https://rokneer.itch.io/voltron-infographic">
          Voltron Infographic by Rokneer
        </a>
      </iframe>
    </div>
    <div class="py-3 sm:py-6">
      <div
        class="animate__animated animate__fadeInUp mb-3 bg-gradient-to-l from-tertiary-500 from-25% via-tertiary-200 to-tertiary-500 to-75% p-2 text-3xl lg:mb-6 lg:text-4xl"
      >
        Gallery
      </div>
      <image-viewer :images="IMAGES" orientation="horizontal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PROJECTS } from "../../.";
import ImageViewer from "../../components/ImageViewer.vue";

// Constants
const IMAGES = [
  {
    src: "/portfolio/voltron-infographic/voltron-infographic-1",
    alt: "An image displaying Voltron from Voltron: Legendary Defender, three of the show's main planets: Altea, Daibazal and Balmera, as well as the Lion's Castle spaceship and an edited version of the show's logo.",
  },
  {
    src: "/portfolio/voltron-infographic/voltron-infographic-2",
    alt: "An image displaying two character descriptions from Voltron: Legendary Defender, to the left is the Black Lion and to the right is Shiro, leader of Voltron.",
  },
  {
    src: "/portfolio/voltron-infographic/voltron-infographic-3",
    alt: "An image displaying two character descriptions from Voltron: Legendary Defender, to the left is the Yellow Lion and to the right is Hunk mechanic and cook of Voltron.",
  },
  {
    src: "/portfolio/voltron-infographic/voltron-infographic-4",
    alt: "An image displaying two descriptions from Voltron: Legendary Defender, to the left is the planet of Altea and to the right is Allura, Altea's princess.",
  },
  {
    src: "/portfolio/voltron-infographic/voltron-infographic-5",
    alt: "An image displaying two descriptions from Voltron: Legendary Defender, to the left is the planet of Daibazaal and to the right is Zarkon, king of the Galra people.",
  },
  {
    src: "/portfolio/voltron-infographic/voltron-infographic-6",
    alt: "An image displaying three detailed weapon descriptions from Voltron: Legendary Defender, the weapons are separated into their pieces. To the left is Voltron's energy shield, to the upper right is Voltron's shoulder mounted laser cannon and to the lower right is Voltron's energy sword, its main weapon.",
  },
];
</script>
