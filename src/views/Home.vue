<template>
  <div>
    <hero />
    <div class="mx-64">
      <main-projects />
      <side-projects />
      <img
        class="drop-shadow-violet drop-shadow-5 mb-48 h-[100px]"
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
