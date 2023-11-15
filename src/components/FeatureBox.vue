<template>
  <div
    class="flex h-72 w-72 flex-col items-center justify-center rounded-3xl bg-red-500 p-4 text-center"
  >
    <div class="py-1 text-2xl font-bold">{{ title }}</div>
    <div class="py-3">
      <Icon :icon="icon" class="rounded-full bg-blue-400 px-5 py-2.5" />
    </div>
    <div class="py-1">
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "./Icon.vue";
defineProps<{
  title: string;
  icon: string;
  description: string;
}>();
</script>
