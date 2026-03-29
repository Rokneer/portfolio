<template>
  <div
    class="flex h-screen flex-col items-center justify-center p-5 text-center md:p-8 xl:p-20 4xl:p-35"
  >
    <div
      class="motion-preset-shake text-[100px] font-extrabold text-shadow-6 text-shadow-crimson md:text-[200px] md:text-shadow-8 xl:text-[250px] xl:text-shadow-10 4xl:text-[400px] 4xl:text-shadow-20"
    >
      ¡404!
    </div>
    <div
      class="flex flex-col gap-6 text-[40px] md:text-[50px] xl:text-[65px] 4xl:text-[80px]"
    >
      <div
        class="font-bold text-shadow-3 text-shadow-violet md:text-shadow-4 4xl:text-shadow-6"
      >
        Whoops! Couldn't find the page you were looking for.
      </div>
      <div
        class="font-bold text-shadow-3 text-shadow-violet md:text-shadow-4 4xl:text-shadow-6"
      >
        How about we go back
        <router-link
          class="inline-block duration-200 ease-in-out text-shadow-crimson hover:text-[50px] hover:font-semibold hover:text-shadow-5 hover:md:text-[60px] hover:md:text-shadow-5 hover:xl:text-[75px] hover:xl:text-shadow-6 hover:4xl:text-[100px] hover:4xl:text-shadow-8"
          :to="{ name: 'projects' }"
        >
          home
        </router-link>
        ? :)
      </div>
    </div>
  </div>
</template>
