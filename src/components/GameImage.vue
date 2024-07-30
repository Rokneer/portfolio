<template>
  <img
    :key="image.src"
    :src="imagesSizes['xs'].split(' ')[0]"
    :srcset="
      [
        `${imagesSizes['sm']} ${Breakpoints['sm']}w`,
        `${imagesSizes['md']} ${Breakpoints['md']}w`,
        `${imagesSizes['lg']} ${Breakpoints['lg']}w`,
        `${imagesSizes['xl']} ${Breakpoints['xl']}w`,
        `${imagesSizes['2xl']} ${Breakpoints['2xl']}w`,
      ].toString()
    "
    :alt="image.alt"
    class="m-2 cursor-pointer rounded-lg border-4 border-secondary-200 bg-secondary-200 transition hover:scale-105 md:m-3 lg:m-4"
    :width="width"
    :height="height"
  />
</template>

<script setup lang="ts">
import { type Image, type BreakpointType, Breakpoints } from "./../types";
import { formatImageSrcSet } from "../utils";

// Properties
const props = defineProps<{ image: Image; width: string; height: string }>();
const imagesSizes = formatImageSrcSet(props.image.src, formatImage);

// Functions
function formatImage(src: string, size: BreakpointType) {
  return `${src}-${size}.png`;
}
</script>
