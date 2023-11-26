<template>
  <div class="flex flex-col items-center text-center text-white">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown w-60 object-scale-down p-4 xs:w-72 md:w-80 lg:max-w-sm"
      src="/masquerade/masquerade-logo.png"
      alt="Masquerade logo"
    />
    <!-- LONG DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown text-md w-10/12 py-4 sm:py-6 lg:text-2xl"
    >
      {{ projects["masquerade"].long_description }}
    </div>
    <!-- FEATURES -->
    <div
      class="animate__animated animate__fadeInDown flex w-10/12 flex-col items-center justify-center gap-y-4 py-4 sm:gap-x-4 sm:py-6 md:flex-row md:items-stretch md:gap-x-8 lg:gap-x-16"
    >
      <feature-box
        title="Solve"
        icon="mdi-magnify"
        description="Find the answer to the mystery of the floating town trapped in a time loop."
      />
      <feature-box
        title="Explore"
        icon="mdi-compass"
        description="Traverse the beautiful islands of Liberio and visit its locales."
      />
      <feature-box
        title="Help"
        icon="mdi-handshake"
        description="Aid the masked inhabitants of Liberio with their problems and help them remember who they were."
      />
    </div>
    <!-- SMALL DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown text-md flex w-10/12 flex-row items-center justify-center py-4 sm:py-8 lg:text-xl"
    >
      <img
        class="mr-4 w-10 text-white lg:w-12"
        src="/android-chrome-192x192.png"
        alt="Tomate icon"
      />
      <div class="text-left">
        {{ projects["masquerade"].role }}
      </div>
    </div>
    <!-- TRAILER -->
    <div
      class="animate__animated animate__fadeIn flex w-full justify-center py-3 sm:py-6 md:w-11/12"
    >
      <embed-video id="TJUIgSQkQws" title="Masquerade Trailer" />
    </div>
    <!-- IMAGES -->
    <div class="py-3 sm:py-6">
      <div
        class="animate__animated animate__fadeInDown mb-3 w-full bg-gradient-to-l from-tertiary-500 from-25% via-tertiary-200 to-tertiary-500 to-75% p-2 text-3xl lg:mb-6 lg:text-4xl"
      >
        Gallery
      </div>
      <image-viewer :images="images" orientation="horizontal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from "../../.";
import FeatureBox from "../../components/FeatureBox.vue";
import ImageViewer from "../../components/ImageViewer.vue";
import EmbedVideo from "../../components/EmbedVideo.vue";

const images = [
  "/portfolio/masquerade/masquerade-1.png",
  "/portfolio/masquerade/masquerade-2.png",
  "/portfolio/masquerade/masquerade-3.png",
  "/portfolio/masquerade/masquerade-4.png",
  "/portfolio/masquerade/masquerade-5.png",
  "/portfolio/masquerade/masquerade-6.png",
  "/portfolio/masquerade/masquerade-7.png",
];
</script>
