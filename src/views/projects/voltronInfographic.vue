<template>
  <div class="flex flex-col items-center text-center text-white">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown max-w-xs object-scale-down p-4 lg:max-w-xl"
      src="/voltron-infographic/voltron-infographic-logo.png"
      alt="Voltron Infographic logo"
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
        class="mr-4 w-10 text-white lg:w-12"
        src="/android-chrome-192x192.png"
        alt="Tomate icon"
      />
      <div class="text-left">
        {{ projects["voltron_infographic"].role }}
      </div>
    </div>
    <!-- GAME -->
    <div
      v-if="!isMobile()"
      class="animate__animated animate__fadeInDown flex w-full flex-col justify-center py-3 sm:py-6 md:w-11/12"
    >
      <div class="rounded-xl border-4 border-secondary-300">
        <VueUnity class="rounded-lg" :unity="unityContext" />
      </div>
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
  "/portfolio/voltron-infographic/voltron-infographic-1.png",
  "/portfolio/voltron-infographic/voltron-infographic-2.png",
  "/portfolio/voltron-infographic/voltron-infographic-3.png",
  "/portfolio/voltron-infographic/voltron-infographic-4.png",
  "/portfolio/voltron-infographic/voltron-infographic-5.png",
  "/portfolio/voltron-infographic/voltron-infographic-6.png",
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
