<template>
  <vue-final-modal
    overlay-transition="vfm-slide-up"
    content-transition="vfm-slide-down"
    class="flex items-center justify-center"
    overlay-class="absolute left-0 top-0 bg-violet/70 backdrop-blur-sm"
    content-class="flex justify-center w-[80%] @container"
  >
    <div
      class="bg-violet @7xl:rounded-[70px] @7xl:p-10 @7xl:gap-y-4 @7xl:border-4 @lg:grid-cols-2 @xl:border-3 grid max-h-screen flex-col gap-2 rounded-[30px] border-2 p-2"
    >
      <!--* LOGO & GDD -->
      <div
        class="bg-amaranth @2xl:h-60 @xl:h-35 h-30 @max-lg:rounded-t-[20px] relative flex w-full items-center justify-center p-2"
        :class="`${
          hasItchOrYoutube
            ? '@7xl:rounded-tl-[50px] @lg:rounded-tl-[20px]'
            : '@7xl:rounded-t-[50px] @lg:rounded-t-[20px] @lg:col-span-2'
        }`"
      >
        <!--* LOGO -->
        <img
          class="@7xl:drop-shadow-5 drop-shadow-1.5 drop-shadow-violet @7xl:max-h-70 @2xl:max-h-60 @2xl:p-4 @xl:max-h-35 max-h-30 p-2"
          :src="project.logo.src"
          :alt="project.logo.alt"
        />

        <!--* GDD -->
        <a
          v-if="project.gddUrl"
          :href="project.gddUrl"
          target="_blank"
          rel="noreferrer"
          class="hover:scale-102 @2xl:m-2 absolute bottom-0 right-0 m-1 flex cursor-pointer flex-col items-center justify-center transition"
        >
          <div
            class="@2xl:text-shadow-1 text-shadow-0.5 text-shadow-violet @2xl:text-[10px] text-center text-[5px] font-bold"
          >
            GDD
          </div>
          <ph-file-text
            weight="fill"
            class="@2xl:drop-shadow-2 drop-shadow-1 drop-shadow-violet @2xl:size-[25px] size-[15px]"
          />
        </a>
      </div>

      <!--* ITCH OR YOUTUBE -->
      <div
        v-if="hasItchOrYoutube"
        class="bg-amaranth @7xl:rounded-tr-[50px] @2xl:h-60 @xl:h-35 h-30 @lg: @lg:rounded-tr-[20px] flex w-full items-center justify-center"
      >
        <iframe
          v-if="project.itchCode"
          class="@2xl:scale-100 scale-70 p-2"
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
        class="bg-amaranth @7xl:px-10 @2xl:h-60 @xl:h-35 h-30 @2xl:px-8 @sm:px-4 flex w-full items-center justify-center px-2"
        :class="`${
          hasImages
            ? '@7xl:rounded-bl-[50px] @lg:rounded-bl-[20px]'
            : '@7xl:rounded-b-[50px] @lg:col-span-2 rounded-b-[20px]'
        }`"
      >
        <span
          class="@7xl:text-shadow-2 text-shadow-1 text-shadow-violet @7xl:text-[24px] @2xl:text-[15px] @xl:text-[10px] @md:text-[8px] w-full text-justify text-[7px]"
        >
          {{ project.description }}
        </span>
      </div>

      <!--* GALLERY -->
      <viewer
        v-if="hasImages"
        class="@2xl:h-60 @xl:h-35 h-30 @lg:rounded-br-[20px] @max-lg:rounded-b-[20px] relative size-full cursor-pointer overflow-hidden"
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
