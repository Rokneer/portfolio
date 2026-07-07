<template>
  <div class="flex flex-col gap-1 pt-6 md:pt-8 lg:pt-12 xl:gap-4 xl:pt-16">
    <div
      class="flex flex-row items-center justify-center gap-2 *:drop-shadow-violet md:gap-3 xl:gap-4 2xl:gap-5"
    >
      <img
        class="h-3.75 drop-shadow-2 sm:h-5 sm:drop-shadow-3 md:h-7 lg:h-8.75 lg:drop-shadow-4 xl:h-12.5 xl:drop-shadow-6 2xl:h-15"
        :src="VineBottomL"
        alt="A picture long red horizontal vine."
      />

      <img
        class="size-7.5 drop-shadow-2 hover:animate-wiggle motion-reduce:animate-none sm:h-8.75 sm:drop-shadow-3 md:h-11.25 lg:h-13.75 lg:drop-shadow-4 xl:size-30 xl:drop-shadow-6"
        :src="Tomatito"
        alt="A picture of the developer mascot character, a small red tomato with two big goofy eyes."
      />

      <img
        class="h-3.75 drop-shadow-2 sm:h-5 sm:drop-shadow-3 md:h-7 lg:h-8.75 lg:drop-shadow-4 xl:h-12.5 xl:drop-shadow-6 2xl:h-15"
        :src="VineBottomR"
        alt="A picture long red horizontal vine."
      />
    </div>
    <div
      class="text-center text-[6px] text-shadow-1 text-shadow-violet sm:text-[8px] lg:text-[12px] xl:text-[20px] xl:text-shadow-2.5"
    >
      Designed and developed in Vue by Tomato.Dev
    </div>
  </div>
</template>
<script setup lang="ts">
import VineBottomL from "/common/tomate/vines/VineBottomL.svg";
import VineBottomR from "/common/tomate/vines/VineBottomR.svg";
import Tomatito from "/common/tomate/mascot/mascot-crimson-border.svg";
</script>
