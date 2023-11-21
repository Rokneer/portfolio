<template>
  <div class="py-6">
    <div
      class="animate__animated animate__fadeInDown bg-gradient-to-l from-tertiary-500 from-25% via-tertiary-200 to-tertiary-500 to-75% py-3 text-center text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl"
    >
      Contact me!
    </div>
    <div
      class="animate__animated animate__fadeInDown py-10 text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl"
    >
      I'm always looking for new and interesting opportunities, so don't
      hesitate to contact me.
    </div>
    <div
      class="flex flex-row justify-center gap-x-4 text-center text-xl font-semibold md:gap-x-24 md:text-2xl lg:text-3xl xl:text-4xl"
    >
      <div
        class="animate__animated animate__fadeInUp flex flex-col items-center p-4"
      >
        <div>Shoot me an email!</div>
        <img
          class="w-[180px] cursor-pointer text-center text-white transition duration-150 hover:scale-110 lg:w-[340px]"
          src="/email.png"
          alt="Email"
          @click="sendEmail"
        />
      </div>
      <div
        class="animate__animated animate__fadeInUp flex flex-col items-center p-4"
      >
        <div>Check me out on LinkedIn!</div>
        <a
          href="https://www.linkedin.com/in/alejandro-hincapie/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            class="w-[180px] text-center text-white transition duration-150 hover:scale-110 lg:w-[340px]"
            src="/linkedin.png"
            alt="LinkedIn"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sendEmail } from "..";
</script>
