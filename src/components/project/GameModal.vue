<template>
  <vue-final-modal
    overlay-transition="vfm-slide-up"
    content-transition="vfm-slide-down"
    class="flex items-center justify-center"
    overlay-class="absolute left-0 top-0 bg-violet/70 backdrop-blur-sm"
    content-class="flex justify-center w-[80%] lg:w-[70%] 3xl:w-[60%]"
  >
    <div
      class="4xl:p-6 bg-violet xl:border-3 grid max-h-screen flex-col gap-2 rounded-[30px] border-2 p-2 lg:grid-cols-2 xl:p-4 2xl:gap-4 2xl:border-4"
    >
      <!--* LOGO & GDD -->
      <div
        class="3xl:h-85 4xl:h-95 bg-amaranth h-30 md:h-35 xl:h-65 2xl:h-75 relative flex w-full items-center justify-center p-2 max-lg:rounded-t-[20px] lg:h-60"
        :class="`${
          hasItchOrYoutube
            ? 'lg:rounded-tl-[20px]'
            : 'lg:col-span-2 lg:rounded-t-[20px]'
        }`"
      >
        <!--* LOGO -->
        <img
          class="drop-shadow-1.5 lg:drop-shadow-2 xl:drop-shadow-3 2xl:drop-shadow-5 3xl:max-h-80 4xl:max-h-90 drop-shadow-violet max-h-30 lg:max-h-50 2xl:max-h-70 p-2 xl:max-h-60 2xl:p-4"
          :src="project.logo.src"
          :alt="project.logo.alt"
        />

        <!--* GDD -->
        <a
          v-if="project.gddUrl"
          :href="project.gddUrl"
          target="_blank"
          rel="noreferrer"
          class="hover:scale-102 absolute bottom-0 right-0 m-1 flex cursor-pointer flex-col items-center justify-center transition 2xl:m-2"
        >
          <div
            class="text-shadow-0.5 xl:text-shadow-1 xs:text-[10px] text-shadow-violet text-center text-[5px] font-bold lg:text-[12px] 2xl:text-[20px]"
          >
            GDD
          </div>
          <ph-file-text
            weight="fill"
            class="drop-shadow-1 xl:drop-shadow-2 xs:size-[25px] drop-shadow-violet size-[15px] lg:size-[35px] 2xl:size-[50px]"
          />
        </a>
      </div>

      <!--* ITCH OR YOUTUBE -->
      <div
        v-if="hasItchOrYoutube"
        class="3xl:h-85 4xl:h-95 bg-amaranth h-30 md:h-35 xl:h-65 2xl:h-75 flex w-full items-center justify-center lg:h-60 lg:rounded-tr-[20px]"
      >
        <iframe
          v-if="project.itchCode"
          class="scale-70 xl:scale-85 p-2 2xl:scale-100"
          :src="`https://itch.io/embed/${project.itchCode}?bg_color=981869&amp;border_color=981869&amp;fg_color=ffffff&amp;link_color=e42038`"
          width="90%"
        />
        <iframe
          v-else-if="project.youtubeCode"
          class="size-full p-0"
          :src="`https://www.youtube.com/embed/${project.youtubeCode}`"
        />
      </div>

      <!--* DESCRIPTION -->
      <div
        class="3xl:h-85 4xl:h-95 xs:p-6 bg-amaranth h-30 md:h-35 xl:h-65 2xl:h-75 flex w-full items-center justify-center p-4 sm:p-8 md:p-10 lg:h-60 lg:p-8"
        :class="`${
          hasImages ? 'lg:rounded-bl-[20px]' : 'rounded-b-[20px] lg:col-span-2'
        }`"
      >
        <span
          class="text-shadow-1 2xl:text-shadow-2 xs:text-[10px] 3xl:text-[22px] 4xl:text-[26px] text-shadow-violet w-full text-justify text-[8px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]"
        >
          {{ project.description }}
        </span>
      </div>

      <!--* GALLERY -->
      <viewer
        v-if="hasImages"
        class="3xl:h-85 4xl:h-95 h-30 md:h-35 xl:h-65 2xl:h-75 relative size-full cursor-pointer overflow-hidden max-lg:rounded-b-[20px] lg:h-60 lg:rounded-br-[20px]"
        :images="images"
        :options="{
          toolbar: false,
          movable: false,
          zoomable: true,
          rotatable: false,
          scalable: false,
          title: false,
        }"
      >
        <div
          v-for="image in images"
          :key="image.src"
          :class="{ hidden: image != images[0] }"
        >
          <img
            class="absolute -bottom-[100%] -left-[100%] -right-[100%] -top-[100%] m-auto min-h-full min-w-full object-cover"
            :src="image.src"
            :alt="image.alt"
          />
        </div>
      </viewer>
    </div>
  </vue-final-modal>
</template>

<script setup lang="ts">
import type { Image, Project } from "@/types";
import { VueFinalModal } from "vue-final-modal";
import { component as Viewer } from "v-viewer";
import { PhFileText } from "@phosphor-icons/vue";
import { computed } from "vue";

const props = defineProps<{ project: Project; images: Image[] }>();

const hasItchOrYoutube = computed(
  () => props.project.itchCode || props.project.youtubeCode,
);
const hasImages = computed(() => props.images.length > 0);
</script>
