<template>
  <div>
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
        class="flex flex-col rounded-3xl border-2 border-secondary-200 bg-secondary-100/20 md:border-3 lg:flex-row"
      >
        <div
          class="flex flex-col justify-evenly px-3 py-2 xs:px-6 sm:py-4 md:px-8 lg:w-7/12 lg:px-10"
        >
          <div
            class="py-1 text-center text-2xl font-extrabold uppercase xs:py-3 xs:text-4xl md:text-5xl"
          >
            {{ project.title.replace(/-/g, " ") }}
          </div>
          <div class="py-1 text-sm xs:py-2 sm:py-3 sm:text-lg md:text-[1.6rem]">
            <project-role :project="project" />
            <div class="py-1.5 leading-relaxed md:py-4">
              {{ project.shortDescription }}
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
            class="flex w-full flex-row items-center justify-between py-2 text-xs xs:py-3 sm:text-base xl:text-xl 2xl:text-2xl"
          >
            <router-link :to="{ name: `${project.title}` }">
              <basic-button class="px-2.5 py-1 md:px-4 md:py-2" block>
                Read more
              </basic-button>
            </router-link>
            <div class="flex flex-row items-center gap-x-2 md:gap-x-4">
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
              <basic-button class="px-2.5 py-1 md:px-4 md:py-2" block>
                Download on
                <span class="font-semibold md:text-[1.35rem]"> itch.io </span>
              </basic-button>
            </div>
          </div>
        </div>
        <router-link
          class="flex items-center rounded-b-3xl border-t-2 border-secondary-200 bg-tertiary-400 md:border-t-3 lg:w-5/12 lg:rounded-l-none lg:rounded-r-3xl lg:border-l-3 lg:border-t-0"
          :to="{ name: `${project.title}` }"
        >
          <img
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
