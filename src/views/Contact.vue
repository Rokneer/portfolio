<template>
  <div class="py-3 sm:py-6">
    <div
      class="animate__animated animate__fadeInDown bg-gradient-to-l from-tertiary-500 from-15% via-tertiary-200 to-tertiary-500 to-85% py-3 text-center text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl"
    >
      Contact me!
    </div>
    <div
      class="animate__animated animate__fadeInDown py-6 text-center text-xl sm:py-10 md:text-2xl lg:text-3xl xl:text-4xl"
    >
      I'm always looking for new and interesting opportunities, so don't
      hesitate to contact me.
    </div>
    <div
      class="flex flex-row justify-center gap-x-4 text-center text-xl font-semibold md:gap-x-24 md:text-2xl lg:text-3xl xl:text-4xl"
    >
      <div
        class="animate__animated animate__fadeInUp flex flex-col items-center sm:p-4"
      >
        <div>Shoot me an email!</div>
        <img
          class="w-32 cursor-pointer text-center text-white transition duration-150 content-visibility-auto hover:scale-110 sm:w-44 lg:w-80"
          src="/email.png"
          alt="Shoot me an email!"
          width="256"
          height="256"
          decoding="async"
          @click="sendEmail"
        />
      </div>
      <div
        class="animate__animated animate__fadeInUp flex flex-col items-center sm:p-4"
      >
        <div>Check me out on LinkedIn!</div>
        <a
          href="https://www.linkedin.com/in/alejandro-hincapie/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            class="w-32 text-center text-white transition duration-150 content-visibility-auto hover:scale-110 sm:w-44 lg:w-80"
            src="/linkedin.png"
            alt="Check me out on LinkedIn!"
            width="256"
            height="256"
            decoding="async"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sendEmail } from "..";
</script>
