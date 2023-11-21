<template>
  <div class="flex flex-col items-center text-center text-white">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown max-w-xs object-scale-down p-4 lg:max-w-xl"
      :src="`../voltron-infographic/voltron-infographic-logo.png`"
      :alt="`Voltron Infographic logo`"
    />
    <!-- LONG DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown text-md w-10/12 py-6 lg:text-2xl"
    >
      {{ projects["voltron_infographic"].long_description }}
    </div>
    <!-- SMALL DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown text-md flex w-10/12 flex-row items-center justify-center py-6 lg:text-xl"
    >
      <img
        class="mr-4 w-10 text-white lg:w-12"
        src="../../../android-chrome-192x192.png"
        alt="Tomate icon"
      />
      <div class="text-left">
        {{ projects["voltron_infographic"].role }}
      </div>
    </div>
    <!-- GAME -->
    <div
      class="animate__animated animate__fadeIn flex w-7/12 flex-col justify-center"
    >
      <div class="rounded-xl border-4 border-secondary-300">
        <VueUnity class="rounded-lg" :unity="unityContext" />
      </div>
      <div class="flex flex-row-reverse gap-x-4 py-4">
        <Button class="rounded-2xl px-4 py-1 align-middle" @click="fullScreen">
          FULLSCREEN
          <icon class="text-lg" icon="mdi-fullscreen" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from "../../.";
import Button from "../../components/Button.vue";
import Icon from "../../components/Icon.vue";
import UnityWebgl from "unity-webgl";
import VueUnity from "unity-webgl/vue";

const unityContext = new UnityWebgl({
  loaderUrl: "/build/voltron-build.loader.js",
  dataUrl: "/build/voltron-build.data",
  frameworkUrl: "/build/voltron-build.framework.js",
  codeUrl: "/build/voltron-build.wasm",
});
function fullScreen() {
  unityContext.setFullscreen(true);
}
</script>
