<template>
  <button
    class="transition duration-150 hover:scale-105 disabled:hover:scale-100"
    :class="{
      'rounded-full bg-primary-200 text-white  shadow-md hover:bg-secondary-300':
        type === 'main',
      'border border-black text-black shadow-md disabled:border-gray-500 disabled:text-gray-500 dark:border-white dark:text-white disabled:dark:border-gray-400 disabled:dark:text-gray-400':
        type === 'plain',
      'text-current': type === 'text',
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
  }>(),
  {
    type: "main",
  },
);

type ButtonStyles = "main" | "plain" | "text";
</script>
