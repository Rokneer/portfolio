<template>
  <div
    class="xs:mb-10 3xl:mb-42 4xl:mb-50 2xl:mb-30 mb-8 flex flex-row items-center justify-around gap-3 sm:mb-14 md:mb-16 lg:mb-20 lg:gap-6 xl:mb-24 xl:gap-12"
  >
    <img
      class="drop-shadow-1.5 lg:drop-shadow-2 xl:drop-shadow-4 2xl:drop-shadow-5 drop-shadow-violet z-10 w-[30%]"
      :src="isMeHovered ? meHover : meBase"
      alt="Me!"
      width="382"
      height="567"
      @mouseover="isMeHovered = true"
      @mouseleave="isMeHovered = false"
    />
    <div class="flex w-[70%] flex-col font-medium">
      <div
        class="text-shadow-0.5 xs:text-shadow-1 lg:text-shadow-2 xl:text-shadow-3 2xl:text-shadow-4 xs:text-[20px] 3xl:text-[80px] 4xl:text-[90px] text-shadow-violet text-[14px] md:text-[30px] lg:text-[40px] xl:text-[52px] 2xl:text-[60px]"
      >
        <span> Hi there, my name is </span>
        <a
          class="text-crimson transition-all ease-in-out hover:font-semibold"
          href="https://drive.google.com/file/d/1c11vZkUXzI7QEqjcQp86l1xCUVQTRyqQ"
          target="_blank"
          rel="noreferrer"
        >
          Alejandro
        </a>
      </div>
      <div
        class="text-shadow-0.5 lg:text-shadow-1 xl:text-shadow-2 2xl:text-shadow-3 xs:text-[13px] 3xl:text-[42px] 4xl:text-[56px] text-shadow-violet flex flex-col text-[9px] md:text-[20px] lg:text-[25px] xl:text-[32px] 2xl:text-[40px]"
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
</template>
<script setup lang="ts">
import { ref } from "vue";

import meBase from "/common/tomate/avatar/avatar-1.svg";
import meHover from "/common/tomate/avatar/avatar-2.svg";

const isMeHovered = ref<boolean>(false);
</script>
