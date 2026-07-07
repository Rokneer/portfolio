<template>
  <div class="aspect-video motion-rotate-in-1 hover:motion-rotate-out-1">
    <div
      class="group relative size-full cursor-pointer bg-amaranth/70 text-[55px] shadow-4 shadow-violet transition-all duration-200 ease-in-out hover:shadow-8 hover:shadow-crimson sm:text-[100px] md:text-[130px] lg:text-[180px] lg:shadow-6 lg:hover:shadow-12 xl:text-[210px] xl:shadow-8 xl:hover:shadow-16 2xl:text-[120px] 2xl:shadow-10 3xl:text-[150px]"
    >
      <div
        class="flex size-full -rotate-20 flex-row items-center justify-center"
      >
        <ph-star
          weight="fill"
          color="#e42038"
          class="flex-2 drop-shadow-violet drop-shadow-4 sm:drop-shadow-6 md:drop-shadow-8 lg:drop-shadow-10 xl:drop-shadow-12 2xl:drop-shadow-8 3xl:drop-shadow-10"
        />
        <div
          class="flex-1 text-center text-[36px] font-black text-shadow-4 text-shadow-violet sm:text-[64px] sm:text-shadow-6 md:text-[100px] md:text-shadow-8 lg:text-[105px] lg:text-shadow-10 xl:text-[135px] xl:text-shadow-12 2xl:text-[80px] 2xl:text-shadow-8 3xl:text-[90px] 3xl:text-shadow-10"
        >
          More coming soon!
        </div>
        <ph-star
          weight="fill"
          color="#e42038"
          class="flex-2 drop-shadow-violet drop-shadow-4 sm:drop-shadow-6 md:drop-shadow-8 lg:drop-shadow-10 xl:drop-shadow-12 2xl:drop-shadow-8 3xl:drop-shadow-10"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhStar } from "@phosphor-icons/vue";
</script>
