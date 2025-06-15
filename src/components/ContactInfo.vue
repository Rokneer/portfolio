<template>
  <div class="mb-48 flex w-full flex-row justify-center gap-45">
    <div
      class="text-crimson text-stroke-white text-stroke-20 stroke-behind drop-shadow-violet drop-shadow-4 flex flex-col items-center justify-center text-[230px]/55"
    >
      <div>Contact</div>
      <div class="flex flex-row items-center">
        <span>me</span>
        <img
          class="hover:animate-wiggle ml-[80px] size-[200px] motion-reduce:animate-none"
          :src="Tomatito"
          alt="A picture of the developer mascot character, a small red tomato with two big goofy eyes."
        />
      </div>
    </div>
    <img
      class="drop-shadow-violet drop-shadow-4 w-[120px]"
      :src="VineContact"
      alt="A picture small red vertical vine."
    />
    <div
      class="grid w-fit grid-cols-2 items-center justify-center gap-x-24 gap-y-12"
    >
      <a
        class="hover:motion-rotate-out-1 motion-rotate-in-1"
        href="mailto:rokneer@gmail.com?subject=Opportunity Email&body=Your message here!"
        target="_blank"
        rel="noreferrer"
      >
        <ph-envelope
          class="drop-shadow-4 hover:drop-shadow-8 drop-shadow-violet stroke-behind cursor-pointer stroke-white stroke-25 transition ease-in-out"
          :size="230"
          weight="fill"
          color="#e42038"
        />
      </a>
      <a
        class="hover:motion-rotate-out-1 motion-rotate-in-1"
        href="https://rokneer.itch.io/"
        target="_blank"
        rel="noreferrer"
      >
        <ph-itch-dot-io-logo
          class="drop-shadow-4 hover:drop-shadow-8 drop-shadow-violet stroke-behind cursor-pointer stroke-white stroke-25 transition ease-in-out"
          :size="230"
          weight="fill"
          color="#e42038"
        />
      </a>
      <a
        class="hover:motion-rotate-out-1 motion-rotate-in-1"
        href="https://www.linkedin.com/in/alejandro-hincapie/"
        target="_blank"
        rel="noreferrer"
      >
        <ph-linkedin-logo
          class="drop-shadow-4 hover:drop-shadow-8 drop-shadow-violet stroke-behind cursor-pointer stroke-white stroke-25 transition ease-in-out"
          :size="230"
          weight="fill"
          color="#e42038"
        />
      </a>
      <a
        class="hover:motion-rotate-out-1 motion-rotate-in-1"
        :href="CV"
        target="_blank"
        rel="noreferrer"
      >
        <ph-user-square
          class="drop-shadow-4 hover:drop-shadow-8 drop-shadow-violet stroke-behind cursor-pointer stroke-white stroke-25 transition ease-in-out"
          :size="230"
          weight="fill"
          color="#e42038"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tomatito from "/common/tomate/mascot/mascot-crimson-border.svg";
import VineContact from "/common/tomate/vines/VineContact.svg";
import CV from "/common/CV-ATS.pdf";

import { PhLinkedinLogo, PhEnvelope, PhUserSquare } from "@phosphor-icons/vue";
import PhItchDotIoLogo from "@/components/icons/PhItchDotIoLogo.vue";
</script>
