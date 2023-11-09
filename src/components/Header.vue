<template>
  <header>
    <div
      class="flex w-full flex-row flex-wrap items-center justify-between bg-tertiary-300 px-4 py-3 md:px-6 lg:px-12 xl:px-24"
    >
      <div class="cursor-pointer justify-start pr-2">
        <router-link :to="{ name: 'Home' }">
          <img
            class="h-10 w-full text-center align-middle text-white transition duration-150 hover:scale-105"
            src="tomato-logo-horizontal.png"
            alt="Tomato Logo"
          />
        </router-link>
      </div>
      <div class="justify-end">
        <router-link :to="{ name: 'Home' }">
          <Button
            class="mx-1 rounded-2xl px-4 py-1 text-sm font-semibold uppercase md:px-6 md:text-base lg:mx-2 lg:px-10 xl:px-16"
          >
            Home
          </Button>
        </router-link>
        <router-link :to="{ name: 'Portfolio' }">
          <Button
            class="mx-1 rounded-2xl px-4 py-1 text-sm font-semibold uppercase md:px-6 md:text-base lg:mx-2 lg:px-10 xl:px-16"
          >
            Portfolio
          </Button>
        </router-link>
        <router-link :to="{ name: 'About' }">
          <Button
            class="mx-1 rounded-2xl px-4 py-1 text-sm font-semibold uppercase md:px-6 md:text-base lg:mx-2 lg:px-10 xl:px-16"
          >
            About
          </Button>
        </router-link>
        <router-link :to="{ name: 'Contact' }">
          <Button
            class="mx-1 rounded-2xl px-4 py-1 text-sm font-semibold uppercase md:px-6 md:text-base lg:mx-2 lg:px-10 xl:px-16"
          >
            Contact
          </Button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
</script>
