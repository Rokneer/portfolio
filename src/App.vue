<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <tomato-header />
      <transition name="fade">
        <component
          :is="Component"
          :key="route.path"
        />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import TomatoHeader from "./components/TomatoHeader.vue";
</script>

<style lang="css" scoped>
.link {
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
}
.link:hover {
  font-size: 1.6rem;
  font-weight: 900;
}
@media (prefers-reduced-motion: reduce) {
  .link {
    transition: none;
  }
}
</style>
