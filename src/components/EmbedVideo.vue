<template>
  <div
    class="animate__animated animate__fadeIn w-11/12 rounded-md border-4 border-secondary-300 text-center text-white"
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
