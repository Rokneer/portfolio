<template>
  <div>
    <hero />
    <div
      class="xs:mx-8 3xl:mx-40 4xl:mx-64 2xl:mx-30 mx-4 sm:mx-10 md:mx-12 lg:mx-14 xl:mx-20"
    >
      <main-projects />
      <side-projects />
      <img
        class="drop-shadow-2 sm:drop-shadow-3 lg:drop-shadow-4 xl:drop-shadow-6 2xl:drop-shadow-8 3xl:drop-shadow-10 xs:mb-10 3xl:mb-42 4xl:mb-50 drop-shadow-violet 2xl:mb-30 mb-8 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-24"
        :src="VineMid"
        alt="A picture two long red horizontal vines side by side."
      />
      <about />
      <contact-info />
      <tomato-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Hero,
  About,
  ContactInfo,
  TomatoFooter,
  MainProjects,
  SideProjects,
} from "@/components";

import VineMid from "/common/tomate/vines/VineMid.svg";
</script>
