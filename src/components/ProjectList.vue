<template>
  <div class="py-3 sm:py-6">
    <div
      class="animate__animated animate__fadeInUp flex justify-center bg-gradient-to-l from-tertiary-500 from-20% via-tertiary-200 to-tertiary-500 to-80% py-3 text-2xl font-black uppercase xs:text-3xl sm:text-4xl md:text-5xl"
    >
      <span v-if="projectType === 'games'">Games</span>
      <span v-if="projectType === 'others'">Others</span>
    </div>
  </div>
  <div
    v-for="project in projects"
    :key="project.title"
    class="py-3 sm:py-8 md:px-12 lg:px-14 lg:py-4"
  >
    <div
      class="flex flex-row rounded-3xl border-3 border-secondary-200 bg-secondary-100/20"
    >
      <div
        class="flex w-7/12 flex-col justify-evenly px-3 py-4 xs:px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div
          class="py-1 font-extrabold uppercase xs:py-3 xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
        >
          {{ project.title.replace(/-/g, " ") }}
        </div>
        <div
          class="py-1 text-xs xs:py-3 xs:text-sm sm:text-lg md:text-[1.6rem]"
        >
          <project-role class="py-2 font-semibold" :project="project" />
          <div class="py-4 leading-relaxed">{{ project.shortDescription }}</div>
          <div>
            <div class="font-semibold">What I worked on:</div>
            <li
              v-for="(bulletPoint, index) in project.bulletPoints"
              :key="index"
              class="list-inside py-1.5"
            >
              {{ bulletPoint }}
            </li>
          </div>
        </div>
        <div class="flex w-full flex-row justify-between py-1 xs:py-3">
          <router-link :to="{ name: `${project.title}` }">
            <basic-button class="px-4 py-2 text-xl" block>
              Read more
            </basic-button>
          </router-link>
          <div class="flex flex-row items-center gap-x-4">
            <img src="" alt="itch.io" />
            <basic-button class="px-4 py-2 text-xl" block>
              Download on
              <span class="text-[1.35rem] font-semibold"> itch.io </span>
            </basic-button>
          </div>
        </div>
      </div>
      <router-link
        class="flex w-5/12 items-center border-l-3 border-secondary-200"
        :to="{ name: `${project.title}` }"
      >
        <img
          class="rounded-r-3xl object-scale-down"
          :src="`/portfolio/${project.title}/${project.title}-horizontal-2048x.png`"
          :srcset="`
              /portfolio/${project.title}/${project.title}-horizontal-2048x.png 2048w,
              /portfolio/${project.title}/${project.title}-horizontal-1920x.png 1920w,
              /portfolio/${project.title}/${project.title}-horizontal-1580x.png 1580w,
              /portfolio/${project.title}/${project.title}-horizontal-1130x.png 1130w,
              /portfolio/${project.title}/${project.title}-horizontal-256x.png 256w
            `"
          sizes="
              (min-width: 2800px) calc(50vw - 200px),
              (min-width: 2680px) calc(36vw - 150px),
              (min-width: 1040px) calc(50vw - 200px),
              (min-width: 1000px) calc(50vw - 88px),
              calc(45.77vw - 7px)
            "
          :alt="`${project.title.replace(/-/g, ' ')}-horizontal-image`"
          width="2048"
          height="1152"
        />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from "../types";
import { ProjectRole, BasicButton } from "./../components";

// Properties
defineProps<{
  projectType: "games" | "others";
  projects: Project[];
}>();
</script>
