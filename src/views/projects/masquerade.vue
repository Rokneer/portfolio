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
      <feature-box
        title="Title"
        icon="mdi-plus"
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium praesentium dignissimos fugiat consequatur"
      />
      <feature-box
        title="Title"
        icon="mdi-plus"
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium praesentium dignissimos fugiat consequatur"
      />
      <feature-box
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
    <div class="animate__animated animate__fadeInDown w-10/12 py-4">
      <div
        class="my-3 w-full bg-gradient-to-l from-tertiary-500 from-35% via-tertiary-300 to-tertiary-500 to-65% p-2 text-3xl lg:my-6 lg:text-4xl"
      >
        Galery
      </div>
      <image-viewer :images="images" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from "../../.";
import FeatureBox from "../../components/FeatureBox.vue";
import ImageViewer from "../../components/ImageViewer.vue";

const images = [
  "../../../masquerade/masquerade-1.png",
  "../../../masquerade/masquerade-2.png",
  "../../../masquerade/masquerade-3.png",
  "../../../masquerade/masquerade-4.png",
  "../../../masquerade/masquerade-5.png",
  "../../../masquerade/masquerade-6.png",
  "../../../masquerade/masquerade-7.png",
];
</script>
