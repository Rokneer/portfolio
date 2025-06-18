<template>
  <div
    class="@7xl:h-[1000px] @7xl:mb-24 @xl:h-[500px] @5xl:mb-24 @xl:mb-20 @lg:h-[450px] @xs:h-[300px] @lg:mb-12 relative mb-8 h-[250px] w-full"
  >
    <div
      class="bg-amaranth/70 mask-t-from-5% mask-t-to-40% @7xl:h-[1000px] @xl:h-[500px] @lg:h-[450px] @xs:h-[300px] @xl:border-b-4 @xs:border-b-2 absolute top-0 h-[250px] w-full border-b-[1.5px]"
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
        class="@7xl:drop-shadow-5 drop-shadow-3 drop-shadow-violet @7xl:bottom-13 @7xl:w-[700px] @5xl:w-[350px] @xl:w-[300px] @max-xl:right-0 @xl:left-20 absolute bottom-8 left-0 m-auto w-[200px]"
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
