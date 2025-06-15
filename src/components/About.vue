<template>
  <div class="mb-48 flex flex-row items-center gap-12">
    <img
      class="drop-shadow-5/violet z-10"
      :src="isMeHovered ? meHover : meBase"
      alt="Me!"
      width="382"
      height="567"
      @mouseover="isMeHovered = true"
      @mouseleave="isMeHovered = false"
    />
    <div class="flex flex-col font-medium">
      <div class="text-shadow-4/violet pb-4 text-[90px]">
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
      <div class="text-shadow-3/violet flex flex-col gap-2 text-[46px]">
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
