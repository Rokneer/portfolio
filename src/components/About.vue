<template>
  <div class="about">
    <div class="greeting">
      <span> Hi there, my name is </span>
      <a class="name-highlight" :href="CV" target="_blank" rel="noreferrer">
        Alejandro
      </a>
    </div>
    <div class="description-container">
      <div class="images-container">
        <img
          :src="isMeHovered ? meHover : meBase"
          alt="A cartoony redition of the the developer, Alejandro, drawn in different shades of purple. Their hand is waving, welcoming you to their portfolio."
          class="avatar"
          @mouseover="isMeHovered = true"
          @mouseleave="isMeHovered = false"
        />
        <img
          :src="TomatoLogo"
          alt="Bold red text with a white outline reading: tomato.dev, the Os are stylized as small cartoony tomatos."
          class="logo"
        />
      </div>
      <div class="description">
        <div class="wave-highlight">
          I design and develop games and other neat stuff!
        </div>
        <div>
          I'm a game developer and designer with a degree in engineering for
          digital entertainment design with an emphasis on videogames.
        </div>
        <div>
          My goal is to create new and exciting experiences and tell wonderful
          stories that inspire and entertain the people who play them.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import meBase from "/common/tomate/avatar/avatar-1.svg";
import meHover from "/common/tomate/avatar/avatar-2.svg";
import TomatoLogo from "/common/tomate/logo/logo-red.svg";

import CV from "/common/CV.pdf";

const isMeHovered = ref<boolean>(false);
</script>

<style lang="css" scoped>
/* DEFAULT */
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding-inline: 0.25rem;
  padding-block: 1rem;
  scroll-margin-top: 8.5rem;
}
.description-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.greeting {
  width: 100%;
  text-align: center;
  font-size: 1.35rem;
  text-shadow: 0.065rem 0.065rem 0 var(--violet);
}
.images-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(0.1rem 0.1rem 0 var(--violet));
  flex-basis: 20%;
  padding: 0.25rem;
  width: 3rem;
}
.avatar {
  width: inherit;
}
.logo {
  width: inherit;
}
.description {
  font-size: 0.675rem;
  text-shadow: 0.03rem 0.03rem 0 var(--violet);
  font-weight: 500;
  flex-basis: 80%;
}
.name-highlight {
  color: var(--crimson);
  text-decoration: none;
  transition-property: font-size;
  transition: 0.2s ease-in-out;
}
.name-highlight:hover {
  font-weight: 600;
}
.wave-highlight:hover {
  animation: wave 0.8s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .name-highlight {
    transition: none;
  }
  .wave-highlight:hover {
    animation: none;
  }
}
/* SM - 640px*/
@media (min-width: 40rem) {
  .description-container {
    gap: 1.5rem;
  }
  .greeting {
    font-size: 2.5rem;
  }
  .images-container {
    width: 5.5rem;
  }
  .description {
    font-size: 1.125rem;
    text-shadow: 0.065rem 0.065rem 0 var(--violet);
  }
}
/* MD - 768px*/
@media (min-width: 48rem) {
  .greeting {
    font-size: 3rem;
    text-shadow: 0.15rem 0.15rem 0 var(--violet);
  }
  .images-container {
    width: 6.5rem;
  }
  .description {
    font-size: 1.4rem;
    text-shadow: 0.1rem 0.1rem 0 var(--violet);
  }
}
/* LG - 1024px*/
@media (min-width: 64rem) {
  .about {
    padding-inline: 1.5rem;
  }
  .description-container {
    gap: 2.5rem;
  }
  .images-container {
    width: 8.25rem;
    filter: drop-shadow(0.125rem 0.125rem 0 var(--violet));
  }
  .greeting {
    font-size: 3.75rem;
    text-shadow: 0.2rem 0.2rem 0 var(--violet);
  }
  .description {
    font-size: 1.815rem;
  }
}
/* XL - 1280px*/
@media (min-width: 80rem) {
  .about {
    padding-inline: 4rem;
  }
  .description-container {
    gap: 4rem;
  }
  .images-container {
    width: 10rem;
    filter: drop-shadow(0.25rem 0.25rem 0 var(--violet));
  }
  .greeting {
    font-size: 4.625rem;
    text-shadow: 0.315rem 0.315rem 0 var(--violet);
  }
  .description {
    font-size: 2.15rem;
    text-shadow: 0.125rem 0.125rem 0 var(--violet);
  }
}
/* 2XL - 1536px*/
@media (min-width: 96rem) {
  .description-container {
    gap: 5rem;
  }
  .greeting {
    font-size: 5.625rem;
  }
  .description {
    font-size: 2.75rem;
  }
}
/* 3XL - 1920px*/
@media (min-width: 120rem) {
  .about {
    padding-inline: 5rem;
  }
  .images-container {
    width: 14rem;
    filter: drop-shadow(0.315rem 0.315rem 0 var(--violet));
  }
  .greeting {
    font-size: 6.25rem;
    text-shadow: 0.315rem 0.315rem 0 var(--violet);
  }
  .description {
    font-size: 2.95rem;
    text-shadow: 0.2rem 0.2rem 0 var(--violet);
  }
}
/* 4XL - 2560px*/
@media (min-width: 160rem) {
  .about {
    padding-inline: 9rem;
  }
  .images-container {
    width: 18.5rem;
  }
  .greeting {
    font-size: 8.65rem;
  }
  .description {
    font-size: 4.125rem;
  }
}
/*  5XL - 3840px*/
@media (min-width: 240rem) {
  .about {
    padding-inline: 14rem;
  }
  .description-container {
    gap: 8rem;
  }
  .images-container {
    width: 30rem;
    filter: drop-shadow(0.45rem 0.45rem 0 var(--violet));
  }
  .greeting {
    font-size: 13.25rem;
    text-shadow: 0.45rem 0.45rem 0 var(--violet);
  }
  .description {
    font-size: 6.25rem;
    text-shadow: 0.315rem 0.315rem 0 var(--violet);
  }
}
</style>
