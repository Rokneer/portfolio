<template>
  <div class="hover:motion-rotate-out-1 motion-rotate-in-1 aspect-video">
    <div
      class="shadow-4 lg:shadow-6 xl:shadow-8 2xl:shadow-10 hover:shadow-8 lg:hover:shadow-12 xl:hover:shadow-16 2xl:hover:shadow-20 shadow-violet hover:shadow-crimson xl:border-6 group relative cursor-pointer border-2 transition-all duration-200 ease-in-out lg:border-4"
      @click="open"
    >
      <img
        :src="project.cover.src"
        :alt="project.cover.alt"
        class="group-hover:brightness-40 size-full object-cover group-hover:blur-[1px]"
      />
      <div
        class="text-shadow-0.5 2xl:text-shadow-2 xs:p-4 xs:text-[10px] 3xl:text-[21px] 4xl:text-[28px] bg-blue/30 text-shadow-amaranth absolute top-0 flex size-full flex-col justify-center p-2 text-[8px] opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100 sm:text-[12px] md:text-[17px] lg:p-6 lg:text-[23px] xl:p-8 xl:text-[26px] 2xl:gap-2 2xl:p-12 2xl:text-[16px]"
      >
        <div class="flex w-full flex-row">
          <div class="flex size-full flex-col">
            <div
              class="text-shadow-1 2xl:text-shadow-3 xs:text-[12px] 3xl:text-[28px] 4xl:text-[42px] text-shadow-amaranth text-[10px] font-bold sm:text-[18px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[25px]"
            >
              Worked as
            </div>
            <ul class="list-inside list-disc">
              <li v-for="(role, index) in project.roles" :key="index">
                {{ role }}
              </li>
            </ul>
          </div>

          <div class="flex size-full flex-col">
            <div
              class="text-shadow-1 2xl:text-shadow-3 xs:text-[12px] 3xl:text-[28px] 4xl:text-[42px] text-shadow-amaranth text-[10px] font-bold sm:text-[18px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[25px]"
            >
              Made with
            </div>
            <img
              class="drop-shadow-1 2xl:drop-shadow-3 drop-shadow-amaranth w-[80%]"
              :src="project.platform.src"
              :alt="project.platform.alt"
            />
          </div>
        </div>

        <div class="flex w-full flex-col">
          <div
            class="text-shadow-1 2xl:text-shadow-3 xs:text-[12px] 3xl:text-[28px] 4xl:text-[42px] text-shadow-amaranth text-[10px] font-bold sm:text-[18px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[25px]"
          >
            Doing
          </div>
          <ul class="list-inside list-disc">
            <li
              v-for="(contribution, index) in project.contributions"
              :key="index"
            >
              {{ contribution }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Image, Project } from "@/types";
import { useModal } from "vue-final-modal";
import GameModal from "./GameModal.vue";

const props = defineProps<{ project: Project; images: Image[] }>();

const { open } = useModal({
  component: GameModal,
  attrs: { images: props.images, project: props.project },
});
</script>
