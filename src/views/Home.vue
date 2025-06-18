<template>
  <div class="@container">
    <hero />
    <div class="@max-7xl:mx-64 @5xl:mb-24 @xl:mx-20 @lg:mx-12 mx-4">
      <main-projects />
      <side-projects />
      <img
        class="drop-shadow-violet @7xl:drop-shadow-6 @5xl:drop-shadow-4 @xl:drop-shadow-3 drop-shadow-1 @7xl:mb-48 @5xl:mb-24 @xl:mb-20 @lg:mb-12 mb-8"
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
