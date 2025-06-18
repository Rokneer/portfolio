<template>
  <div
    class="@7xl:pt-40 @7xl:gap-4 @7xl:pb-8 @xl:pb-4 flex flex-col gap-1 pb-2 pt-10"
  >
    <div
      class="@7xl:gap-10 @5xl:gap-5 @xl:gap-3 flex flex-row items-center justify-center gap-2"
    >
      <img
        class="@7xl:drop-shadow-4 @xl:drop-shadow-2 drop-shadow-1 drop-shadow-violet @7xl:h-[100px] @5xl:h-[48px] @xl:h-[32px] @xs:h-[15px] h-[9.5px]"
        :src="VineBottomL"
        alt="A picture long red horizontal vine."
      />
      <img
        class="@7xl:drop-shadow-4 @xl:drop-shadow-2 drop-shadow-1 drop-shadow-violet @7xl:size-[150px] @5xl:size-[90px] @xl:size-[55px] @xs:size-[25px] size-[20px]"
        :src="Tomatito"
        alt="A picture of the developer mascot character, a small red tomato with two big goofy eyes."
      />
      <img
        class="@7xl:drop-shadow-4 @xl:drop-shadow-2 drop-shadow-1 drop-shadow-violet @7xl:h-[100px] @5xl:h-[48px] @xl:h-[32px] @xs:h-[15px] h-[9.5px]"
        :src="VineBottomR"
        alt="A picture long red horizontal vine."
      />
    </div>
    <div
      class="@7xl:text-shadow-2 text-shadow-1 text-shadow-violet @7xl:text-[20px] @5xl:text-[16px] @xl:text-[10px] @xs:text-[6px] text-center text-[5px]"
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
