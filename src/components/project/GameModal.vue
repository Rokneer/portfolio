<template>
  <vue-final-modal
    overlay-transition="vfm-slide-up"
    content-transition="vfm-slide-down"
    class="flex items-center justify-center"
    overlay-class="absolute left-0 top-0 bg-violet/70 backdrop-blur-sm"
    content-class="flex justify-center w-[80%] lg:w-[70%] 3xl:w-[60%]"
  >
    <div
      class="grid max-h-screen flex-col gap-2 rounded-[30px] border-2 bg-violet p-2 xl:border-3 xl:p-4 2xl:gap-4 2xl:border-4 4xl:p-6"
      :class="`${isMobile ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`"
    >
      <!--* LOGO & GDD -->
      <div
        class="relative flex h-30 w-full items-center justify-center bg-amaranth p-2 max-lg:rounded-t-[20px] md:h-35 lg:h-60 xl:h-65 2xl:h-75 3xl:h-85 4xl:h-95"
        :class="[
          `${
            hasItchOrYoutube || isMobile
              ? 'lg:rounded-tl-[20px]'
              : 'lg:col-span-2 lg:rounded-t-[20px]'
          }`,
          { 'lg:rounded-tr-none': isMobile },
        ]"
      >
        <!--* LOGO -->
        <img
          class="max-h-30 p-2 drop-shadow-violet drop-shadow-1.5 lg:max-h-50 lg:drop-shadow-2 xl:max-h-60 xl:drop-shadow-3 2xl:max-h-70 2xl:p-4 2xl:drop-shadow-5 3xl:max-h-80 4xl:max-h-90"
          :src="project.logo.src"
          :alt="project.logo.alt"
        />

        <!--* GDD -->
        <a
          v-if="project.gddUrl"
          :href="project.gddUrl"
          target="_blank"
          rel="noreferrer"
          class="absolute right-0 bottom-0 m-1 flex cursor-pointer flex-col items-center justify-center transition hover:scale-102 2xl:m-2"
        >
          <div
            class="text-center text-[5px] font-bold text-shadow-0.5 text-shadow-violet xs:text-[10px] lg:text-[12px] xl:text-shadow-1 2xl:text-[20px]"
          >
            GDD
          </div>
          <ph-file-text
            weight="fill"
            class="size-3.75 drop-shadow-violet drop-shadow-1 xs:size-6.25 lg:size-8.75 xl:drop-shadow-2 2xl:size-12.5"
          />
        </a>
      </div>

      <!--* CONTRIBUTIONS -->
      <div
        v-if="isMobile"
        class="flex h-30 w-full items-center bg-amaranth p-4 text-shadow-1 text-shadow-violet xs:p-6 sm:h-40 sm:p-8 md:h-50 md:p-10 lg:h-60 lg:p-4 xl:h-65 xl:p-5 2xl:h-75 2xl:p-6 2xl:text-shadow-2 3xl:h-85 3xl:p-8 4xl:h-95"
        :class="`${hasItchOrYoutube ? 'lg:rounded-t-none' : 'lg:rounded-tr-[20px]'}`"
      >
        <div
          class="grid w-full grid-cols-3 gap-2 text-[6px] xs:text-[7px] sm:text-[9px] md:text-[11px] lg:grid-cols-2 lg:gap-1 xl:text-[12px] 2xl:gap-2 2xl:text-[14px] 3xl:text-[16px] 4xl:text-[18px]"
        >
          <div class="flex w-full flex-col">
            <div
              class="text-[9px] font-bold text-shadow-1 text-shadow-violet sm:text-[12px] md:text-[14px] lg:text-[16px] 2xl:text-[23px] 2xl:text-shadow-3 3xl:text-[28px]"
            >
              Worked as
            </div>
            <ul class="list-inside list-disc">
              <li v-for="(role, index) in project.roles" :key="index">
                {{ role }}
              </li>
            </ul>
          </div>

          <div class="flex flex-col">
            <div
              class="text-[9px] font-bold text-shadow-1 text-shadow-violet sm:text-[12px] md:text-[14px] lg:text-[16px] 2xl:text-[23px] 2xl:text-shadow-3 3xl:text-[28px]"
            >
              Made with
            </div>
            <img
              class="max-h-15 drop-shadow-violet drop-shadow-1 2xl:drop-shadow-3"
              :src="project.platform.src"
              :alt="project.platform.alt"
            />
          </div>

          <div v-if="project.contributions" class="col-span-2 flex flex-col">
            <div
              class="text-[9px] font-bold text-shadow-1 text-shadow-violet sm:text-[12px] md:text-[14px] lg:text-[16px] 2xl:text-[23px] 2xl:text-shadow-3 3xl:text-[28px]"
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

      <!--* ITCH OR YOUTUBE -->
      <div
        v-if="hasItchOrYoutube"
        class="flex h-30 w-full items-center justify-center bg-amaranth md:h-35 lg:h-60 lg:rounded-tr-[20px] xl:h-65 2xl:h-75 3xl:h-85 4xl:h-95"
      >
        <iframe
          v-if="project.itchCode"
          class="scale-70 p-2 xl:scale-85 2xl:scale-100"
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
        class="flex h-30 w-full items-center justify-center bg-amaranth p-4 xs:p-6 sm:p-8 md:h-35 md:p-10 lg:h-60 lg:p-8 xl:h-65 2xl:h-75 3xl:h-85 4xl:h-95"
        :class="`${
          hasImages ? 'lg:rounded-bl-[20px]' : 'rounded-b-[20px] lg:col-span-2'
        }`"
      >
        <span
          class="w-full text-justify text-shadow-1 text-shadow-violet 2xl:text-shadow-2"
          :class="`${
            isMobile
              ? 'text-[8px] xs:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] 4xl:text-[20px]'
              : 'text-[8px] xs:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] 4xl:text-[26px]'
          }`"
        >
          {{ project.description }}
        </span>
      </div>

      <!--* GALLERY -->
      <viewer
        v-if="hasImages"
        class="relative size-full h-30 cursor-pointer overflow-hidden bg-amaranth max-lg:rounded-b-[20px] md:h-35 lg:h-60 lg:rounded-br-[20px] xl:h-65 2xl:h-75 3xl:h-85 4xl:h-95"
        :class="`${isMobile ? 'lg:col-span-2' : 'lg:col-span-1'}`"
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
            class="absolute -top-full -right-full -bottom-full -left-full m-auto min-h-full min-w-full object-cover"
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
import { isMobile } from "mobile-device-detect";

const props = defineProps<{ project: Project; images: Image[] }>();

const hasItchOrYoutube = computed(
  () => !!props.project.itchCode || !!props.project.youtubeCode,
);
const hasImages = computed(() => props.images.length > 0);
</script>
