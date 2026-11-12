<template>
  <div class="footer-container">
    <div class="images-container">
      <img
        class="vines"
        :src="VineBottomL"
        alt="A picture long red horizontal vine with a white outline."
      />
      <img
        class="tomatito"
        :src="Tomatito"
        alt="A picture of the developer mascot character, a small red cartoon tomato with two big goofy eyes, outlined in white."
      />
      <img
        class="vines"
        :src="VineBottomR"
        alt="A picture long red horizontal vine with a white outline."
      />
    </div>
    <div class="footnote">
      Designed and developed in Vue by Tomato.Dev
      <br />
      Fully human made, no Generative AI was ever used.
    </div>
    <div class="footnote"></div>
  </div>
</template>

<script setup lang="ts">
import VineBottomL from "/common/tomate/vines/VineBottomL.svg";
import VineBottomR from "/common/tomate/vines/VineBottomR.svg";
import Tomatito from "/common/tomate/mascot/mascot-crimson-border.svg";
</script>

<style lang="css" scoped>
/* DEFAULT */
.footer-container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-top: 1.5rem;
}
.images-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.vines {
  height: 0.9375rem;
  filter: drop-shadow(0.125rem 0.125rem 0 var(--violet));
}
.tomatito {
  width: 1.875rem;
  height: 1.875rem;
  filter: drop-shadow(0.125rem 0.125rem 0 var(--violet));
}
.tomatito:hover {
  animation: wiggle 1s ease-in-out infinite;
}
.footnote {
  text-align: center;
  font-size: 0.375rem;
  text-shadow: 0.065rem 0.065rem 0 var(--violet);
}
@media (prefers-reduced-motion: reduce) {
  .tomatito:hover {
    animation: none;
  }
}
/* SM - 640px*/
@media (min-width: 40rem) {
  .vines {
    height: 1.25rem;
    filter: drop-shadow(0.2rem 0.2rem 0 var(--violet));
  }
  .tomatito {
    height: 2.25rem;
    filter: drop-shadow(0.2rem 0.2rem 0 var(--violet));
  }
  .footnote {
    font-size: 0.5rem;
  }
}
/* MD - 768px*/
@media (min-width: 48rem) {
  .footer-container {
    padding-top: 2rem;
  }
  .images-container {
    gap: 0.75rem;
  }
  .vines {
    height: 1.75rem;
    filter: drop-shadow(0.2rem 0.2rem 0 var(--violet));
  }
  .tomatito {
    height: 2.8rem;
  }
}
/* LG - 1024px*/
@media (min-width: 64rem) {
  .footer-container {
    gap: 0.75rem;
    padding-top: 3rem;
  }
  .vines {
    height: 2.5rem;
    filter: drop-shadow(0.25rem 0.25rem 0 var(--violet));
  }
  .tomatito {
    width: 4.5rem;
    height: 4.5rem;
    filter: drop-shadow(0.25rem 0.25rem 0 var(--violet));
  }
  .footnote {
    font-size: 1rem;
  }
}
/* XL - 1280px*/
@media (min-width: 80rem) {
  .footer-container {
    gap: 1rem;
    padding-top: 4rem;
  }
  .images-container {
    gap: 1rem;
  }
  .vines {
    height: 3.125rem;
    filter: drop-shadow(0.375rem 0.375rem 0 var(--violet));
  }
  .tomatito {
    width: 7.5rem;
    height: 7.5rem;
    filter: drop-shadow(0.375rem 0.375rem 0 var(--violet));
  }
  .footnote {
    font-size: 1.25rem;
    text-shadow: 0.15rem 0.15rem 0 var(--violet);
  }
}
/* 2XL - 1536px*/
@media (min-width: 96rem) {
  .images-container {
    gap: 1.25rem;
  }
  .vines {
    height: 3.75rem;
  }
}
/* 3XL - 1920px*/
@media (min-width: 120rem) {
  .vines {
    height: 3.75rem;
  }
  .tomatito {
    width: 8rem;
    height: 8rem;
  }
  .footnote {
    font-size: 1.625rem;
    text-shadow: 0.2rem 0.2rem 0 var(--violet);
  }
}
/* 4XL - 2560px*/
@media (min-width: 160rem) {
  .images-container {
    gap: 1.25rem;
  }
  .vines {
    height: 5.75rem;
  }
  .tomatito {
    width: 12rem;
    height: 12rem;
  }
  .footnote {
    font-size: 2rem;
  }
}
/*  5XL - 3840px*/
@media (min-width: 240rem) {
  .images-container {
    gap: 3rem;
  }
  .vines {
    height: 8.75rem;
    filter: drop-shadow(0.5rem 0.5rem 0 var(--violet));
  }
  .tomatito {
    width: 13.75rem;
    height: 13.75rem;
    filter: drop-shadow(0.5rem 0.5rem 0 var(--violet));
  }
  .footnote {
    font-size: 2.5rem;
    text-shadow: 0.25rem 0.25rem 0 var(--violet);
  }
}
</style>
