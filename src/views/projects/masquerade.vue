<template>
  <div class="flex flex-col items-center text-center">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown w-60 object-scale-down p-4 content-visibility-auto xs:w-72 md:w-80 lg:max-w-sm"
      src="/masquerade/masquerade-logo-576x.avif"
      srcset="
        /masquerade/masquerade-logo-576x.avif 576w,
        /masquerade/masquerade-logo-288x.avif 288w
      "
      sizes="(min-width: 780px) 288px, (min-width: 480px) 256px, 208px"
      alt="Masquerade logo"
      width="576"
      height="563"
    />
    <!-- LONG DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown w-10/12 py-4 sm:py-6 lg:text-2xl"
    >
      {{ projects["masquerade"].long_description }}
    </div>
    <!-- FEATURES -->
    <div
      class="animate__animated animate__fadeInDown flex w-10/12 flex-col items-center justify-center gap-y-4 py-4 content-visibility-auto sm:gap-x-4 sm:py-6 md:flex-row md:items-stretch md:gap-x-8 lg:gap-x-16"
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
      class="animate__animated animate__fadeInDown flex w-10/12 flex-row items-center justify-center pb-4 pt-6 lg:text-xl"
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
        {{ projects["masquerade"].role }}
      </div>
    </div>
    <!-- GAME -->
    <div
      class="animate__animated animate__fadeInDown flex flex-col items-center justify-center gap-4 pb-6 pt-4 xs:text-xl sm:text-2xl md:flex-row md:gap-x-8 lg:text-3xl"
    >
      <a
        href="https://drive.google.com/file/d/1hsa1XxITBS-2SOhCsxEXsK6_i_S_exIN"
        target="_blank"
        rel="noreferrer"
      >
        <Button class="rounded-2xl px-6 py-1 lg:px-10 xl:px-16" block>
          Download the game here!
        </Button>
      </a>
      <a
        href="https://issuu.com/alejandrohincapie4/docs/masquerade_art_book"
        target="_blank"
        rel="noreferrer"
      >
        <Button class="rounded-2xl px-6 py-1 lg:px-10 xl:px-16" block>
          Check out the art book here!
        </Button>
      </a>
    </div>
    <!-- TRAILER -->
    <div class="flex w-full justify-center py-3 sm:py-6">
      <embed-video id="TJUIgSQkQws" title="Masquerade Trailer" />
    </div>
    <!-- IMAGES -->
    <div class="py-3 sm:py-6">
      <div
        class="animate__animated animate__fadeInDown mb-4 bg-gradient-to-l from-tertiary-500 from-25% via-tertiary-200 to-tertiary-500 to-75% p-2 text-3xl lg:mb-6 lg:text-4xl"
      >
        Gallery
      </div>
      <image-viewer :images="images" orientation="horizontal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from "../../.";
import Button from "../../components/Button.vue";
import FeatureBox from "../../components/FeatureBox.vue";
import ImageViewer from "../../components/ImageViewer.vue";
import EmbedVideo from "../../components/EmbedVideo.vue";

const images = [
  {
    src: "/portfolio/masquerade/masquerade-1",
    alt: "An image of a colorful house with trees at its sides at night. A figure wearing a squirrel mask stands at the right of the house.",
  },
  {
    src: "/portfolio/masquerade/masquerade-2",
    alt: "An image of a disheveled church at night, its golden bell ringing. Mountains can be seen in the background breaking the cloud top.",
  },
  {
    src: "/portfolio/masquerade/masquerade-3",
    alt: "An image of a figure wearing an axolotl mask sitting on a beach. A text box at the bottom reads in spanish: 'Tal vez debería darme un chapuzón más tarde, creo que me estoy empezando a cocinar bajo el sol.'",
  },
  {
    src: "/portfolio/masquerade/masquerade-4",
    alt: "An image of a marketplace during the day, a monument with a floating star stands on the center, three small carts around it. In the background a massive mountain frames the image.",
  },
  {
    src: "/portfolio/masquerade/masquerade-5",
    alt: "An image of a florally decorated cart with a figure wearing a humming-bird mask tending to it.",
  },
  {
    src: "/portfolio/masquerade/masquerade-6",
    alt: "An image of two small huts with an assortment of magical looking objects. A purple crystal floats on top of them.",
  },
  {
    src: "/portfolio/masquerade/masquerade-7",
    alt: "An image of farm, five pigs roam around freely sniffing at the ground. A figure with a pig mask stands far in the background.",
  },
];
</script>
