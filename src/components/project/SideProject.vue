<template>
  <div class="hover:motion-rotate-out-1 motion-rotate-in-1">
    <div
      class="shadow-10/violet hover:shadow-20/crimson group relative size-[360px] cursor-pointer border-4 transition-all duration-200 ease-in-out"
      @click="open"
    >
      <img
        :src="project.cover.src"
        :alt="project.cover.alt"
        class="mask-cover group-hover:brightness-40 size-full object-cover group-hover:blur-[1px]"
      />
      <div
        class="text-shadow-2/amaranth bg-blue/30 absolute top-0 flex size-full flex-col justify-center p-8 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"
      >
        <div class="flex flex-col items-center gap-5">
          <div class="flex w-full flex-col">
            <div class="text-shadow-3/amaranth pb-1 text-3xl font-bold">
              Worked as
            </div>
            <ul class="list-inside list-disc text-[22px]">
              <li v-for="(role, index) in project.roles" :key="index">
                {{ role }}
              </li>
            </ul>
          </div>

          <div class="flex w-full flex-col">
            <div class="text-shadow-3/amaranth pb-1 text-3xl font-bold">
              Made with
            </div>
            <img
              class="drop-shadow-3/amaranth"
              :src="project.platform.src"
              :alt="project.platform.alt"
            />
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
