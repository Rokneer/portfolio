<template>
  <a
    class="icon-motion motion-rotate-in-1 hover:motion-rotate-out-1"
    :href="href"
    target="_blank"
    rel="noreferrer"
  >
    <div class="icon">
      <slot></slot>
    </div>
  </a>
</template>

<style lang="css" scoped>
/* DEFAULT */
.icon-motion {
}
.icon-motion:hover {
}
.icon {
  width: 3.125rem;
  height: 3.125rem;
  display: flex;
  cursor: pointer;
  stroke: var(--color-white);
  stroke-width: 16;
  paint-order: stroke fill;
  filter: drop-shadow(0.063rem 0.063rem 0 var(--color-violet));
  transition: all 200ms;
}
.icon:hover {
  filter: drop-shadow(0.125rem 0.125rem 0 var(--color-violet));
}
/* SM - 640px*/
@media (min-width: 40rem) {
  .icon {
    width: 3.75rem;
    height: 3.75rem;
    filter: drop-shadow(0.125rem 0.125rem 0 var(--color-violet));
  }
  .icon:hover {
    filter: drop-shadow(0.25rem 0.25rem 0 var(--color-violet));
  }
}
/* MD - 768px*/
@media (min-width: 48rem) {
  .icon {
    width: 5rem;
    height: 5rem;
  }
}
/* LG - 1024px*/
@media (min-width: 64rem) {
  .icon {
    width: 6.25rem;
    height: 6.25rem;
    filter: drop-shadow(0.188rem 0.188rem 0 var(--color-violet));
  }
  .icon:hover {
    filter: drop-shadow(0.375rem 0.375rem 0 var(--color-violet));
  }
}
/* XL - 1280px*/
@media (min-width: 80rem) {
  .icon {
    width: 10rem;
    height: 10rem;
    filter: drop-shadow(0.313rem 0.313rem 0 var(--color-violet));
  }
  .icon:hover {
    filter: drop-shadow(0.5rem 0.5rem 0 var(--color-violet));
  }
}
/* 2XL - 1536px*/
@media (min-width: 96rem) {
  .icon {
    width: 13.75rem;
    height: 13.75rem;
  }
}
/* 3XL - 191.25rem*/
@media (min-width: 120rem) {
  .icon {
    width: 16rem;
    height: 16rem;
    filter: drop-shadow(0.375rem 0.375rem 0 var(--color-violet));
  }
  .icon:hover {
    filter: drop-shadow(0.625rem 0.625rem 0 var(--color-violet));
  }
}
/* 4XL - 2560px*/
@media (min-width: 160rem) {
  .icon {
    width: 23rem;
    height: 23rem;
    filter: drop-shadow(0.5rem 0.5rem 0 var(--color-violet));
  }
}
/*  5XL - 3840px*/
@media (min-width: 240rem) {
  .icon {
    width: 28rem;
    height: 28rem;
    filter: drop-shadow(0.5rem 0.5rem 0 var(--color-violet));
  }
  .icon:hover {
    filter: drop-shadow(0.75rem 0.75rem 0 var(--color-violet));
  }
}
</style>
<script setup lang="ts">
defineProps<{ href: string }>();
</script>
