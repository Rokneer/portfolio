<template>
  <div class="flex w-full flex-col items-center justify-center">
    <div
      class="text-[32px] text-crimson drop-shadow-violet drop-shadow-1 stroke-behind text-stroke-3 text-stroke-white sm:text-[50px] sm:drop-shadow-2 md:text-[70px] md:text-stroke-7 lg:drop-shadow-3 xl:text-[120px] xl:drop-shadow-5 xl:text-stroke-12 2xl:text-[140px]"
    >
      Contact me!
    </div>

    <div class="flex flex-row gap-6">
      <contact-icon
        href="mailto:rokneer@gmail.com?subject=Opportunity Email&body=Your message here!"
      >
        <ph-envelope weight="fill" color="#e42038" />
      </contact-icon>

      <contact-icon href="https://rokneer.itch.io/">
        <ph-itch-dot-io-logo weight="fill" color="#e42038" />
      </contact-icon>

      <contact-icon href="https://github.com/Rokneer">
        <ph-github-logo weight="fill" color="#e42038" />
      </contact-icon>

      <contact-icon :href="CV">
        <ph-user-square weight="fill" color="#e42038" />
      </contact-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import CV from "/common/CV-ATS.pdf";
import ContactIcon from "./project/ContactIcon.vue";

import { PhEnvelope, PhUserSquare } from "@phosphor-icons/vue";
import PhItchDotIoLogo from "@/components/icons/PhItchDotIoLogo.vue";
import PhGithubLogo from "@/components/icons/PhGitHubLogo.vue";
</script>
