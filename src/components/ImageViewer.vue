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
        title: false,
      }"
    >
      <img
        v-for="image in images"
        :key="image"
        :src="image"
        class="m-2 w-[220px] cursor-pointer rounded-lg border-4 border-secondary-300 text-center text-white transition duration-150 hover:scale-105 lg:m-4 lg:w-[460px]"
      />
    </viewer>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  images: string[];
}>();
</script>
