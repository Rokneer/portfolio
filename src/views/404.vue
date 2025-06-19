<template>
  <div class="py-10 text-center">
    <div
      class="text-shadow-6 text-shadow-crimson py-4 text-[250px] font-extrabold"
    >
      ¡404!
    </div>
    <div class="flex flex-col gap-y-6 py-3 text-6xl">
      <div class="text-shadow-5 text-shadow-violet font-bold">
        Whoops! Couldn't find the page you were looking for.
      </div>
      <div class="text-shadow-5 text-shadow-violet font-bold">
        How about we go back
        <router-link
          class="hover:text-shadow-5 text-shadow-crimson inline-block duration-200 ease-in-out hover:text-8xl hover:font-semibold hover:tracking-[0.015em]"
          :to="{ name: 'projects' }"
        >
          home </router-link
        >? :)
      </div>
    </div>
  </div>
</template>
