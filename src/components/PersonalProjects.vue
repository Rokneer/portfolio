<template>
  <div>
    <div
      class="mb-1 flex flex-row items-center justify-center gap-1 text-center text-[18px] font-medium drop-shadow-violet drop-shadow-1.5 sm:mb-3 sm:gap-3 sm:text-[36px] md:text-[40px] lg:mb-4 lg:gap-6 lg:text-[50px] lg:drop-shadow-2 xl:mb-6 xl:gap-8 xl:text-[65px] xl:drop-shadow-4 2xl:gap-10 2xl:text-[80px] 3xl:gap-12 3xl:text-[90px] 3xl:drop-shadow-5 4xl:mb-8 4xl:gap-14 4xl:text-[100px] 5xl:text-[160px] 5xl:drop-shadow-7"
    >
      <ph-heart
        weight="fill"
        color="#e42038"
        class="mb-1 hover:animate-wave md:mb-2 lg:mb-3 2xl:mb-4 3xl:mb-6"
      />
      <div class="align-bottom leading-none">Personal Projects</div>
      <ph-heart
        weight="fill"
        color="#e42038"
        class="mb-1 hover:animate-wave md:mb-2 lg:mb-3 2xl:mb-4 3xl:mb-6"
      />
    </div>
    <div
      class="grid w-full items-center justify-center gap-4 md:gap-6 xl:gap-8 2xl:grid-cols-2 2xl:gap-10 5xl:gap-15"
    >
      <project :project="PROJECTS.foodForTheSoul" />
      <project :project="PROJECTS.masquerade" />
      <project :project="PROJECTS.caveDwellers" />
      <project :project="PROJECTS.potionRush" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PROJECTS from "@/utils/projects.ts";
import Project from "./project/Project.vue";

import { PhHeart } from "@phosphor-icons/vue";
</script>
