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
        class="m-2 cursor-pointer rounded-lg border-4 border-secondary-200 text-center text-white transition duration-150 hover:scale-105 xs:m-2 lg:m-4"
        :class="{
          'md:w-56 lg:w-[495px]': orientation === 'horizontal',
          'w-32 xs:w-36 lg:w-60 xl:w-[360px]': orientation === 'vertical',
        }"
      />
    </viewer>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: string[];
  orientation: "horizontal" | "vertical";
}>();
</script>
