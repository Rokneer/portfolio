<template>
  <div class="flex flex-row items-center">
    <div v-if="project.page !== 'youtube'">
      <img
        class="mx-2 w-6 sm:hidden xl:mx-4"
        src="/common/itchio-logo-textless-white.png"
        alt="itch.io"
      />
      <img
        class="mx-2 hidden sm:flex sm:w-32 xl:mx-4"
        src="/common/itchio-logo-white.png"
        alt="itch.io"
      />
    </div>
    <a :href="buttonLink" target="_blank" rel="noreferrer">
      <basic-button class="px-2.5 py-1 md:px-4 md:py-2" block>
        {{ buttonVerb }} on
        <span class="font-semibold md:text-lg">
          {{ buttonPage }}
        </span>
      </basic-button>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Project } from "../types";
import { BasicButton } from "./../components";

// Properties
const props = defineProps<{ project: Project }>();

// Computed
const buttonVerb = computed(() => {
  switch (props.project.page) {
    case "itch-play":
      return "Play";
    case "itch-download":
      return "Download";
    case "itch-learn":
      return "Learn";
    case "youtube":
      return "Watch";
    default:
      return "";
  }
});
const buttonPage = computed(() => {
  switch (props.project.page) {
    case "itch-play":
    case "itch-download":
    case "itch-learn":
      return "itch.io";
    case "youtube":
      return "YouTube";
    default:
      return "";
  }
});
const buttonLink = computed(() => {
  switch (props.project.page) {
    case "itch-play":
    case "itch-download":
    case "itch-learn":
      return `https://rokneer.itch.io/${props.project.title}`;
    case "youtube":
      return `https://www.youtube.com/watch?v=${props.project.youtubeCode}`;
    default:
      return "";
  }
});
</script>
