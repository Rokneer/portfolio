<template>
  <div class="py-4 text-center text-6xl">
    <div
      class="animate__animated animate__fadeInDown py-6 text-9xl font-extrabold"
    >
      ¡404!
    </div>
    <div class="animate__animated animate__fadeInDown py-3">
      Woops! Couldnt find the page you were looking for.
    </div>
    <div class="animate__animated animate__fadeInDown py-3">
      How about we go back
      <router-link class="text-primary-100" :to="{ name: 'home' }">
        home?
      </router-link>
      :)
    </div>
  </div>
</template>
