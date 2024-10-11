<template>
  <div
    class="flex w-56 flex-col items-center rounded-3xl bg-secondary-200 p-2 text-center lg:w-72 lg:p-4"
  >
    <div class="py-2 text-2xl font-bold lg:text-3xl">
      {{ title }}
    </div>
    <div class="py-2 lg:py-5">
      <icon
        :icon="icon"
        class="rounded-full bg-tertiary-300 px-3 py-2.5 text-xl lg:px-4 lg:py-3 lg:text-3xl"
      />
    </div>
    <div class="my-auto py-2 text-sm lg:text-lg">
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "./Icon.vue";

// Properties
defineProps<{
  title: string;
  icon: string;
  description: string;
}>();
</script>
