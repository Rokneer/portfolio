<template>
  <div class="flex flex-col items-center text-center">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown w-60 object-scale-down p-4 content-visibility-auto xs:w-72 md:w-80 lg:max-w-sm"
      :src="`./${project.title}/${project.title}-logo-576x.png`"
      :srcset="`
        ./${project.title}/${project.title}-logo-576x.png 576w,
        ./${project.title}/${project.title}-logo-288x.png 288w
      `"
      sizes="(min-width: 780px) 288px, (min-width: 480px) 256px, 208px"
      :alt="`${project.title}-logo`"
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
      class="animate__animated animate__fadeInDown flex w-10/12 flex-col items-center justify-center gap-y-4 py-4 content-visibility-auto sm:gap-x-4 sm:py-6 md:flex-row md:items-stretch md:gap-x-8 lg:gap-x-16"
    >
      <feature-box
        v-for="(feature, index) in features"
        :key="index"
        :title="feature.title"
        :icon="feature.icon"
        :description="feature.description"
      />
    </div>
    <!-- PROJECT ROLE -->
    <div
      class="animate__animated animate__fadeInDown flex w-10/12 flex-row items-center justify-center pb-4 pt-6 lg:text-xl"
    >
      <img
        class="mr-4 w-10 content-visibility-auto lg:w-12"
        src="/android-chrome-192x192.png"
        alt="Tomate icon"
        width="192"
        height="192"
        loading="lazy"
      />
      <div class="text-left">
        {{ project.role }}
      </div>
    </div>
    <!-- GAME -->
    <div
      v-if="itchCode"
      class="animate__animated animate__fadeInDown flex flex-col items-center justify-center gap-y-6 py-4 xs:text-xl sm:text-2xl md:gap-x-8 lg:text-3xl"
    >
      <iframe
        frameborder="0"
        :src="`https://itch.io/embed/${itchCode}?bg_color=A20058&amp;fg_color=ffffff&amp;link_color=580585&amp;border_color=A20058`"
        width="554"
        height="169"
      >
        <a :href="`https://rokneer.itch.io/${project.title}`">
          {{ project.title }} by Rokneer
        </a>
      </iframe>
      <slot name="extras"></slot>
    </div>
    <!-- TRAILER -->
    <div v-if="youtubeCode" class="flex w-full justify-center py-3 sm:py-6">
      <embed-video :id="youtubeCode" :title="`${project.title} Trailer`" />
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
import FeatureBox from "./../components/FeatureBox.vue";
import ImageViewer from "./../components/ImageViewer.vue";
import EmbedVideo from "./../components/EmbedVideo.vue";

// Interfaces

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
</script>
