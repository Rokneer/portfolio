<template>
  <div class="flex flex-col items-center text-center">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown w-60 object-scale-down p-4 content-visibility-auto xs:w-72 md:w-80 lg:max-w-sm"
      src="/cave-dwellers/cave-dwellers-logo-576x.png"
      srcset="
        /cave-dwellers/cave-dwellers-logo-576x.png 576w,
        /cave-dwellers/cave-dwellers-logo-288x.png 288w
      "
      sizes="(min-width: 780px) 288px, (min-width: 480px) 256px, 208px"
      alt="Cave Dwellers logo"
      width="576"
      height="576"
    />
    <!-- LONG DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown w-10/12 py-4 sm:py-6 lg:text-2xl"
    >
      {{ Projects["caveDwellers"].longDescription }}
    </div>
    <!-- FEATURES -->
    <div
      class="animate__animated animate__fadeInDown flex w-10/12 flex-col items-center justify-center gap-y-4 py-4 sm:gap-x-4 sm:py-6 md:flex-row md:items-stretch md:gap-x-8 lg:gap-x-16"
    >
      <feature-box
        title="Explore"
        icon="mdi-arrow-up-thick"
        description="Dodge traps and stomp enemies, dashing your way through the dangers that you encounter."
      />
      <feature-box
        title="Shine"
        icon="mdi-star-four-points"
        description="Keep you and your light alive to force away the encroaching darkness that surrounds you."
      />
      <feature-box
        title="Loot"
        icon="mdi-treasure-chest"
        description="Collect shiny coins and gems hidden away in the dephts of the cave."
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
        {{ Projects["caveDwellers"].role }}
      </div>
    </div>
    <!-- GAME -->
    <div
      class="animate__animated animate__fadeInDown flex items-center justify-center pb-6 pt-4 xs:text-xl sm:text-2xl lg:text-3xl"
    >
      <iframe
        frameborder="0"
        src="https://itch.io/embed/2579277?bg_color=820046&amp;fg_color=ffffff&amp;link_color=9A00DB&amp;border_color=ffffff"
        width="552"
        height="167"
      >
        <a href="https://rokneer.itch.io/cave-dwellers">
          Cave Dwellers by Rokneer
        </a>
      </iframe>
    </div>
    <!-- IMAGES -->
    <div class="py-3 sm:py-6">
      <div
        class="animate__animated animate__fadeInDown mb-4 bg-gradient-to-l from-tertiary-500 from-25% via-tertiary-200 to-tertiary-500 to-75% p-2 text-3xl lg:mb-6 lg:text-4xl"
      >
        Gallery
      </div>
      <image-viewer :images="IMAGES" orientation="horizontal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Projects from "../../utils/projects";
import FeatureBox from "../../components/FeatureBox.vue";
import ImageViewer from "../../components/ImageViewer.vue";

// Constants
const IMAGES = [
  {
    src: "/portfolio/cave-dwellers/cave-dwellers-1",
    alt: "",
  },
  {
    src: "/portfolio/cave-dwellers/cave-dwellers-2",
    alt: "",
  },
  {
    src: "/portfolio/cave-dwellers/cave-dwellers-3",
    alt: "",
  },
  {
    src: "/portfolio/cave-dwellers/cave-dwellers-4",
    alt: "",
  },
];
</script>
