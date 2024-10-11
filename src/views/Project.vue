<template>
  <div class="flex flex-col items-center text-center 2xl:mx-64">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown w-60 object-scale-down p-4 xs:w-72 md:w-80 lg:max-w-sm"
      :src="getLogoImage(project.title)"
      :alt="`${formatTitle(project.title)} Logo`"
      width="576"
      height="563"
    />
    <!-- LONG DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown w-10/12 py-4 sm:py-6 lg:text-2xl"
    >
      {{ project.longDescription }}
    </div>
    <!-- FEATURES -->
    <div
      v-if="features"
      class="animate__animated animate__fadeInDown flex w-10/12 flex-col items-center justify-center gap-y-4 py-4 sm:gap-x-4 sm:py-6 md:flex-row md:items-stretch md:gap-x-8 lg:gap-x-16"
    >
      <feature-box
        v-for="(feature, index) in features"
        :key="index"
        :title="feature.title"
        :icon="feature.icon"
        :description="feature.description"
      />
    </div>

    <!-- GAME -->
    <div
      v-if="itchCode"
      class="animate__animated animate__fadeInDown flex flex-col items-center justify-center gap-y-6 py-5 xs:text-xl sm:text-2xl md:gap-x-8 lg:text-3xl"
    >
      <iframe
        class="w-[220px] rounded-xl xs:w-[424px] sm:w-[554px] md:w-[654px] lg:w-[910px]"
        :src="`https://itch.io/embed/${itchCode}?bg_color=A20058&amp;fg_color=ffffff&amp;link_color=580585&amp;border_color=A20058`"
        width="554"
        height="169"
      >
        <a
          :href="`https://rokneer.itch.io/${project.title}`"
          target="_blank"
          rel="noreferrer"
        >
          {{ formatTitle(project.title) }} by Rokneer
        </a>
      </iframe>
      <slot name="extras" />
    </div>
    <!-- TRAILER -->
    <div v-if="youtubeCode" class="flex w-full justify-center py-3 sm:py-6">
      <embed-video
        :id="youtubeCode"
        :title="`${formatTitle(project.title)} Trailer`"
      />
    </div>
    <!-- IMAGES -->
    <div v-if="images" class="py-3 sm:py-6">
      <div
        class="animate__animated animate__fadeInDown mb-4 bg-gradient-to-l from-tertiary-500 from-25% via-tertiary-200 to-tertiary-500 to-75% p-2 text-3xl lg:mb-6 lg:text-4xl"
      >
        Gallery
      </div>
      <image-viewer :images="images" :orientation="orientation" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project, Image, Orientation, Feature } from "./../types";
import { FeatureBox, ImageViewer, EmbedVideo } from "./../components";
import { formatTitle } from "../utils";

// Properties
withDefaults(
  defineProps<{
    project: Project;
    features?: Feature[];
    itchCode?: string;
    youtubeCode?: string;
    images?: Image[] | null;
    orientation?: Orientation;
  }>(),
  {
    images: null,
    orientation: "horizontal",
  },
);

// Functions
function getLogoImage(projectTitle: string) {
  return `./${projectTitle}/${projectTitle}-logo.png`;
}
</script>
