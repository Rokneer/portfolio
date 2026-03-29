<template>
  <div class="">
    <div
      class="mx-4 my-2 flex flex-col gap-3 sm:mx-10 sm:my-6 sm:gap-5 md:mx-12 md:my-8 lg:mx-14 lg:my-10 lg:gap-8 xl:my-12 2xl:mx-18 2xl:my-18 2xl:gap-16 3xl:mx-26"
    >
      <about />
      <main-projects />
      <contact-info />
      <tomato-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { About, ContactInfo, TomatoFooter, MainProjects } from "@/components";
</script>
