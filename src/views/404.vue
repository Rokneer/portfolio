<template>
  <div class="text-center text-6xl">
    <div class="py-6 text-9xl font-extrabold">¡404!</div>
    <div class="py-3">Woops! Couldnt find the page you were looking for.</div>
    <div class="py-3">
      How about we go back
      <router-link class="text-primary-200" :to="{ name: 'Home' }">
        home?
      </router-link>
      :)
    </div>
  </div>
</template>

<script setup lang="ts"></script>
