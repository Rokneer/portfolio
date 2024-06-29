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
        <img
          v-for="image in images"
          :key="image.src"
          :src="`${image.src}.png`"
          :alt="image.alt"
          class="md:w-54 m-2 cursor-pointer rounded-lg border-4 border-secondary-200 bg-secondary-200 transition hover:scale-105 xs:m-2 md:m-3 lg:m-4 lg:w-[448px]"
          width="1380"
          height="776"
        />
      </span>
      <span
        v-if="orientation === 'vertical'"
        class="flex flex-wrap justify-center"
      >
        <img
          v-for="image in images"
          :key="image.src"
          :src="`${image.src}.png`"
          :alt="image.alt"
          class="m-2 w-32 cursor-pointer rounded-lg border-4 border-secondary-200 bg-secondary-200 transition hover:scale-105 xs:m-2 xs:w-36 lg:m-4 lg:w-60 xl:w-[360px]"
          width="740"
          height="1252"
        />
      </span>
    </viewer>
  </div>
</template>

<script setup lang="ts">
import { Image, Orientation } from "./../types";

// Properties
defineProps<{ images: Image[] | null; orientation: Orientation }>();
</script>
