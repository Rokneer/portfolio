<template>
  <div class="hover:motion-rotate-out-1 motion-rotate-in-1 aspect-video">
    <div
      class="@5xl:shadow-10 @xl:shadow-8 shadow-3 shadow-violet @5xl:hover:shadow-20 hover:shadow-crimson @xl:border-4 group relative cursor-pointer border transition-all duration-200 ease-in-out"
      @click="open"
    >
      <img
        :src="project.cover.src"
        :alt="project.cover.alt"
        class="size-full object-cover group-hover:blur-[1px] group-hover:brightness-40"
      />
      <div
        class="text-shadow-0.5 text-shadow-amaranth bg-blue/30 @7xl:text-[26px] @7xl:px-12 @xl:text-[15px] @7xl:text-shadow-2 @xs:text-[8px] absolute top-0 flex size-full flex-col justify-center px-2 text-[4.3px] opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"
      >
        <div class="flex w-full flex-row">
          <div class="flex size-full flex-col">
            <div
              class="@7xl:text-shadow-3 text-shadow-1 text-shadow-amaranth @7xl:text-[32px] @7xl:pb-1 @xl:text-[22px] @xs:text-[12px] text-[6px] font-bold"
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
              class="@7xl:text-shadow-3 text-shadow-1 text-shadow-amaranth @7xl:text-[32px] @7xl:mb-3 @xl:text-[22px] @xs:text-[12px] text-[6px] font-bold"
            >
              Made with
            </div>
            <img
              class="@7xl:drop-shadow-3 drop-shadow-1 drop-shadow-amaranth"
              :src="project.platform.src"
              :alt="project.platform.alt"
            />
          </div>
        </div>

        <div class="flex w-full flex-col">
          <div
            class="@7xl:text-shadow-3 text-shadow-1 text-shadow-amaranth @7xl:text-[32px] @7xl:pb-1 @xl:text-[22px] @xs:text-[12px] text-[6px] font-bold"
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
