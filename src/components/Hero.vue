<template>
  <div class="relative mb-24 h-[1000px] w-full">
    <div
      class="bg-amaranth absolute top-0 -z-50 h-[1200px] w-full mask-b-from-60% mask-b-to-90%"
    />
    <video
      class="h-[1000px] w-full object-none"
      :poster="HeroPoster"
      autoplay
      muted
      loop
      disablepictureinpicture
      disableremoteplayback
      x-webkit-airplay="deny"
    >
      <source :src="HeroVideoMP4" type="video/mp4" />
      <source :src="HeroVideoWebM" type="video/webm" />
      <img class="h-[1000px] w-full object-none" :src="HeroPoster" alt="" />
    </video>
    <div
      class="bg-amaranth/70 absolute top-0 h-[1000px] w-full border-b-4 mask-t-from-5% mask-t-to-40%"
    />
    <img
      :src="TomatoLogo"
      class="drop-shadow-5/violet motion-opacity-in-0 motion-translate-y-in-100 motion-rotate-in-90 motion-delay-150 hover:motion-preset-stretch absolute bottom-13 left-20 w-[700px]"
    />
  </div>
</template>

<script setup lang="ts">
import HeroPoster from "/common/MasqueradeHero.png";
import HeroVideoMP4 from "/common/MasqueradeHero.mp4";
import HeroVideoWebM from "/common/MasqueradeHero.webm";
import TomatoLogo from "/common/tomate/logo/logo-red.svg";
</script>
