<template>
  <a
    class="motion-rotate-in-1 hover:motion-rotate-out-1"
    :href="href"
    target="_blank"
    rel="noreferrer"
  >
    <div
      class="flex cursor-pointer stroke-white stroke-16 drop-shadow-violet drop-shadow-1 transition ease-in-out stroke-behind *:size-12.5 hover:drop-shadow-2 sm:drop-shadow-2 sm:*:size-15 sm:hover:drop-shadow-4 md:*:size-20 lg:drop-shadow-3 lg:*:size-25 lg:hover:drop-shadow-6 xl:drop-shadow-5 xl:*:size-40 xl:hover:drop-shadow-8 2xl:*:size-55"
    >
      <slot></slot>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{ href: string }>();
</script>
