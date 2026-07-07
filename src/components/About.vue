<template>
  <div class="flex px-2 py-4 lg:px-6 xl:px-16 3xl:px-20 4xl:px-36">
    <div
      class="flex flex-row items-center gap-3 sm:gap-6 lg:gap-10 xl:gap-16 2xl:gap-20"
    >
      <div
        class="flex flex-2/5 flex-col drop-shadow-violet drop-shadow-1.5 lg:drop-shadow-2 xl:drop-shadow-4 3xl:drop-shadow-5"
      >
        <img
          :src="isMeHovered ? meHover : meBase"
          alt="A cartoony redition of the the developer, Alejandro, drawn in different shades of purple. Their hand is waving, welcoming you to their portfolio."
          @mouseover="isMeHovered = true"
          @mouseleave="isMeHovered = false"
        />
        <img
          :src="TomatoLogo"
          alt="Bold red text with a white outline reading: tomato.dev, the Os are stylized as small cartoony tomatos."
          class="hover:motion-preset-stretch"
        />
      </div>
      <div class="flex flex-col font-medium">
        <div
          class="text-[17px] text-shadow-1 text-shadow-violet sm:text-[30px] md:text-[35px] lg:text-[45px] lg:text-shadow-3 xl:text-[52px] xl:text-shadow-5 2xl:text-[64px] 3xl:text-[70px] 3xl:text-shadow-5 4xl:text-[100px]"
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
          class="flex flex-col text-[10px] text-shadow-0.5 text-shadow-violet sm:text-[16px] sm:text-shadow-1 md:text-[20px] lg:text-[26px] lg:text-shadow-1.5 xl:text-[32px] xl:text-shadow-2 2xl:text-[36px] 3xl:text-[40px] 4xl:text-[55px] 4xl:text-shadow-3"
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

import CV from "/common/CV.pdf";

const isMeHovered = ref<boolean>(false);
</script>
