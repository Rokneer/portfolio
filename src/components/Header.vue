<template>
  <header class="sticky top-0 z-40">
    <div
      class="animate__animated animate__fadeInDown flex w-full flex-row flex-wrap items-center justify-between bg-tertiary-200 px-4 py-3 shadow-sm shadow-tertiary-400 md:px-6 lg:px-12 xl:px-24"
    >
      <router-link
        class="flex cursor-pointer justify-start pr-2"
        :to="{ name: 'home' }"
      >
        <img
          class="h-10 w-full text-center text-white transition duration-150 hover:scale-105"
          src="/tomato-logo-horizontal.png"
          alt="Tomato Logo"
        />
      </router-link>
      <div class="flex justify-end text-sm font-semibold md:text-base">
        <router-link :to="{ name: 'home' }">
          <Button
            class="mx-1 rounded-2xl px-4 py-1 uppercase md:px-6 lg:mx-2 lg:px-10 xl:px-16"
          >
            Home
          </Button>
        </router-link>
        <span class="group flex w-full flex-col items-center justify-center">
          <router-link :to="{ name: 'projects' }">
            <Button
              class="mx-1 rounded-2xl px-4 py-1 uppercase md:px-6 lg:mx-2 lg:px-10 xl:px-16"
            >
              Portfolio
            </Button>
          </router-link>
          <span
            class="animate__animated animate__fadeIn invisible absolute top-12 z-50 pt-2 group-hover:visible"
          >
            <ul
              class="flex flex-col justify-center rounded-b-xl bg-gradient-to-t from-tertiary-400 from-85% to-tertiary-200 to-95% px-3 py-2"
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
                    class="w-28 rounded-2xl py-1 text-xs uppercase md:w-32 md:text-sm lg:w-48 xl:text-base"
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
            class="mx-1 rounded-2xl px-4 py-1 uppercase md:px-6 lg:mx-2 lg:px-10 xl:px-16"
          >
            About
          </Button>
        </router-link>
        <router-link :to="{ name: 'contact' }">
          <Button
            class="mx-1 rounded-2xl px-4 py-1 uppercase md:px-6 lg:mx-2 lg:px-10 xl:px-16"
          >
            Contact
          </Button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { projects } from "..";
import Button from "./Button.vue";
</script>
