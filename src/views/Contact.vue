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
      class="animate__animated animate__fadeInUp grid grid-cols-2 justify-center gap-4 text-center text-lg font-semibold md:grid-cols-4 md:gap-x-20 md:text-2xl lg:text-3xl xl:text-4xl"
    >
      <contact-element
        title="Shoot me an email!"
        image="./common/email.png"
        :action="sendEmail"
      />
      <contact-element
        title="Take a look at my CV!"
        image="./common/cv.png"
        link="https://drive.google.com/file/d/1c11vZkUXzI7QEqjcQp86l1xCUVQTRyqQ"
      />
      <contact-element
        title="Game in my itch.io!"
        image="./common/itchio-logo-textless-white.png"
        link="https://rokneer.itch.io/"
      />
      <contact-element
        title="Check my LinkedIn!"
        image="./common/linkedin-logo.png"
        link="https://www.linkedin.com/in/alejandro-hincapie/"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { sendEmail } from "../utils";
import ContactElement from "../components/ContactElement.vue";
</script>
