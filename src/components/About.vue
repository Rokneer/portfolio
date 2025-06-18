<template>
  <div
    class="@7xl:mb-48 @5xl:mb-24 @xl:mb-20 @lg:mb-12 @xl:gap-12 @lg:gap-6 mb-8 flex flex-row items-center justify-around gap-3"
  >
    <img
      class="@5xl:drop-shadow-5 @xl:drop-shadow-4 @lg:drop-shadow-2 drop-shadow-1.5 drop-shadow-violet z-10 w-[30%]"
      :src="isMeHovered ? meHover : meBase"
      alt="Me!"
      width="382"
      height="567"
      @mouseover="isMeHovered = true"
      @mouseleave="isMeHovered = false"
    />
    <div class="flex w-[70%] flex-col font-medium">
      <div
        class="@5xl:text-shadow-4 @xl:text-shadow-3 @lg:text-shadow-2 @xs:text-shadow-1 text-shadow-0.5 text-shadow-violet @7xl:pb-4 @7xl:text-[90px] @xl:text-[42px] @lg:text-[32px] @xs:text-[16px] text-[10px]"
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
        class="@5xl:text-shadow-3 @xl:text-shadow-2 @lg:text-shadow-1 text-shadow-0.5 text-shadow-violet @min-7xl:text-[46px] @max-7xl:text-[36px] @5xl:text-[28px] @lg:text-[20px] @xs:text-[10px] flex flex-col gap-1 text-[6px]"
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
