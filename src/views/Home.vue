<template>
  <div>
    <div
      class="mx-4 my-2 flex flex-col gap-1.5 xs:gap-3 sm:mx-10 sm:my-6 sm:gap-5 md:mx-12 md:my-8 lg:mx-14 lg:my-10 lg:gap-8 xl:my-12 2xl:mx-18 2xl:my-18 2xl:gap-16 3xl:mx-45 3xl:my-30 3xl:gap-24 4xl:gap-30 5xl:mx-55 5xl:my-45 5xl:gap-55"
    >
      <about />
      <work-projects />
      <personal-projects />
      <contact-info />
      <tomato-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  About,
  ContactInfo,
  TomatoFooter,
  PersonalProjects,
  WorkProjects,
} from "@/components";
</script>
