<template>
  <a
    class="hover:motion-rotate-out-1 motion-rotate-in-1"
    :href="href"
    target="_blank"
    rel="noreferrer"
  >
    <div
      class="drop-shadow-1 sm:drop-shadow-2 lg:drop-shadow-3 2xl:drop-shadow-4 3xl:drop-shadow-5 hover:drop-shadow-2 sm:hover:drop-shadow-4 lg:hover:drop-shadow-6 2xl:hover:drop-shadow-8 3xl:hover:drop-shadow-10 xs:*:size-[50px] 3xl:*:size-[220px] 4xl:*:size-[250px] stroke-behind drop-shadow-violet stroke-25 flex cursor-pointer justify-center stroke-white transition ease-in-out *:size-[40px] sm:*:size-[60px] md:*:size-[70px] lg:*:size-[80px] xl:*:size-[120px] 2xl:*:size-[180px]"
    >
      <slot></slot>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{ href: string }>();
</script>
