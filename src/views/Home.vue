<template>
  <div
    class="animate__animated animate__fadeInLeft flex flex-row items-center py-3 sm:py-6 lg:px-12"
  >
    <router-link
      class="transition duration-150 hover:scale-105"
      :to="{ name: 'about' }"
    >
      <img
        class="w-40 min-w-[8rem] rounded-full bg-secondary-200 p-1 text-center text-white sm:w-64 md:w-72 lg:w-80"
        src="/placeholder-head.png"
        alt="A drawing of the portfolio owner"
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
      v-for="project in projects"
      :key="project.title"
      class="p-2 xs:px-2 xs:py-4 sm:px-4 sm:py-6 md:px-6"
    >
      <div class="relative flex w-96 cursor-pointer items-center">
        <router-link
          :to="{
            name: `${project.title}`,
          }"
        >
          <img
            class="rounded-lg text-center text-white transition duration-150 hover:scale-105"
            :src="`/portfolio/${project.title}/${project.title}-vertical.png`"
            :alt="project.title"
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
import { computed } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { sendEmail, projects, onWindowResize } from "..";
import Button from "../components/Button.vue";

const carouselItemNumber = computed(() => {
  if (onWindowResize().width.value >= 1280) return 5;
  return 3;
});
</script>

<style scoped>
.carousel__slide--sliding {
  transition: 1s;
}
.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}
.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}
.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}
.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}
.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
