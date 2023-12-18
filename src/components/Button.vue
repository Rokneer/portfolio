<template>
  <button
    class="transition hover:scale-105 disabled:hover:scale-100"
    :class="{
      'rounded-full bg-primary-200 shadow-md hover:bg-secondary-300':
        type === 'main',
      'border border-white shadow-md disabled:border-gray-400 disabled:text-gray-400':
        type === 'plain',
      'text-current': type === 'text',
      'rounded-xl': block,
    }"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: ButtonStyles;
    disabled?: boolean;
    block?: boolean;
  }>(),
  {
    type: "main",
  },
);

type ButtonStyles = "main" | "plain" | "text";
</script>
