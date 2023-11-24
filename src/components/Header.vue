<template>
  <header class="sticky top-0 z-40">
    <div
      class="animate__animated animate__fadeInDown flex w-full flex-row flex-wrap items-center justify-between bg-tertiary-200 px-2 py-3 shadow-sm shadow-tertiary-400 sm:px-4 md:px-6 lg:px-12 xl:px-24"
    >
      <router-link
        class="flex cursor-pointer justify-start sm:pr-2"
        :to="{ name: 'home' }"
      >
        <img
          class="h-8 w-full text-center text-white transition duration-150 hover:scale-105 sm:h-10"
          :src="logoImage"
          alt="Tomato Logo"
        />
      </router-link>
      <div
        class="flex justify-end text-xs font-semibold sm:text-sm md:text-base"
      >
        <router-link :to="{ name: 'home' }">
          <Button
            class="mx-0.5 rounded-2xl px-2 py-1 uppercase sm:mx-1 sm:px-4 md:px-6 lg:mx-2 lg:px-10 xl:px-16"
          >
            Home
          </Button>
        </router-link>
        <span class="group flex w-full flex-col items-center justify-center">
          <router-link :to="{ name: 'projects' }">
            <Button
              class="mx-0.5 rounded-2xl px-2 py-1 uppercase sm:mx-1 sm:px-4 md:px-6 lg:mx-2 lg:px-10 xl:px-16"
            >
              Portfolio
            </Button>
          </router-link>
          <span
            class="animate__animated animate__fadeIn invisible absolute top-10 z-50 pt-2 group-hover:visible sm:top-12"
          >
            <ul
              class="flex flex-col justify-center rounded-b-xl bg-gradient-to-t from-tertiary-400 from-85% to-tertiary-200 to-95% px-2 py-1 sm:px-3 sm:py-2"
            >
              <li
                v-for="(project, index) in projects"
                :key="index"
                class="py-1.5"
              >
                <router-link
                  :to="{
                    name: `${project.title}`,
                  }"
                >
                  <Button
                    class="w-20 rounded-xl p-0.5 text-[9.6px] uppercase sm:w-28 sm:rounded-2xl sm:py-1 sm:text-xs md:w-32 md:text-sm lg:w-48 xl:text-base"
                  >
                    {{ project.title.replace(/-/g, " ") }}
                  </Button>
                </router-link>
              </li>
            </ul>
          </span>
        </span>
        <router-link :to="{ name: 'about' }">
          <Button
            class="mx-0.5 rounded-2xl px-2 py-1 uppercase sm:mx-1 sm:px-4 md:px-6 lg:mx-2 lg:px-10 xl:px-16"
          >
            About
          </Button>
        </router-link>
        <router-link :to="{ name: 'contact' }">
          <Button
            class="mx-0.5 rounded-2xl px-2 py-1 uppercase sm:mx-1 sm:px-4 md:px-6 lg:mx-2 lg:px-10 xl:px-16"
          >
            Contact
          </Button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { onWindowResize, projects } from "..";
import Button from "./Button.vue";

const logoImage = computed(() => {
  if (onWindowResize().width.value >= 640) return "/tomato-logo-horizontal.png";
  return "/android-chrome-192x192.png";
});
</script>
