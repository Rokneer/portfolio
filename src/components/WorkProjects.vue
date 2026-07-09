<template>
  <div>
    <div
      class="mb-1 flex flex-row items-center justify-center gap-1 text-center text-[18px] font-medium drop-shadow-violet drop-shadow-1.5 sm:mb-3 sm:gap-3 sm:text-[36px] md:text-[40px] lg:mb-4 lg:gap-6 lg:text-[50px] lg:drop-shadow-2 xl:mb-6 xl:gap-8 xl:text-[65px] xl:drop-shadow-4 2xl:gap-10 2xl:text-[80px] 3xl:gap-12 3xl:text-[90px] 3xl:drop-shadow-5 4xl:mb-8 4xl:gap-14 4xl:text-[100px] 5xl:text-[160px] 5xl:drop-shadow-7"
    >
      <ph-star
        weight="fill"
        color="#e42038"
        class="mb-1 hover:animate-spin md:mb-2 lg:mb-3 2xl:mb-4 3xl:mb-6"
      />
      <div class="align-bottom leading-none">Professional Work</div>
      <ph-star
        weight="fill"
        color="#e42038"
        class="mb-1 hover:animate-spin md:mb-2 lg:mb-3 2xl:mb-4 3xl:mb-6"
      />
    </div>
    <div class="flex flex-row items-center justify-center">
      <div class="w-[60%]">
        <project :project="PROJECTS.AngryBill" :images="billImages" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PROJECTS from "@/utils/projects";
import Project from "./project/Project.vue";

import billImages from "@/assets/angryBill";

import { PhStar } from "@phosphor-icons/vue";
</script>
