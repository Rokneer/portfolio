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
      class="animate__animated animate__fadeInUp flex flex-row justify-center gap-x-4 text-center text-lg font-semibold md:gap-x-20 md:text-2xl lg:text-3xl xl:text-4xl"
    >
      <div class="flex flex-col items-center">
        <div class="grow pb-4 md:pb-8">Shoot me an email!</div>
        <img
          class="cursor-pointer transition hover:scale-110"
          src="/common/email.png"
          alt="Shoot me an email!"
          width="256"
          height="256"
          @click="sendEmail"
        />
      </div>
      <div class="flex flex-col items-center">
        <div class="grow pb-4 md:pb-8">Look at my CV!</div>
        <a
          class="transition hover:scale-110"
          href="https://drive.google.com/file/d/1c11vZkUXzI7QEqjcQp86l1xCUVQTRyqQ"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/common/cv.png"
            alt="Look at my CV!"
            width="256"
            height="256"
          />
        </a>
      </div>
      <div class="flex flex-col items-center">
        <div class="grow pb-4 md:pb-8">Check my LinkedIn!</div>
        <a
          class="transition hover:scale-110"
          href="https://www.linkedin.com/in/alejandro-hincapie/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/common/linkedin.png"
            alt="Check my LinkedIn!"
            width="256"
            height="256"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sendEmail } from "../utils";
</script>
