<template>
  <div
    class="xs:mb-10 3xl:mb-42 4xl:mb-50 xs:h-[350px] 3xl:h-[800px] 4xl:h-[900px] 2xl:mb-30 relative mb-8 h-[300px] w-full sm:mb-14 md:mb-16 md:h-[400px] lg:mb-20 lg:h-[500px] xl:mb-24 xl:h-[550px] 2xl:h-[700px]"
  >
    <div
      class="xs:h-[350px] 3xl:h-[800px] 4xl:h-[900px] bg-amaranth/70 mask-t-from-5% mask-t-to-40% absolute top-0 h-[300px] w-full border-b-2 md:h-[400px] lg:h-[500px] xl:h-[550px] xl:border-b-4 2xl:h-[700px]"
    />
    <video
      class="aspect-video size-full object-cover"
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
      <img class="size-full object-cover" :src="HeroPoster" alt="" />
    </video>
    <div
      class="motion-opacity-in-0 motion-translate-y-in-100 motion-rotate-in-90 motion-delay-150 hover:motion-preset-stretch"
    >
      <img
        :src="TomatoLogo"
        class="drop-shadow-3 xl:drop-shadow-5 3xl:w-[600px] drop-shadow-violet 2xl:bottom-13 absolute bottom-8 left-0 m-auto w-[200px] max-xl:right-0 lg:w-[300px] xl:left-20 xl:w-[400px]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroPoster from "/common/MasqueradeHero.png";
import HeroVideoMP4 from "/common/MasqueradeHero.mp4";
import HeroVideoWebM from "/common/MasqueradeHero.webm";
import TomatoLogo from "/common/tomate/logo/logo-red.svg";
</script>
