<template>
  <span
    class="rounded-full transition-all"
    :class="[
      `${iconStateStyle}`,
      `${outlined ? 'material-icons-outlined' : 'material-icons'}`,
    ]"
  >
    <i :class="`mdi ${icon}`" />
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

// Properties
const props = defineProps<{
  icon: string;
  hide?: boolean;
  clickable?: boolean;
  button?: boolean;
  outlined?: boolean;
  disabled?: boolean;
}>();

const iconStateStyle = computed(() => {
  if (props.disabled) return "pointer-events-none";
  if (props.clickable) {
    if (props.button) return "cursor-pointer transition hover:scale-90";
    return "cursor-pointer";
  }
  return "";
});
</script>
