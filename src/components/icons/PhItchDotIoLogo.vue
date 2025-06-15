<script lang="ts">
export default { name: "PhItchDotIoLogo" };
</script>

<script lang="ts" setup>
import { computed, inject, PropType } from "vue";

const props = defineProps({
  weight: {
    type: String as PropType<
      "thin" | "light" | "regular" | "bold" | "fill" | "duotone"
    >,
  },
  size: {
    type: [String, Number],
  },
  color: {
    type: String,
  },
  mirrored: {
    type: Boolean,
  },
});

const contextWeight = inject("weight", "regular");
const contextSize = inject("size", "1em");
const contextColor = inject("color", "currentColor");
const contextMirrored = inject("mirrored", false);

const displayWeight = computed(() => props.weight ?? contextWeight);
const displaySize = computed(() => props.size ?? contextSize);
const displayColor = computed(() => props.color ?? contextColor);
const displayMirrored = computed(() =>
  props.mirrored !== undefined
    ? props.mirrored
      ? "scale(-1, 1)"
      : undefined
    : contextMirrored
      ? "scale(-1, 1)"
      : undefined,
);
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    :width="displaySize"
    :height="displaySize"
    :fill="displayColor"
    :transform="displayMirrored"
    v-bind="$attrs"
  >
    <slot />

    <g v-if="displayWeight === 'bold'"></g>
    <g v-else-if="displayWeight === 'duotone'"></g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M51.1,35.6c-9.1,5.4-27,25.9-27.1,31.3v8.9c0,11.3,10.6,21.2,20.2,21.2s21.1-9.6,21.1-20.9c0,11.3,9.3,20.9,20.8,20.9s20.5-9.6,20.5-20.9c0,11.3,9.9,20.9,21.4,20.9h.2c11.5,0,21.4-9.6,21.4-20.9,0,11.3,9,20.9,20.5,20.9s20.8-9.6,20.8-20.9c0,11.3,9.6,20.9,21.1,20.9,9.6,0,20.1-9.9,20.1-21.2v-8.9c-.2-5.4-18-25.9-27.1-31.3-28.2-1-47.7-1.2-76.9-1.2-29.1,0-68.9.5-76.9,1.2ZM106.4,91.7c-1.1,1.9-2.5,3.7-4.1,5.2-4.3,4.2-10.3,6.9-16.9,6.9-6.3,0-12.4-2.5-16.9-6.9-1.6-1.5-2.8-3.2-3.9-5.1-1.1,1.9-2.6,3.6-4.2,5.1-4.5,4.4-10.6,6.9-16.9,6.9-.8,0-1.6-.2-2.3-.5-.9,9.6-1.3,18.9-1.5,25.6h0s0,10.2,0,10.2c.2,20.2-2,65.6,8.9,76.7,16.9,3.9,48.1,5.7,79.3,5.7,31.2,0,62.4-1.8,79.3-5.8,10.9-11.1,8.8-56.5,8.9-76.7v-10.1c0,0,0,0,0,0-.1-6.7-.5-15.9-1.5-25.6-.7.2-1.5.5-2.3.5-6.3,0-12.4-2.5-16.9-6.9-1.6-1.5-3.1-3.2-4.2-5.1-1.1,1.9-2.3,3.6-3.9,5.1-4.5,4.4-10.6,6.9-16.9,6.9-6.6,0-12.5-2.6-16.9-6.9-1.6-1.5-3-3.3-4.1-5.2-1.1,1.9-2.4,3.7-4,5.2-4.5,4.4-10.6,6.9-16.9,6.9h-1.4c-6.3,0-12.4-2.5-16.9-6.9-1.6-1.5-2.9-3.3-4-5.2h0ZM89,114.2h0c6.9,0,13,0,20.6,8.3,6-.6,12.2-.9,18.4-.9,6.2,0,12.5.3,18.4.9,7.6-8.3,13.7-8.2,20.6-8.3,3.3,0,16.3,0,25.3,25.4l9.7,34.9c7.2,26-2.3,26.6-14.2,26.6-17.6-.7-27.4-13.4-27.4-26.2-9.7,1.6-21.1,2.4-32.5,2.4-11.4,0-22.7-.8-32.5-2.4,0,12.8-9.7,25.6-27.4,26.2-11.9,0-21.4-.7-14.2-26.6l9.7-34.9c9.1-25.4,22.1-25.4,25.3-25.4h0ZM128,134.2s-18.5,17-21.9,23.1l12.1-.5v10.6c0,.5,4.9.3,9.7,0,4.9.2,9.7.4,9.7,0v-10.6l12.1.5c-3.3-6-21.9-23.1-21.9-23.1h0Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'"></g>
    <g v-else-if="displayWeight === 'regular'"></g>
    <g v-else-if="displayWeight === 'thin'"></g>
  </svg>
</template>
