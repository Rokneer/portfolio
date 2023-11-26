<template>
  <div class="flex flex-col items-center text-center text-white">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown max-w-xs object-scale-down p-6 lg:max-w-xl"
      src="/un-recuerdo/un-recuerdo-logo.png"
      alt="Un Recuerdo logo"
    />
    <!-- LONG DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown text-md w-10/12 py-6 lg:text-2xl"
    >
      {{ projects["un_recuerdo"].long_description }}
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
        {{ projects["un_recuerdo"].role }}
      </div>
    </div>
    <!-- TRAILER -->
    <div
      class="animate__animated animate__fadeIn flex w-full justify-center py-3 sm:py-6 md:w-11/12"
    >
      <embed-video id="HOMR1tvPWy0" title="Un Recuerdo Short Film" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from "../../.";
import EmbedVideo from "../../components/EmbedVideo.vue";
</script>
