<template>
  <div
    class="animate__animated animate__fadeInLeft flex flex-row items-center py-3 sm:py-6 lg:px-12"
  >
    <router-link class="transition hover:scale-105" :to="{ name: 'about' }">
      <img
        class="w-40 min-w-[8rem] rounded-full bg-secondary-200 p-1 content-visibility-auto sm:w-64 md:w-72 lg:w-80"
        src="/headshot-624x.avif"
        srcset="/headshot-312x.avif 312w, /headshot-624x.avif 624w"
        sizes="
          (min-width: 1920px) 312px,
          (min-width: 1280px) 16.45vw,
          (min-width: 1040px) calc(20.91vw - 41px),
          (min-width: 780px) calc(23.75vw - 21px),
          (min-width: 520px) calc(27.92vw - 17px),
          116px"
        alt="A drawing of the portfolio owner"
        width="624"
        height="624"
      />
    </router-link>
    <div>
      <div
        class="animate__animated animate__fadeInLeft animate__faster py-1 pl-4 text-xl font-semibold xs:text-2xl sm:py-3 sm:pl-8 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
      >
        Hi there, my name is Alejandro.
      </div>
      <div
        class="animate__animated animate__fadeInLeft py-1 pl-4 text-sm sm:py-3 sm:pl-8 sm:text-2xl md:text-4xl lg:text-5xl xl:text-[3.3rem]"
      >
        I design and develop games and other neat stuff!
      </div>
    </div>
  </div>
  <Carousel
    class="animate__animated animate__fadeInUp py-2 sm:py-4"
    :autoplay="5000"
    :wrap-around="true"
    :items-to-show="carouselItemNumber"
    pause-autoplay-on-hover
  >
    <Slide
      v-for="project in PROJECTS"
      :key="project.title"
      class="flex justify-center p-2 xs:px-2 xs:py-4 sm:px-6 sm:py-4 xl:p-6"
    >
      <div class="relative flex cursor-pointer items-center">
        <router-link
          :to="{
            name: `${project.title}`,
          }"
        >
          <img
            class="rounded-lg transition content-visibility-auto hover:scale-105"
            :src="`/portfolio/${project.title}/${project.title}-vertical-768x.avif`"
            :srcset="`
            /portfolio/${project.title}/${project.title}-vertical-768x.avif 768w,
            /portfolio/${project.title}/${project.title}-vertical-384x.avif 384w
            `"
            sizes="
              (min-width: 2360px) 384px,
              (min-width: 2320px) calc(960vw - 22080px),
              (min-width: 780px) calc(20vw - 26px),
              calc(33.75vw - 20px)"
            :alt="project.title"
            width="768"
            height="1078"
          />
        </router-link>
      </div>
    </Slide>
  </Carousel>
  <div class="animate__animated animate__fadeInUp flex justify-center py-6">
    <Button
      class="rounded-lg px-4 py-1.5 text-sm uppercase sm:px-8 sm:text-2xl md:text-3xl lg:text-4xl"
      @click="sendEmail"
    >
      alejandro.hincapie.lo@gmail.com
    </Button>
  </div>
</template>

<script setup lang="ts">
import "../carousel-custom.css";
import { Carousel, Slide } from "vue3-carousel";
import { computed } from "vue";
import { sendEmail, PROJECTS, onWindowResize } from "..";
import Button from "../components/Button.vue";

const carouselItemNumber = computed(() => {
  if (onWindowResize().width.value >= 780) return 5;
  return 3;
});
</script>
