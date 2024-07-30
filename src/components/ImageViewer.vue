<template>
  <div v-if="images">
    <viewer
      class="flex flex-row flex-wrap"
      :images="images"
      :options="{
        toolbar: false,
        movable: false,
        zoomable: true,
        rotatable: false,
        scalable: false,
        title: false,
      }"
    >
      <span
        v-if="orientation === 'horizontal'"
        class="flex flex-wrap justify-center"
      >
        <game-image
          v-for="(image, index) in images"
          :key="index"
          class="md:w-54 lg:w-[448px]"
          :image="image"
          width="1380"
          height="776"
        />
      </span>
      <span
        v-if="orientation === 'vertical'"
        class="flex flex-wrap justify-center"
      >
        <game-image
          v-for="(image, index) in images"
          :key="index"
          class="w-36 sm:w-32 lg:w-60 xl:w-[360px]"
          :image="image"
          width="740"
          height="1252"
        />
      </span>
    </viewer>
  </div>
</template>

<script setup lang="ts">
import GameImage from "./GameImage.vue";
import { Image, Orientation } from "./../types";

// Properties
defineProps<{ images: Image[] | null; orientation: Orientation }>();
</script>
