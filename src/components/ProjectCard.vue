<template>
  <div class="flex items-stretch">
    <div
      class="animate__animated animate__fadeIn flex flex-col rounded-3xl border-2 border-secondary-200 bg-secondary-100/20 md:border-3"
    >
      <div
        class="flex h-full flex-col justify-evenly px-6 py-2 sm:py-3 xl:px-8"
      >
        <div
          class="py-1 text-center text-2xl font-extrabold uppercase xs:py-3 xs:text-4xl md:text-5xl"
        >
          {{ formatTitle(project.title) }}
        </div>
        <div class="py-1 text-sm xs:py-2 sm:py-3 sm:text-lg md:text-[1.6rem]">
          <project-role :project="project" />
          <div class="flex flex-row items-center pb-4 pt-2">
            <img
              v-if="project.engine"
              class="mr-3 w-7 py-1.5 md:mr-4 md:w-11 md:py-3"
              :src="`./common/${project.engine}-logo.png`"
              :alt="project.engine"
              width="192"
              height="192"
            />
            <div class="leading-snug">
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
          <card-button :project="project" />
        </div>
      </div>
      <router-link
        class="flex items-center rounded-b-3xl border-t-2 border-secondary-200 md:border-t-3"
        :to="{ name: `${project.title}` }"
      >
        <img
          class="w-full rounded-b-[1.32rem] bg-cover"
          :src="imagesSizes['xs']"
          :srcset="
            [
              `${imagesSizes['sm']} ${Breakpoints['sm']}w`,
              ` ${imagesSizes['md']} ${Breakpoints['md']}w`,
              ` ${imagesSizes['lg']} ${Breakpoints['lg']}w`,
              ` ${imagesSizes['xl']} ${Breakpoints['xl']}w`,
              ` ${imagesSizes['2xl']} ${Breakpoints['2xl']}w`,
            ].toString()
          "
          :alt="`${formatTitle(project.title)} Cover Image`"
          height="480"
        />
      </router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Project, BreakpointType, Breakpoints } from "../types";
import { ProjectRole, BasicButton, CardButton } from "./../components";
import { formatTitle, formatImageSrcSet } from "../utils";

// Properties
const props = defineProps<{ project: Project }>();
const imagesSizes = formatImageSrcSet(props.project.title, getCoverImage);

// Functions
function getCoverImage(projectTitle: string, size: BreakpointType) {
  return `/portfolio/${projectTitle}/${projectTitle}-cover-${size}.png`;
}
</script>
