<template>
  <div
    class="animate__animated animate__fadeInLeft flex flex-row items-center py-6 lg:px-12"
  >
    <img
      class="mx-2 h-80 rounded-full bg-secondary-300 object-scale-down p-2 text-center align-middle text-white"
      src="placeholder-head.png"
      alt="A drawing of the portfolio owner"
    />
    <div class="text-white">
      <div
        class="animate__animated animate__fadeInLeft animate__faster px-8 py-3 text-4xl md:text-5xl lg:text-7xl"
      >
        Hi there, my name is Alejandro.
      </div>
      <div
        class="animate__animated animate__fadeInLeft px-8 py-3 text-3xl md:text-4xl lg:text-6xl"
      >
        I design and develop games and other neat stuff!
      </div>
    </div>
  </div>
  <Carousel
    class="animate__animated animate__fadeInUp py-6 md:py-8"
    :autoplay="5000"
    :wrap-around="true"
    :items-to-show="3"
    pause-autoplay-on-hover
  >
    <Slide
      class="px-4 py-6 md:px-6 md:py-12"
      v-for="project in projects"
      :key="project.title"
    >
      <div
        class="flex min-h-[200px] cursor-pointer items-center md:min-h-[300px] lg:min-h-[400px]"
      >
        <router-link :to="{ name: project.title }">
          <img
            class="rounded-lg text-center align-middle text-white transition duration-150 hover:scale-105"
            :src="project.imageVertical"
            :alt="project.title"
          />
        </router-link>
      </div>
    </Slide>
  </Carousel>
  <div class="animate__animated animate__fadeInUp flex justify-center py-5">
    <Button
      class="rounded-lg px-8 py-1.5 text-2xl uppercase md:text-3xl lg:text-4xl"
      @click="sendEmail"
    >
      alejandro.hincapie.lo@gmail.com
    </Button>
  </div>
</template>

<script setup lang="ts">
import "animate.css";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { sendEmail, projects } from "..";
import Button from "../components/Button.vue";
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
