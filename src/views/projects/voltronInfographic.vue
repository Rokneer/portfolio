<template>
  <div class="flex flex-col items-center text-center text-white">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown max-w-xs object-scale-down p-4 content-visibility-auto lg:max-w-xl"
      src="/voltron-infographic/voltron-infographic-logo.avif"
      alt="Voltron Infographic logo"
      decoding="async"
      loading="lazy"
    />
    <!-- LONG DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown text-md w-10/12 py-6 lg:text-2xl"
    >
      {{ projects["voltron_infographic"].long_description }}
    </div>
    <!-- SMALL DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown text-md flex w-10/12 flex-row items-center justify-center py-4 sm:py-8 lg:text-xl"
    >
      <img
        class="mr-4 w-10 text-white content-visibility-auto lg:w-12"
        src="/android-chrome-192x192.png"
        alt="Tomate icon"
        decoding="async"
        loading="lazy"
      />
      <div class="text-left">
        {{ projects["voltron_infographic"].role }}
      </div>
    </div>
    <!-- GAME -->
    <div
      v-if="!isMobile()"
      class="animate__animated animate__fadeIn flex w-full flex-col justify-center py-3 sm:py-6 md:w-11/12"
    >
      <VueUnity class="rounded-lg bg-tertiary-100/30" :unity="unityContext" />
      <div class="flex flex-row-reverse gap-x-4 py-4">
        <Button
          class="rounded-2xl px-2 py-1 align-middle text-sm sm:px-4 sm:text-base"
          @click="fullScreen"
        >
          FULLSCREEN
          <icon class="text-md sm:text-lg" icon="mdi-fullscreen" />
        </Button>
      </div>
    </div>
    <!-- IMAGES -->
    <div v-if="isMobile()" class="py-3 sm:py-6">
      <div
        class="animate__animated animate__fadeInUp mb-3 w-full bg-gradient-to-l from-tertiary-500 from-25% via-tertiary-200 to-tertiary-500 to-75% p-2 text-3xl lg:mb-6 lg:text-4xl"
      >
        Gallery
      </div>
      <image-viewer :images="images" orientation="horizontal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects, isMobile } from "../../.";
import Button from "../../components/Button.vue";
import Icon from "../../components/Icon.vue";
import ImageViewer from "../../components/ImageViewer.vue";
import UnityWebgl from "unity-webgl";
import VueUnity from "unity-webgl/vue";

const images = [
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
const unityContext = new UnityWebgl({
  loaderUrl: "/portfolio/build/voltron-build.loader.js",
  dataUrl: "/portfolio/build/voltron-build.data",
  frameworkUrl: "/portfolio/build/voltron-build.framework.js",
  codeUrl: "/portfolio/build/voltron-build.wasm",
});

// Functions
function fullScreen() {
  unityContext.setFullscreen(true);
}
</script>
