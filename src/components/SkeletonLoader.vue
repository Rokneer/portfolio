<template>
  <div class="relative overflow-hidden">
    <div
      class="absolute bottom-0 left-0 right-0 top-0 animate-shimmer"
      :style="shimmerStyle"
    />
    <slot />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

// Properties
const props = withDefaults(
  defineProps<{
    shimmerColor?: string;
    disabled?: boolean;
  }>(),
  {
    shimmerColor: "#ffffff",
  },
);

// Computed
const shimmerStyle = computed(() => {
  if (props.disabled) return "";
  const rgb = isHexColor(props.shimmerColor)
    ? hexToRgb(props.shimmerColor)
    : "#ffffff";
  return {
    backgroundImage: `linear-gradient(90deg, rgba(${rgb}, 0) 0%, rgba(${rgb}, 0.2) 20%, rgba(${rgb}, 0.5) 60%, rgba(${rgb}, 0))`,
  };
});

// Functions
function isHexColor(hexColor: string) {
  const hex = hexColor.replace("#", "");
  return (
    typeof hexColor === "string" &&
    hexColor.startsWith("#") &&
    hex.length === 6 &&
    !isNaN(Number("0x" + hex))
  );
}
function hexToRgb(hex: string) {
  return `${hex.match(/\w\w/g)?.map((x) => +`0x${x}`)}`;
}
</script>
