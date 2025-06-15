<template>
  <div class="mb-8 flex flex-col gap-4 pt-40">
    <div class="flex flex-row items-center justify-center gap-10">
      <img
        class="drop-shadow-4/violet h-[100px]"
        :src="VineBottomL"
        alt="A picture long red horizontal vine."
      />
      <img
        class="drop-shadow-4/violet size-[150px]"
        :src="Tomatito"
        alt="A picture of the developer mascot character, a small red tomato with two big goofy eyes."
      />
      <img
        class="drop-shadow-4/violet h-[100px]"
        :src="VineBottomR"
        alt="A picture long red horizontal vine."
      />
    </div>
    <div class="text-shadow-2/violet text-center text-[20px]">
      Designed and developed in Vue by Tomato.Dev
    </div>
  </div>
</template>
<script setup lang="ts">
import VineBottomL from "/common/tomate/vines/VineBottomL.svg";
import VineBottomR from "/common/tomate/vines/VineBottomR.svg";
import Tomatito from "/common/tomate/mascot/mascot-crimson-border.svg";
</script>
