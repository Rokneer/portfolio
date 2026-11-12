<template>
  <div class="gradient">
    <div class="home-container">
      <about id="about" />
      <work-projects id="projects" />
      <personal-projects />
      <contact-info id="contact" />
      <tomato-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  About,
  ContactInfo,
  TomatoFooter,
  PersonalProjects,
  WorkProjects,
} from "@/components";
</script>

<style lang="css" scoped>
/* DEFAULT */
.gradient {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    180deg,
    transparent 85%,
    var(--color-violet)
  );
}
.home-container {
  display: flex;
  flex-direction: column;
  margin-inline: 1.5rem;
  margin-block: 0.5rem;
  gap: 1rem;
}
:deep(.projects-container) {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
:deep(.category) {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.015rem;
  gap: 0.25rem;
  text-align: center;
  font-size: 1.55rem;
  font-weight: 500;
  filter: drop-shadow(0.1rem 0.1rem 0 var(--color-violet));
}
:deep(.category-title) {
  vertical-align: bottom;
  line-height: 1;
}
:deep(.icon) {
  margin-bottom: 0.25rem;
}
:deep(.project-grid) {
  display: grid;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
/* SM - 640px*/
@media (min-width: 40rem) {
  .home-container {
    margin-inline: 2.5rem;
    margin-block: 1.5rem;
    gap: 1.25rem;
  }
  :deep(.category) {
    margin-bottom: 0.75rem;
    gap: 0.75rem;
    font-size: 2.5rem;
  }
}
/* MD - 768px*/
@media (min-width: 48rem) {
  .home-container {
    margin-inline: 3rem;
    margin-block: 2rem;
    gap: 2.25rem;
  }
  :deep(.category) {
    font-size: 3.125rem;
  }
  :deep(.icon) {
    margin-bottom: 0.5rem;
  }
  :deep(.project-grid) {
    gap: 1.5rem;
  }
}
/* LG - 1024px*/
@media (min-width: 64rem) {
  .home-container {
    margin-inline: 3.5rem;
    margin-block: 2.5rem;
    gap: 3rem;
  }
  :deep(.category) {
    margin-bottom: 1rem;
    gap: 1.5rem;
    font-size: 3.75rem;
    filter: drop-shadow(0.125rem 0.125rem 0 var(--color-violet));
  }
  :deep(.icon) {
    margin-bottom: 0.75rem;
  }
}
/* XL - 1280px*/
@media (min-width: 80rem) {
  .home-container {
    margin-block: 3rem;
    gap: 3.5rem;
  }
  :deep(.category) {
    margin-bottom: 1.5rem;
    gap: 2rem;
    font-size: 4.75rem;
    filter: drop-shadow(0.25rem 0.25rem 0 var(--color-violet));
  }
  :deep(.project-grid) {
    gap: 2rem;
  }
}
/* 2XL - 1536px*/
@media (min-width: 96rem) {
  .home-container {
    margin-inline: 4.5rem;
    margin-block: 3.5rem;
    gap: 4rem;
  }
  :deep(.category) {
    font-size: 5rem;
    filter: drop-shadow(0.625rem 0.625rem 0 var(--color-violet));
  }
  :deep(.icon) {
    margin-bottom: 1rem;
  }
  :deep(.project-grid) {
    gap: 2.5rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
/* 3XL - 1920px*/
@media (min-width: 120rem) {
  .home-container {
    margin-inline: 11.25rem;
    margin-block: 5.5rem;
    gap: 6rem;
  }
  :deep(.category) {
    font-size: 6.25rem;
    gap: 3rem;
    filter: drop-shadow(0.315rem 0.315rem 0 var(--color-violet));
  }
  :deep(.icon) {
    margin-bottom: 1.5rem;
  }
}
/* 4XL - 2560px*/
@media (min-width: 160rem) {
  .home-container {
    gap: 7.5rem;
  }
  :deep(.category) {
    margin-bottom: 2rem;
    gap: 3.5rem;
    font-size: 11.25rem;
  }
}
/*  5XL - 3840px*/
@media (min-width: 240rem) {
  .home-container {
    margin-inline: 13.75rem;
    margin-block: 8.25rem;
    gap: 13.75rem;
  }
  :deep(.category) {
    font-size: 10rem;
    filter: drop-shadow(0.45rem 0.45rem 0 var(--color-violet));
  }
  :deep(.project-grid) {
    gap: 3.75rem;
  }
}
</style>
