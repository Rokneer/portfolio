<template>
  <div class="flex px-4 py-6 lg:px-6 xl:px-20 3xl:px-35">
    <div
      class="flex flex-row items-center gap-3 sm:gap-6 lg:gap-10 xl:gap-16 2xl:gap-20"
    >
      <div
        class="flex flex-2/5 flex-col drop-shadow-violet drop-shadow-1.5 lg:drop-shadow-2 xl:drop-shadow-4 3xl:drop-shadow-5"
      >
        <img
          :src="isMeHovered ? meHover : meBase"
          alt="Me!"
          @mouseover="isMeHovered = true"
          @mouseleave="isMeHovered = false"
        />
        <img :src="TomatoLogo" class="hover:motion-preset-stretch" />
      </div>
      <div class="flex flex-col font-medium">
        <div
          class="text-[14px] text-shadow-1 text-shadow-violet sm:text-[25px] md:text-[30px] lg:text-[45px] lg:text-shadow-3 xl:text-[52px] xl:text-shadow-5 2xl:text-[64px] 3xl:text-[70px] 3xl:text-shadow-5"
        >
          <span> Hi there, my name is </span>
          <a
            class="text-crimson transition-all ease-in-out hover:font-semibold"
            :href="CV"
            target="_blank"
            rel="noreferrer"
          >
            Alejandro
          </a>
        </div>
        <div
          class="flex flex-col text-[9px] text-shadow-0.5 text-shadow-violet sm:text-[15px] md:text-[20px] lg:text-[26px] lg:text-shadow-1.5 xl:text-[32px] xl:text-shadow-2 2xl:text-[36px] 3xl:text-[40px]"
        >
          <div class="hover:animate-wave motion-reduce:animate-none">
            I design and develop games and other neat stuff!
          </div>
          <div>
            I'm a game developer and designer with a degree in engineering for
            digital entertainment design with an emphasis on videogames.
          </div>
          <div>
            My goal is to create new and exciting experiences and tell wonderful
            stories that inspire and entertain the people who play them.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

import meBase from "/common/tomate/avatar/avatar-1.svg";
import meHover from "/common/tomate/avatar/avatar-2.svg";
import TomatoLogo from "/common/tomate/logo/logo-red.svg";

import CV from "/common/CV-ATS.pdf";
const isMeHovered = ref<boolean>(false);
</script>
