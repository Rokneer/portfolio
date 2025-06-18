<template>
  <div class="hover:motion-rotate-out-1 motion-rotate-in-1 aspect-square">
    <div
      class="@5xl:shadow-10 shadow-violet @5xl:hover:shadow-20 hover:shadow-crimson @xl:shadow-8 @xl:border-4 shadow-3 @xl:hover:shadow-10 hover:shadow-4 group relative cursor-pointer border transition-all duration-200 ease-in-out"
      @click="open"
    >
      <img
        :src="project.cover.src"
        :alt="project.cover.alt"
        class="size-full mask-cover object-cover group-hover:blur-[1px] group-hover:brightness-40"
      />
      <div
        class="@7xl:text-shadow-2 text-shadow-0.5 text-shadow-amaranth bg-blue/30 @7xl:text-[26px] @7xl:px-8 @xs:px-4 @xs:text-[10px] @xl:text-[16px] absolute top-0 flex size-full flex-col justify-center px-2 text-[6px] opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"
      >
        <div class="@7xl:gap-5 flex flex-col items-center gap-1">
          <div class="flex w-full flex-col">
            <div
              class="@7xl:text-shadow-3 text-shadow-1 text-shadow-amaranth @7xl:text-[32px] @7xl:mb-3 @xs:text-[12px] @xl:text-[22px] text-[7px] font-bold"
            >
              Worked as
            </div>
            <ul class="@7xl:text-[22px] list-inside list-disc">
              <li v-for="(role, index) in project.roles" :key="index">
                {{ role }}
              </li>
            </ul>
          </div>

          <div class="flex w-full flex-col">
            <div
              class="@7xl:text-shadow-3 text-shadow-1 text-shadow-amaranth @7xl:text-[32px] @7xl:mb-3 @xs:text-[12px] @xl:text-[22px] text-[7px] font-bold"
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
