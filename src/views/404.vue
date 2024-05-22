<template>
  <div class="py-4 text-center">
    <div
      class="animate__animated animate__fadeInDown py-4 text-7xl font-extrabold sm:py-8 sm:text-8xl lg:text-9xl"
    >
      ¡404!
    </div>
    <div
      class="animate__animated animate__fadeInDown flex flex-col gap-y-6 py-3 text-xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
    >
      <div>Woops! Couldn't find the page you were looking for.</div>
      <div>
        How about we go back
        <router-link
          class="text-primary-100 hover:shadow-primary-100 hover:text-shadow"
          :to="{ name: 'projects' }"
        >
          home?
        </router-link>
        :)
      </div>
    </div>
  </div>
</template>
