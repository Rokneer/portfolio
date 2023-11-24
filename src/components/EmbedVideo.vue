<template>
  <div
    class="animate__animated animate__fadeIn w-full rounded-md border-4 border-secondary-200 text-center text-white md:w-11/12"
  >
    <LiteYouTubeEmbed :id="id" :title="title" />
  </div>
</template>

<script setup lang="ts">
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";

defineProps<{
  id: string;
  title: string;
}>();
</script>
