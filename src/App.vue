<template>
  <div class="element">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="css" scoped>
.element {
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  background-color: var(--color-blue);
  color: var(--color-white);
  font-family: var(--font-overpass);
}
</style>
