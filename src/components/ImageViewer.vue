<template>
  <div>
    <viewer
      class="flex flex-row flex-wrap"
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
      <span
        v-if="orientation === 'horizontal'"
        class="flex flex-wrap justify-center"
      >
        <img
          v-for="image in images"
          :key="image.src"
          :src="`${image.src}-1380x.avif`"
          :alt="image.alt"
          :srcset="`
            ${image}-487x.avif 487w,
            ${image}-974x.avif 974w,
            ${image}-1380x.avif 1380w,
          `"
          sizes="
            (min-width: 1040px) 487px,
            (min-width: 780px) 216px,
            calc(93.04vw - 19px)
          "
          class="md:w-54 m-2 cursor-pointer rounded-lg border-4 border-secondary-200 bg-secondary-200 transition content-visibility-auto hover:scale-105 xs:m-2 md:m-3 lg:m-4 lg:w-[448px]"
          width="1380"
          height="776"
          loading="lazy"
        />
      </span>
      <span
        v-if="orientation === 'vertical'"
        class="flex flex-wrap justify-center"
      >
        <img
          v-for="image in images"
          :key="image.src"
          :src="`${image.src}-704x.avif`"
          :alt="image.alt"
          :srcset="`
            ${image}-704x.avif 704w,
            ${image}-464x.avif 464w,
            ${image}-272x.avif 272w,
          `"
          sizes="
            (min-width: 1280px) 352px,
            (min-width: 1040px) 232px,
            (min-width: 480px) 136px, 120px
          "
          class="m-2 w-32 cursor-pointer rounded-lg border-4 border-secondary-200 bg-secondary-200 transition content-visibility-auto hover:scale-105 xs:m-2 xs:w-36 lg:m-4 lg:w-60 xl:w-[360px]"
          width="740"
          height="1252"
          loading="lazy"
        />
      </span>
    </viewer>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: { src: string; alt: string }[];
  orientation: "horizontal" | "vertical";
}>();
</script>
