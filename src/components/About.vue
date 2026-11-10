<template>
  <div class="about">
    <div class="greeting">
      <span> Hi there, my name is </span>
      <a class="name-highlight" :href="CV" target="_blank" rel="noreferrer">
        Alejandro
      </a>
    </div>
    <div class="description-container">
      <div class="mascot">
        <img
          :src="isMeHovered ? meHover : meBase"
          alt="A cartoony redition of the the developer, Alejandro, drawn in different shades of purple. Their hand is waving, welcoming you to their portfolio."
          @mouseover="isMeHovered = true"
          @mouseleave="isMeHovered = false"
        />
        <img
          :src="TomatoLogo"
          alt="Bold red text with a white outline reading: tomato.dev, the Os are stylized as small cartoony tomatos."
          class="hover:motion-preset-stretch"
        />
      </div>
      <div class="description">
        <div class="wave-highlight hover:animate-wave">
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

<style lang="css" scoped>
/* DEFAULT */
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding-inline: 0.5rem;
  padding-block: 1rem;
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
  font-size: 1.25rem;
  text-shadow: 0.063rem 0.063rem 0 var(--color-violet);
}
.mascot {
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0.094rem 0.094rem 0 var(--color-violet));
  flex-basis: 20%;
  padding: 0.25rem;
}
.description {
  font-size: 0.625rem;
  text-shadow: 0.031rem 0.031rem 0 var(--color-violet);
  font-weight: var(--font-weight-medium);
  flex-basis: 80%;
}
.name-highlight {
  color: var(--color-crimson);
  transition: all 200ms ease-in-out;
}
.name-highlight:hover {
  font-weight: var(--font-weight-semibold);
}
.wave-highlight:hover {
}
@media (prefers-reduced-motion: reduce) {
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
    font-size: 2.188rem;
  }
  .description {
    font-size: 1.125rem;
    text-shadow: 0.063rem 0.063rem 0 var(--color-violet);
  }
}
/* MD - 768px*/
@media (min-width: 48rem) {
  .greeting {
    font-size: 2.813rem;
  }
  .description {
    font-size: 1.25rem;
    text-shadow: 0.094rem 0.094rem 0 var(--color-violet);
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
  .mascot {
    filter: drop-shadow(0.125rem 0.125rem 0 var(--color-violet));
  }
  .greeting {
    font-size: 3.75rem;
    text-shadow: 0.188rem 0.188rem 0 var(--color-violet);
  }
  .description {
    font-size: 1.813rem;
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
  .mascot {
    filter: drop-shadow(0.25rem 0.25rem 0 var(--color-violet));
  }
  .greeting {
    font-size: 4.625rem;
    text-shadow: 0.313rem 0.313rem 0 var(--color-violet);
  }
  .description {
    font-size: 2.188rem;
    text-shadow: 0.125rem 0.125rem 0 var(--color-violet);
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
    font-size: 2.688rem;
  }
}
/* 3XL - 191.25rem*/
@media (min-width: 120rem) {
  .about {
    padding-inline: 5rem;
  }
  .mascot {
    filter: drop-shadow(0.313rem 0.313rem 0 var(--color-violet));
  }
  .greeting {
    font-size: 6.25rem;
    text-shadow: 0.313rem 0.313rem 0 var(--color-violet);
  }
  .description {
    font-size: 2.938rem;
    text-shadow: 0.188rem 0.188rem 0 var(--color-violet);
  }
}
/* 4XL - 2560px*/
@media (min-width: 160rem) {
  .about {
    padding-inline: 9rem;
  }
  .greeting {
    font-size: 8.125rem;
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
  .mascot {
    filter: drop-shadow(0.438rem 0.438rem 0 var(--color-violet));
  }
  .greeting {
    font-size: 20.625rem;
    text-shadow: 0.438rem 0.438rem 0 var(--color-violet);
  }
  .description {
    font-size: 6.25rem;
    text-shadow: 0.313rem 0.313rem 0 var(--color-violet);
  }
}
</style>

<script setup lang="ts">
import { ref } from "vue";

import meBase from "/common/tomate/avatar/avatar-1.svg";
import meHover from "/common/tomate/avatar/avatar-2.svg";
import TomatoLogo from "/common/tomate/logo/logo-red.svg";

import CV from "/common/CV.pdf";

const isMeHovered = ref<boolean>(false);
</script>
