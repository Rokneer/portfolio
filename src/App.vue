<template>
  <Header />
  <div class="w-full overflow-hidden bg-tertiary-500 p-8">
    <router-view />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
