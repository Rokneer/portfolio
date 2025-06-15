<template>
  <vue-final-modal
    overlay-transition="vfm-slide-up"
    content-transition="vfm-slide-down"
    class="flex items-center justify-center"
    overlay-class="absolute left-0 top-0 size-full bg-violet/70  backdrop-blur-sm"
  >
    <div
      class="bg-violet flex size-full h-[800px] w-[1400px] flex-col gap-y-4 rounded-[70px] border-4 p-10"
    >
      <div class="flex size-full flex-row gap-4">
        <div
          class="bg-amaranth flex w-full items-center justify-center rounded-tl-[50px]"
        >
          <img
            class="drop-shadow-5/violet max-h-70 p-2"
            :src="project.logo.src"
            :alt="project.logo.alt"
          />
        </div>
        <div
          v-if="project.gddUrl"
          class="bg-amaranth flex w-full items-center justify-center"
        >
          <a
            :href="project.gddUrl"
            target="_blank"
            rel="noreferrer"
            class="hover:scale-102 flex cursor-pointer flex-row items-end justify-center transition"
          >
            <ph-file-text
              :size="115"
              weight="fill"
              class="drop-shadow-4/violet"
            />
            <div class="text-shadow-4/violet text-[120px]/22 font-bold">
              GDD
            </div>
          </a>
        </div>
        <div
          v-if="project.itchCode || project.youtubeCode"
          class="bg-amaranth flex w-full items-center justify-center rounded-tr-[50px]"
        >
          <iframe
            v-if="project.itchCode"
            class="scale-100"
            :src="`https://itch.io/embed/${project.itchCode}?bg_color=981869&amp;border_color=981869&amp;fg_color=ffffff&amp;link_color=e42038`"
            width="90%"
          />
          <iframe
            v-else-if="project.youtubeCode"
            :src="`https://www.youtube.com/embed/${project.youtubeCode}`"
            class="size-full"
          />
        </div>
      </div>
      <div class="flex size-full flex-row gap-4">
        <div
          class="bg-amaranth text-shadow-2/violet flex items-center justify-center px-10 text-justify text-2xl"
          :class="`${images.length > 0 ? 'w-1/2 rounded-bl-[50px]' : 'w-full rounded-b-[50px]'}`"
        >
          {{ project.description }}
        </div>
        <div
          v-if="images.length > 0"
          class="bg-amaranth flex w-1/2 items-center justify-center rounded-br-[50px]"
        >
          <viewer
            class="relative size-full cursor-pointer overflow-hidden rounded-br-[50px]"
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
                class="absolute -bottom-[100%] -left-[100%] -right-[100%] -top-[100%] m-auto min-h-full min-w-full"
                :src="image.src"
                :alt="image.alt"
              />
            </div>
          </viewer>
        </div>
      </div>
    </div>
  </vue-final-modal>
</template>

<script setup lang="ts">
import type { Image, Project } from "@/types";
import { VueFinalModal } from "vue-final-modal";
import { component as Viewer } from "v-viewer";
import { PhFileText } from "@phosphor-icons/vue";

defineProps<{ project: Project; images: Image[] }>();
</script>
