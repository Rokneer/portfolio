<template>
  <div class="aspect-video motion-rotate-in-1 hover:motion-rotate-out-1">
    <div
      class="group relative cursor-pointer shadow-4 shadow-violet transition-all duration-200 ease-in-out hover:shadow-8 hover:shadow-crimson lg:shadow-6 lg:hover:shadow-12 xl:shadow-8 xl:hover:shadow-16 2xl:shadow-10"
      @click="open"
    >
      <img
        :src="project.cover.src"
        :alt="project.cover.alt"
        class="size-full object-cover group-hover:blur-[1px] group-hover:brightness-40"
      />
      <div
        class="absolute top-0 flex size-full flex-col justify-center bg-black/15 p-4 text-[11px] opacity-0 transition-all duration-200 ease-in-out text-shadow-0.5 text-shadow-amaranth group-hover:opacity-100 sm:p-6 sm:text-[19px] sm:text-shadow-1 md:p-8 md:text-[23px] lg:p-12 lg:text-[30px] xl:p-18 xl:text-[36px] xl:text-shadow-2 2xl:p-10 2xl:text-[23px] 3xl:text-[29px]"
      >
        <div class="flex w-full flex-row">
          <div class="flex size-full flex-col gap-y-2 2xl:gap-y-5">
            <div>
              <div class="project-text">Worked as</div>
              <ul class="list-inside list-disc">
                <li v-for="(role, index) in project.roles" :key="index">
                  {{ role }}
                </li>
              </ul>
            </div>
            <div class="flex flex-col">
              <div class="project-text">Made with</div>
              <img
                class="w-[65%] drop-shadow-amaranth drop-shadow-1 sm:drop-shadow-2 xl:drop-shadow-3"
                :src="project.platform.src"
                :alt="project.platform.alt"
              />
            </div>
          </div>

          <div class="flex w-full flex-col">
            <div class="project-text">Doing</div>
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

<style scoped>
@reference "../../style.css";
.project-text {
  @apply text-[15px] font-bold text-shadow-1 text-shadow-amaranth sm:text-[26px] sm:text-shadow-2 md:text-[32px] lg:text-[45px] xl:text-[52px] xl:text-shadow-3 2xl:text-[40px] 3xl:text-[45px];
}
</style>
