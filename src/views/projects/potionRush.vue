<template>
  <div class="flex flex-col items-center text-center text-white">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown max-w-xs object-scale-down p-4 lg:max-w-sm"
      src="/potion-rush/potion-rush-logo.png"
      alt="Potion Rush logo"
    />
    <!-- LONG DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown text-md w-10/12 py-6 lg:text-2xl"
    >
      {{ projects["potion_rush"].long_description }}
    </div>
    <!-- FEATURES -->
    <div
      class="animate__animated animate__fadeInDown flex w-10/12 flex-row justify-center gap-x-4 py-6 md:gap-x-8 lg:gap-x-16"
    >
      <feature-box
        title="Brew"
        icon="mdi-bottle-tonic"
        description="Cook up delicious potions with a variety of magical ingredients."
      />
      <feature-box
        title="Profit"
        icon="mdi-cash-multiple"
        description="Make as much money as you can by getting tips from satisfied customers to try to pay rent."
      />
      <feature-box
        title="Mood"
        icon="mdi-emoticon-angry"
        description="Deal with the ever changing temperament of the many people of New Arkadia."
      />
    </div>
    <!-- SMALL DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown text-md flex w-10/12 flex-row items-center justify-center py-6 lg:text-xl"
    >
      <img
        class="mr-4 w-10 text-white lg:w-12"
        src="/android-chrome-192x192.png"
        alt="Tomate icon"
      />
      <div class="text-left">
        {{ projects["potion_rush"].role }}
      </div>
    </div>
    <!-- IMAGES -->
    <div class="w-10/12 py-6">
      <div
        class="animate__animated animate__fadeInDown mb-3 w-full bg-gradient-to-l from-tertiary-500 from-35% via-tertiary-200 to-tertiary-500 to-65% p-2 text-3xl lg:mb-6 lg:text-4xl"
      >
        Gallery
      </div>
      <image-viewer :images="images" orientation="vertical" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from "../../.";
import FeatureBox from "../../components/FeatureBox.vue";
import ImageViewer from "../../components/ImageViewer.vue";

const images = [
  "/potion-rush/potion-rush-1.png",
  "/potion-rush/potion-rush-2.png",
  "/potion-rush/potion-rush-3.png",
  "/potion-rush/potion-rush-4.png",
  "/potion-rush/potion-rush-5.png",
  "/potion-rush/potion-rush-6.png",
  "/potion-rush/potion-rush-7.png",
  "/potion-rush/potion-rush-8.png",
];
</script>
