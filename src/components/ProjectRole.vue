<template>
  <div class="animate__animated flex flex-row items-center">
    <img
      class="mr-4 w-11"
      src="/android-chrome-192x192.png"
      alt="Tomate icon"
      width="192"
      height="192"
      loading="lazy"
    />
    <div class="text-left">
      {{ project.role }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Project } from "../types";

defineProps<{ project: Project }>();
</script>
