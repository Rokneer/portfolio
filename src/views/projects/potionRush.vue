<template>
  <div class="flex flex-col items-center text-center">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown w-60 object-scale-down p-4 content-visibility-auto xs:w-72 md:w-80 lg:max-w-sm"
      src="/potion-rush/potion-rush-logo-576x.avif"
      srcset="
        /potion-rush/potion-rush-logo-576x.avif 576w,
        /potion-rush/potion-rush-logo-288x.avif 288w
      "
      sizes="(min-width: 780px) 288px, (min-width: 480px) 256px, 208px"
      alt="Potion Rush logo"
      width="576"
      height="548"
    />
    <!-- LONG DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown w-10/12 py-4 sm:py-6 lg:text-2xl"
    >
      {{ PROJECTS["potion_rush"].long_description }}
    </div>
    <!-- FEATURES -->
    <div
      class="animate__animated animate__fadeInDown flex w-10/12 flex-col items-center justify-center gap-y-4 py-4 sm:gap-x-4 sm:py-6 md:flex-row md:items-stretch md:gap-x-8 lg:gap-x-16"
    >
      <feature-box
        title="Brew"
        icon="mdi-bottle-tonic"
        description="Cook up delicious potions with a variety of magical ingredients."
      />
      <feature-box
        title="Profit"
        icon="mdi-cash-multiple"
        description="Make as much money as you can by getting tips from satisfied customers to try to pay rent."
      />
      <feature-box
        title="Mood"
        icon="mdi-emoticon-angry"
        description="Deal with the ever changing temperament of the many people of New Arkadia."
      />
    </div>
    <!-- SMALL DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown flex w-10/12 flex-row items-center justify-center pb-4 pt-6 lg:text-xl"
    >
      <img
        class="mr-4 w-10 content-visibility-auto lg:w-12"
        src="/android-chrome-192x192.png"
        alt="Tomate icon"
        width="192"
        height="192"
        loading="lazy"
      />
      <div class="text-left">
        {{ PROJECTS["potion_rush"].role }}
      </div>
    </div>
    <!-- GAME -->
    <div
      class="animate__animated animate__fadeInDown flex flex-row items-center justify-center pb-6 pt-4 xs:text-xl sm:text-2xl lg:text-3xl"
    >
      <a
        href="https://drive.google.com/file/d/1cc84MfSEX3X5KZEFlxay9c4Fou5L0V-Y"
        target="_blank"
        rel="noreferrer"
      >
        <Button class="rounded-2xl px-6 py-1 lg:px-10 xl:px-16" block>
          Download the game here!
        </Button>
      </a>
    </div>
    <!-- IMAGES -->
    <div class="py-3 sm:py-6">
      <div
        class="animate__animated animate__fadeInDown mb-4 bg-gradient-to-l from-tertiary-500 from-25% via-tertiary-200 to-tertiary-500 to-75% p-2 text-3xl lg:mb-6 lg:text-4xl"
      >
        Gallery
      </div>
      <image-viewer :images="IMAGES" orientation="vertical" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PROJECTS } from "../../.";
import Button from "../../components/Button.vue";
import FeatureBox from "../../components/FeatureBox.vue";
import ImageViewer from "../../components/ImageViewer.vue";

// Constants
const IMAGES = [
  {
    src: "/portfolio/potion-rush/potion-rush-1",
    alt: "A comic depicting a potion shop in the middle of a city. Two customers walk in, the first one leaves angrily, the second one waits.",
  },
  {
    src: "/portfolio/potion-rush/potion-rush-2",
    alt: "An image of a decorated potion shop. A businessman looking customer is asking for a fire potion. In the middle, a blender it's being used. Below it, three ingredients are displayed in a bar.",
  },
  {
    src: "/portfolio/potion-rush/potion-rush-3",
    alt: "An image of a decorated potion shop. A robot looking customer is asking for a wine potion. In the middle, a cauldron is being stirred. Below it, three ingredients are displayed in a bar.",
  },
  {
    src: "/portfolio/potion-rush/potion-rush-4",
    alt: "An image of a decorated potion shop. A witch looking customer is asking for a fruity potion. In the middle, a cauldron is being stirred. Below it, three ingredients are displayed in a bar.",
  },
  {
    src: "/portfolio/potion-rush/potion-rush-5",
    alt: "An image of the game UI  displaying the text in spanish 'Estas pociones no se venderan solas'. Three stars display the money goals for the level.",
  },
  {
    src: "/portfolio/potion-rush/potion-rush-6",
    alt: "An image of a recipe book displaying a mint and strawberry potion, its required ingredients, its price, the required utensil to make it and a short description.",
  },
  {
    src: "/portfolio/potion-rush/potion-rush-7",
    alt: "An image of a recipe book displaying a fruit filled potion, its required ingredients, its price, the required utensil to make it and a short description.",
  },
  {
    src: "/portfolio/potion-rush/potion-rush-8",
    alt: "An image of a recipe book displaying a poisonous coffee potion, its required ingredients, its price, the required utensil to make it and a short description.",
  },
];
</script>
