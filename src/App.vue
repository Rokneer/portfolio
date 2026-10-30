<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>
