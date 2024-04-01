<template>
  <div class="flex flex-col items-center text-center">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown max-w-xs object-scale-down p-4 content-visibility-auto lg:max-w-xl"
      src="/un-recuerdo/un-recuerdo-logo.png"
      alt="Un Recuerdo logo"
      width="795"
      height="166"
    />
    <!-- LONG DESCRIPTION -->
    <div class="animate__animated animate__fadeInDown w-10/12 py-6 lg:text-2xl">
      {{ Projects["unRecuerdo"].longDescription }}
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
        {{ Projects["unRecuerdo"].role }}
      </div>
    </div>
    <!-- VIDEO -->
    <div class="flex w-full justify-center py-3 sm:py-6">
      <embed-video id="HOMR1tvPWy0" title="Un Recuerdo Short Film" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Projects from "../../utils/projects";
import EmbedVideo from "../../components/EmbedVideo.vue";
</script>
