<template>
  <a
    class="hover:motion-rotate-out-1 motion-rotate-in-1"
    :href="href"
    target="_blank"
    rel="noreferrer"
  >
    <div
      class="@7xl:drop-shadow-4 @7xl:hover:drop-shadow-8 @5xl:drop-shadow-4 @5xl:hover:drop-shadow-6 @lg:drop-shadow-2 @lg:hover:drop-shadow-4 drop-shadow-1 hover:drop-shadow-1.5 drop-shadow-violet stroke-behind stroke-25 @5xl:*:size-[180px] @xl:*:size-[120px] @lg:*:size-[80px] @xs:*:size-[40px] flex cursor-pointer justify-center stroke-white transition ease-in-out *:size-[30px]"
    >
      <slot></slot>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{ href: string }>();
</script>
