<template>
  <div class="flex items-stretch">
    <div
      class="animate__animated animate__fadeIn flex flex-col rounded-3xl border-2 border-secondary-200 bg-secondary-100/20 md:border-3"
    >
      <div
        class="flex h-full flex-col justify-evenly px-3 py-2 xs:px-6 sm:py-3 xl:px-8"
      >
        <div
          class="py-1 text-center text-2xl font-extrabold uppercase xs:py-3 xs:text-4xl md:text-5xl"
        >
          {{ project.title.replace(/-/g, " ") }}
        </div>
        <div class="py-1 text-sm xs:py-2 sm:py-3 sm:text-lg md:text-[1.6rem]">
          <project-role :project="project" />
          <div class="flex flex-row items-center justify-center">
            <img
              class="mr-3 w-7 md:mr-4 md:w-11"
              :src="`/common/${project.engine}.png`"
              :alt="project.engine"
              width="192"
              height="192"
            />
            <div class="py-1.5 leading-snug md:py-3">
              {{ project.shortDescription }}
            </div>
          </div>
          <div>
            <div class="font-semibold">What I worked on:</div>
            <li
              v-for="(bulletPoint, index) in project.bulletPoints"
              :key="index"
              class="list-inside py-1 md:py-1.5"
            >
              {{ bulletPoint }}
            </li>
          </div>
        </div>
        <div
          class="flex w-full flex-row items-center justify-between py-2 text-xs xs:py-3 sm:text-base xl:text-lg 2xl:text-xl"
        >
          <router-link :to="{ name: `${project.title}` }">
            <basic-button class="px-2.5 py-1 md:px-4 md:py-2" block>
              Read more
            </basic-button>
          </router-link>
          <div class="flex flex-row items-center gap-x-2 xl:gap-x-4">
            <img
              class="w-6 sm:hidden"
              src="/common/itchio-logo-textless-white.png"
              alt="itch.io"
            />
            <img
              class="hidden sm:flex sm:w-32"
              src="/common/itchio-logo-white.png"
              alt="itch.io"
            />
            <a
              :href="`https://rokneer.itch.io/${project.title}`"
              target="_blank"
              rel="noreferrer"
            >
              <basic-button class="px-2.5 py-1 md:px-4 md:py-2" block>
                {{ buttonVerb }} on
                <span class="font-semibold md:text-lg">
                  {{ buttonPage }}
                </span>
              </basic-button>
            </a>
          </div>
        </div>
      </div>
      <router-link
        class="flex items-center rounded-b-3xl border-t-2 border-secondary-200 md:border-t-3"
        :to="{ name: `${project.title}` }"
      >
        <img
          class="rounded-b-[1.32rem]"
          :src="`/portfolio/${project.title}/${project.title}-horizontal.png`"
          :alt="`${project.title.replace(/-/g, ' ')}-horizontal-image`"
          width="852"
          height="480"
        />
      </router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { Project } from "../types";
import { ProjectRole, BasicButton } from "./../components";

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
</script>
