<template>
  <div
    class="4xl:pt-60 4xl:pb-10 flex flex-col gap-1 pt-10 pb-3 lg:pt-20 xl:pb-4 2xl:gap-4 2xl:pt-40 2xl:pb-8"
  >
    <div
      class="3xl:gap-10 flex flex-row items-center justify-center gap-2 md:gap-3 xl:gap-4 2xl:gap-5"
    >
      <img
        class="drop-shadow-2 sm:drop-shadow-3 lg:drop-shadow-4 xl:drop-shadow-6 2xl:drop-shadow-8 3xl:drop-shadow-10 3xl:h-[80px] 4xl:h-[110px] drop-shadow-violet h-[15px] sm:h-[20px] md:h-[28px] xl:h-[32px] 2xl:h-[60px]"
        :src="VineBottomL"
        alt="A picture long red horizontal vine."
      />
      <img
        class="drop-shadow-2 sm:drop-shadow-3 lg:drop-shadow-4 xl:drop-shadow-6 2xl:drop-shadow-8 3xl:drop-shadow-10 3xl:size-[150px] 4xl:size-[180px] drop-shadow-violet size-[30px] sm:h-[35px] md:h-[45px] xl:size-[55px] 2xl:size-[120px]"
        :src="Tomatito"
        alt="A picture of the developer mascot character, a small red tomato with two big goofy eyes."
      />
      <img
        class="drop-shadow-2 sm:drop-shadow-3 lg:drop-shadow-4 xl:drop-shadow-6 2xl:drop-shadow-8 3xl:drop-shadow-10 3xl:h-[80px] 4xl:h-[110px] drop-shadow-violet h-[15px] sm:h-[20px] md:h-[28px] xl:h-[32px] 2xl:h-[60px]"
        :src="VineBottomR"
        alt="A picture long red horizontal vine."
      />
    </div>
    <div
      class="text-shadow-1 2xl:text-shadow-2 4xl:text-shadow-4 3xl:text-[20px] 4xl:text-[30px] text-shadow-violet text-center text-[6px] sm:text-[8px] xl:text-[10px] 2xl:text-[16px]"
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
