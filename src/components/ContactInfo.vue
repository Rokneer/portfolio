<template>
  <div
    class="xs:mb-10 3xl:mb-42 4xl:mb-50 xs:gap-8 3xl:gap-45 2xl:mb-30 mb-8 flex w-full flex-row items-center justify-around gap-3 sm:mb-14 sm:gap-8 md:mb-16 md:gap-8 lg:mb-20 lg:gap-12 xl:mb-24 xl:gap-20 2xl:gap-20"
  >
    <div
      class="text-stroke-3 xs:text-stroke-4 md:text-stroke-7 xl:text-stroke-10 2xl:text-stroke-13 3xl:text-stroke-20 drop-shadow-1 sm:drop-shadow-2 lg:drop-shadow-3 2xl:drop-shadow-6 xs:text-[50px]/11 3xl:text-[180px]/35 4xl:text-[220px]/45 text-crimson stroke-behind drop-shadow-violet text-stroke-white md:text-[75px]/15 xl:text-[120px]/25 2xl:text-[160px]/30 flex w-[50%] flex-col items-center justify-center text-[32px]/8 tracking-tight"
    >
      <div>Contact</div>
      <div class="flex w-[70%] flex-row items-center justify-around">
        <span>me</span>
        <img
          class="xs:size-[45px] 3xl:size-[200px] 4xl:w-[260px] hover:animate-wiggle size-[32px] motion-reduce:animate-none md:size-[70px] xl:size-[100px] 2xl:size-[150px]"
          :src="Tomatito"
          alt="A picture of the developer mascot character, a small red tomato with two big goofy eyes."
        />
      </div>
    </div>

    <img
      class="drop-shadow-2 sm:drop-shadow-3 lg:drop-shadow-4 xl:drop-shadow-6 2xl:drop-shadow-8 3xl:drop-shadow-10 xs:w-[25px] 3xl:w-[120px] drop-shadow-violet w-[20px] sm:w-[30px] md:w-[45px] lg:w-[65px] 2xl:w-[90px]"
      :src="VineContact"
      alt="A picture small red vertical vine."
    />

    <div
      class="grid w-[50%] grid-cols-2 items-center justify-center gap-1 lg:gap-6 2xl:gap-12"
    >
      <contact-icon
        href="mailto:rokneer@gmail.com?subject=Opportunity Email&body=Your message here!"
      >
        <ph-envelope weight="fill" color="#e42038" />
      </contact-icon>

      <contact-icon href="https://rokneer.itch.io/">
        <ph-itch-dot-io-logo weight="fill" color="#e42038" />
      </contact-icon>

      <contact-icon href="https://www.linkedin.com/in/alejandro-hincapie/">
        <ph-linkedin-logo weight="fill" color="#e42038" />
      </contact-icon>

      <contact-icon :href="CV">
        <ph-user-square weight="fill" color="#e42038" />
      </contact-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tomatito from "/common/tomate/mascot/mascot-crimson-border.svg";
import VineContact from "/common/tomate/vines/VineContact.svg";
import CV from "/common/CV-ATS.pdf";

import ContactIcon from "./project/ContactIcon.vue";

import { PhLinkedinLogo, PhEnvelope, PhUserSquare } from "@phosphor-icons/vue";
import PhItchDotIoLogo from "@/components/icons/PhItchDotIoLogo.vue";
</script>
