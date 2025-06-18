<template>
  <div
    class="@max-7xl:mb-48 @5xl:mb-24 @xl:mb-20 @lg:mb-12 @max-7xl:gap-45 @5xl:gap-20 @lg:gap-12 @xs:gap-8 mb-8 flex w-full flex-row items-center justify-around gap-3"
  >
    <div
      class="text-crimson text-stroke-white @max-7xl:text-stroke-20 @5xl:text-stroke-15 @lg:text-stroke-7 text-stroke-3 stroke-behind drop-shadow-violet @5xl:drop-shadow-4 @lg:drop-shadow-2 drop-shadow-1 @max-7xl:text-[230px]/55 @7xl:text-[150px]/35 @5xl:text-[120px]/35 @lg:text-[75px]/12 @xs:text-[40px]/9 flex w-[50%] flex-col items-center justify-center text-[25px]/6 tracking-tight"
    >
      <div>Contact</div>
      <div
        class="@5xl:w-[80%] @xs:w-[70%] flex w-full flex-row items-center justify-around"
      >
        <span>me</span>
        <img
          class="hover:animate-wiggle @max-7xl:size-[200px] @5xl:size-[140px] @lg:size-[70px] size-[32px] motion-reduce:animate-none"
          :src="Tomatito"
          alt="A picture of the developer mascot character, a small red tomato with two big goofy eyes."
        />
      </div>
    </div>

    <img
      class="drop-shadow-violet @7xl:drop-shadow-4 @lg:drop-shadow-2 drop-shadow-1 @7xl:max-w-[120px] @5xl:w-[90px] @lg:w-[35px] w-[15px]"
      :src="VineContact"
      alt="A picture small red vertical vine."
    />

    <div
      class="@7xl:gap-x-24 @7xl:gap-y-12 @lg:gap-x-12 @lg:gap-y-6 grid w-[50%] grid-cols-2 items-center justify-center gap-x-2 gap-y-1"
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
