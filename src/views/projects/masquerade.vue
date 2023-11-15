<template>
  <div class="flex flex-col items-center text-center text-white">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown max-w-[24rem] object-scale-down p-4"
      :src="`../masquerade/masquerade-logo.png`"
      :alt="`masquerade logo`"
    />
    <!-- LONG DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown text-md w-10/12 py-4 lg:text-2xl"
    >
      {{ projects["masquerade"].long_description }}
    </div>
    <!-- SMALL DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown w-10/12 py-4 text-sm lg:text-xl"
    >
      {{ projects["masquerade"].role }}
    </div>
    <!-- FEATURES -->
    <div
      class="animate__animated animate__fadeInDown flex w-10/12 flex-row justify-center gap-x-16 py-4"
    >
      <FeatureBox
        title="Title"
        icon="mdi-plus"
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium praesentium dignissimos fugiat consequatur"
      />
      <FeatureBox
        title="Title"
        icon="mdi-plus"
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium praesentium dignissimos fugiat consequatur"
      />
      <FeatureBox
        title="Title"
        icon="mdi-plus"
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium praesentium dignissimos fugiat consequatur"
      />
    </div>
    <!-- TRAILER -->
    <div class="animate__animated animate__fadeInDown flex w-10/12 py-4">
      <video src=""></video>
    </div>
    <!-- IMAGES -->
    <div>
      <vue-picture-swipe :items="images"></vue-picture-swipe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from "../../.";
import FeatureBox from "../../components/FeatureBox.vue";
import VuePictureSwipe from "vue3-picture-swipe";

const images = [
  {
    src: "../masquerade/masquerade-1.png",
    thumbnail: "../masquerade/masquerade-1.png",
    w: 600,
    h: 400,
  },
  {
    src: "../masquerade/masquerade-2.png",
    thumbnail: "../masquerade/masquerade-2.png",
    w: 1200,
    h: 900,
  },
  ,
  {
    src: "../masquerade/masquerade-3.png",
    thumbnail: "../masquerade/masquerade-3.png",
    w: 1200,
    h: 900,
  },
  {
    src: "../masquerade/masquerade-4.png",
    thumbnail: "../masquerade/masquerade-4.png",
    w: 1200,
    h: 900,
  },
  {
    src: "../masquerade/masquerade-5.png",
    thumbnail: "../masquerade/masquerade-5.png",
    w: 1200,
    h: 900,
  },
  {
    src: "../masquerade/masquerade-6.png",
    thumbnail: "../masquerade/masquerade-6.png",
    w: 1200,
    h: 900,
  },
  {
    src: "../masquerade/masquerade-7.png",
    thumbnail: "../masquerade/masquerade-7.png",
    w: 1200,
    h: 900,
  },
];
</script>
