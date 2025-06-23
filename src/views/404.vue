<template>
  <div
    class="4xl:p-35 flex h-screen flex-col items-center justify-center p-5 text-center md:p-8 xl:p-20"
  >
    <div
      class="text-shadow-6 md:text-shadow-8 xl:text-shadow-10 4xl:text-shadow-20 4xl:text-[400px] text-shadow-crimson motion-preset-shake text-[100px] font-extrabold md:text-[200px] xl:text-[250px]"
    >
      ¡404!
    </div>
    <div
      class="4xl:text-[80px] flex flex-col gap-6 text-[40px] md:text-[50px] xl:text-[65px]"
    >
      <div
        class="text-shadow-3 md:text-shadow-4 4xl:text-shadow-6 text-shadow-violet font-bold"
      >
        Whoops! Couldn't find the page you were looking for.
      </div>
      <div
        class="text-shadow-3 md:text-shadow-4 4xl:text-shadow-6 text-shadow-violet font-bold"
      >
        How about we go back
        <router-link
          class="hover:text-shadow-5 hover:md:text-shadow-5 hover:xl:text-shadow-6 hover:4xl:text-shadow-8 hover:4xl:text-[100px] text-shadow-crimson inline-block duration-200 ease-in-out hover:text-[50px] hover:font-semibold hover:md:text-[60px] hover:xl:text-[75px]"
          :to="{ name: 'projects' }"
        >
          home
        </router-link>
        ? :)
      </div>
    </div>
  </div>
</template>
