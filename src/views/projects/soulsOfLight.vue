<template>
  <div class="flex flex-col items-center text-center">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown w-60 object-scale-down p-4 content-visibility-auto xs:w-72 md:w-80 lg:max-w-sm"
      src="/souls-of-light/souls-of-light-logo-576x.avif"
      srcset="
        /souls-of-light/souls-of-light-logo-576x.avif 576w,
        /souls-of-light/souls-of-light-logo-288x.avif 288w
      "
      sizes="(min-width: 780px) 288px, (min-width: 480px) 256px, 208px"
      alt="Souls of Light logo"
      width="576"
      height="576"
    />
    <!-- LONG DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown w-10/12 py-4 sm:py-6 lg:text-2xl"
    >
      {{ PROJECTS["souls_of_light"].long_description }}
    </div>
    <!-- FEATURES -->
    <div
      class="animate__animated animate__fadeInDown flex w-10/12 flex-col items-center justify-center gap-y-4 py-4 sm:gap-x-4 sm:py-6 md:flex-row md:items-stretch md:gap-x-8 lg:gap-x-16"
    >
      <feature-box
        title="Solve"
        icon="mdi-puzzle"
        description="Figure out the solutions to puzzles with the multiple powers your mysterious lamp gives you."
      />
      <feature-box
        title="Escape"
        icon="mdi-run"
        description="Fight your way through the darkened halls of the castle and find the truth about your own past."
      />
      <feature-box
        title="Save"
        icon="mdi-ghost"
        description="Help the lost souls of the castle and free them from their sad state."
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
        {{ PROJECTS["souls_of_light"].role }}
      </div>
    </div>
    <!-- GAME -->
    <div
      class="animate__animated animate__fadeInDown flex items-center justify-center pb-6 pt-4 xs:text-xl sm:text-2xl lg:text-3xl"
    >
      <iframe
        frameborder="0"
        src="https://itch.io/embed/2598860?bg_color=820046&amp;fg_color=ffffff&amp;link_color=9A00DB&amp;border_color=ffffff"
        width="552"
        height="167"
      >
        <a href="https://rokneer.itch.io/souls-of-light">
          Souls of Light by Rokneer
        </a>
      </iframe>
    </div>
    <!-- TRAILER -->
    <div class="flex w-full justify-center py-3 sm:py-6">
      <embed-video id="iAwDhvxiL7o" title="Souls of Light Trailer" />
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
import { PROJECTS } from "../../.";
import FeatureBox from "../../components/FeatureBox.vue";
import ImageViewer from "../../components/ImageViewer.vue";
import EmbedVideo from "../../components/EmbedVideo.vue";

// Constants
const IMAGES = [
  {
    src: "/portfolio/souls-of-light/souls-of-light-1",
    alt: "An image of a dark castle room illuminated by red lamp light. A floating bright emblem sits on top of a skeleton.",
  },
  {
    src: "/portfolio/souls-of-light/souls-of-light-2",
    alt: "An image of a dark castle room illuminated by blue lamp light. A monster made of plants stands aside the playable character.",
  },
  {
    src: "/portfolio/souls-of-light/souls-of-light-3",
    alt: "An image of a dark castle room illuminated by blue lamp light. A text box displaying a conversation between the playable character and a ghostly old man.",
  },
  {
    src: "/portfolio/souls-of-light/souls-of-light-4",
    alt: "An image of a dark castle room illuminated by green lamp light. The playable character is in the middle of a jump.",
  },
  {
    src: "/portfolio/souls-of-light/souls-of-light-5",
    alt: "An image of a dark castle room illuminated by blue lamp light. A monster made of plants is frozen in a block of ice.",
  },
  {
    src: "/portfolio/souls-of-light/souls-of-light-6",
    alt: "An image of a dark castle room illuminated by red lamp light. Darken vines burn besides a skeleton.",
  },
];
</script>
