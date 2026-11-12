<template>
  <div class="contact-container">
    <div class="contact-text">Contact me!</div>
    <div class="icon-container">
      <contact-icon
        href="mailto:rokneer@gmail.com?subject=Opportunity Email&body=Your message here!"
      >
        <ph-envelope
          class="icon"
          weight="fill"
          color="#e42038"
        />
      </contact-icon>

      <contact-icon href="https://rokneer.itch.io/">
        <ph-itch-dot-io-logo
          class="icon"
          weight="fill"
          color="#e42038"
        />
      </contact-icon>

      <contact-icon href="https://github.com/Rokneer">
        <ph-github-logo
          class="icon"
          weight="fill"
          color="#e42038"
        />
      </contact-icon>

      <contact-icon :href="CV">
        <ph-read-cv-logo
          class="icon"
          weight="fill"
          color="#e42038"
        />
      </contact-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import CV from "/common/CV.pdf";
import ContactIcon from "./ContactIcon.vue";

import { PhEnvelope, PhReadCvLogo } from "@phosphor-icons/vue";
import PhItchDotIoLogo from "@/components/icons/PhItchDotIoLogo.vue";
import PhGithubLogo from "@/components/icons/PhGitHubLogo.vue";
</script>
<style lang="css" scoped>
/* DEFAULT */
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.contact-text {
  font-size: 2rem;
  color: var(--color-crimson);
  filter: drop-shadow(0.065rem 0.065rem 0 var(--color-violet));
  paint-order: stroke fill;
  -webkit-text-stroke-width: 0.2rem;
  -webkit-text-stroke-color: white;
}
.icon-container {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}
.icon {
  width: 100%;
  height: 100%;
}

/* SM - 640px*/
@media (min-width: 40rem) {
  .contact-text {
    font-size: 3.125rem;
    filter: drop-shadow(0.125rem 0.125rem 0 var(--color-violet));
  }
}
/* MD - 768px*/
@media (min-width: 48rem) {
  .contact-text {
    font-size: 4.375rem;
    -webkit-text-stroke-width: 0.45rem;
  }
}
/* LG - 1024px*/
@media (min-width: 64rem) {
  .contact-text {
    font-size: 8.25rem;
    filter: drop-shadow(0.2rem 0.2rem 0 var(--color-violet));
  }
}
/* XL - 1280px*/
@media (min-width: 80rem) {
  .contact-text {
    font-size: 11.25rem;
    filter: drop-shadow(0.315rem 0.315rem 0 var(--color-violet));
    -webkit-text-stroke-width: 0.75rem;
  }
}
/* 2XL - 1536px*/
@media (min-width: 96rem) {
  .contact-text {
    font-size: 8.75rem;
  }
}
/* 3XL - 1920px*/
@media (min-width: 120rem) {
  .contact-text {
    filter: drop-shadow(0.375rem 0.375rem 0 var(--color-violet));
    -webkit-text-stroke-width: 0.938rem;
  }
}
/* 4XL - 2560px*/
@media (min-width: 160rem) {
  .contact-text {
    font-size: 21.25rem;
  }
}
/*  5XL - 3840px*/
@media (min-width: 240rem) {
  .contact-text {
    font-size: 18.75rem;
    filter: drop-shadow(0.5rem 0.5rem 0 var(--color-violet));
    -webkit-text-stroke-width: 1.25rem;
  }
}
</style>
