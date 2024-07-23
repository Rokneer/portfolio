<template>
  <div class="flex flex-col items-center justify-between">
    <div class="pb-4 md:pb-8">{{ title }}</div>
    <a
      class="cursor-pointer transition hover:scale-110"
      :href="link"
      target="_blank"
      rel="noreferrer"
    >
      <img :src="image" :alt="title" width="256" height="256" @click="action" />
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  image: string;
  link?: string;
  action?: () => void;
}>();
</script>
