<template>
  <div class="flex flex-col items-center text-center text-white">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown max-w-xs object-scale-down p-4"
      :src="`../souls-of-light/souls-of-light-logo.png`"
      :alt="`Souls of Light logo`"
    />
    <!-- LONG DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown text-md w-10/12 py-6 lg:text-2xl"
    >
      {{ projects["souls_of_light"].long_description }}
    </div>
    <!-- FEATURES -->
    <div
      class="animate__animated animate__fadeInDown flex w-10/12 flex-row justify-center gap-x-4 py-6 md:gap-x-8 lg:gap-x-16"
    >
      <feature-box
        title="Solve"
        icon="mdi-account"
        description="Figure out the solutions to puzzles with the multiple powers your mysterious lamp gives you."
      />
      <feature-box
        title="Escape"
        icon="mdi-account"
        description="Fight your way through the darkened halls of the castle and find the truth about your own past."
      />
      <feature-box
        title="Save"
        icon="mdi-account"
        description="Help the lost souls of the castle and free them from their sad state."
      />
    </div>
    <!-- SMALL DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown text-md flex w-10/12 flex-row items-center justify-center py-6 lg:text-xl"
    >
      <img
        class="mr-4 w-10 text-white lg:w-12"
        src="../../../tomato-single.png"
        alt="Tomate icon"
      />
      <div class="text-left">
        {{ projects["souls_of_light"].role }}
      </div>
    </div>
    <!-- TRAILER -->
    <div class="flex w-9/12 justify-center py-6">
      <embed-video id="iAwDhvxiL7o" title="Souls of Light Trailer" />
    </div>
    <!-- IMAGES -->
    <div class="w-10/12 py-6">
      <div
        class="animate__animated animate__fadeInDown mb-3 w-full bg-gradient-to-l from-tertiary-500 from-35% via-tertiary-300 to-tertiary-500 to-65% p-2 text-3xl lg:mb-6 lg:text-4xl"
      >
        Gallery
      </div>
      <image-viewer :images="images" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from "../../.";
import FeatureBox from "../../components/FeatureBox.vue";
import ImageViewer from "../../components/ImageViewer.vue";
import EmbedVideo from "../../components/EmbedVideo.vue";

const images = [
  "../../../souls-of-light/souls-of-light-1.png",
  "../../../souls-of-light/souls-of-light-2.png",
  "../../../souls-of-light/souls-of-light-3.png",
  "../../../souls-of-light/souls-of-light-4.png",
  "../../../souls-of-light/souls-of-light-5.png",
  "../../../souls-of-light/souls-of-light-6.png",
];
</script>
