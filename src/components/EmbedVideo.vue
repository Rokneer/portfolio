<template>
  <div
    class="animate__animated animate__fadeIn w-full rounded-md border-4 border-secondary-200 bg-secondary-200 md:w-[76%]"
  >
    <lite-you-tube-embed :id="id" :title="title" />
  </div>
</template>

<script setup lang="ts">
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";

// Properties
defineProps<{ id: string; title: string }>();
</script>
