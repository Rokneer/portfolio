<template>
  <div>
    <viewer
      class="flex flex-row flex-wrap justify-center"
      :images="images"
      :options="{
        toolbar: false,
        movable: false,
        zoomable: true,
        rotatable: false,
        scalable: false,
      }"
    >
      <img
        v-for="src in images"
        :key="src"
        :src="src"
        class="m-4 w-[460px] cursor-pointer rounded-lg border-4 border-secondary-300 text-center text-white transition duration-150 hover:scale-105"
      />
    </viewer>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: string[];
}>();
</script>
