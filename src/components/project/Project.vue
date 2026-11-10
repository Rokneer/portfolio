<template>
  <router-link
    :to="'project/' + project.name"
    class="project-container group motion-rotate-in-1 hover:motion-rotate-out-1"
  >
    <img
      :src="project.cover.src"
      :alt="project.cover.alt"
      class="project-blur group-hover:blur-[0.063rem] group-hover:brightness-40"
    />
    <div class="description group-hover:opacity-100">
      <div class="project-row">
        <div class="project-column">
          <div>
            <div class="project-text">Worked as</div>
            <ul class="list">
              <li v-for="(role, index) in project.roles" :key="index">
                {{ role }}
              </li>
            </ul>
          </div>
          <div class="category-column">
            <div class="project-text">Made with</div>
            <img
              class="engine-logo"
              :src="project.platform.src"
              :alt="project.platform.alt"
            />
          </div>
        </div>

        <div class="category-column">
          <div class="project-text">Doing</div>
          <ul class="list">
            <li
              v-for="(contribution, index) in project.contributions"
              :key="index"
            >
              {{ contribution }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { Project } from "@/types";

const props = defineProps<{ project: Project }>();
</script>

<style lang="css" scoped>
/* DEFAULT */
.project-container {
  aspect-ratio: 16 / 9 auto;
  position: relative;
  cursor: pointer;
  box-shadow: 0.25rem 0.25rem 0 var(--color-violet);
  transition: all 200ms ease-in-out;
}
.project-container:hover {
  box-shadow: 0.5rem 0.5rem 0 var(--color-crimson);
}
.project-blur {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.description {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: color-mix(in oklab, var(--color-amaranth) 15%, transparent);
  opacity: 0%;
  padding: 1rem;
  font-size: 0.688rem;
  transition: all 200ms ease-in-out;
  text-shadow: 0.031rem 0.031rem 0 var(--color-amaranth);
}
.project-row {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.project-column {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}
.project-text {
  font-size: 0.938rem;
  font-weight: var(--font-weight-bold);
  text-shadow: 0.063rem 0.063rem 0 var(--color-amaranth);
}
.list {
  list-style: disc inside;
}
.engine-logo {
  width: 65%;
  filter: drop-shadow(0.063rem 0.063rem 0 var(--color-amaranth));
}
.category-column {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* SM - 640px*/
@media (min-width: 40rem) {
  .description {
    padding: 1.5rem;
    font-size: 1.188rem;
    text-shadow: 0.063rem 0.063rem 0 var(--color-amaranth);
  }
  .project-text {
    font-size: 1.625rem;
    text-shadow: 0.125rem 0.125rem 0 var(--color-amaranth);
  }
  .engine-logo {
    filter: drop-shadow(0.125rem 0.125rem 0 var(--color-amaranth));
  }
}
/* MD - 768px*/
@media (min-width: 48rem) {
  .description {
    padding: 2rem;
    font-size: 1.438rem;
  }
  .project-text {
    font-size: 2rem;
  }
}
/* LG - 1024px*/
@media (min-width: 64rem) {
  .project-container {
    box-shadow: 0.375rem 0.375rem 0 var(--color-violet);
  }
  .project-container:hover {
    box-shadow: 0.75rem 0.75rem 0 var(--color-crimson);
  }
  .description {
    padding: 3rem;
    font-size: 1.875rem;
  }
  .project-text {
    font-size: 2.813rem;
  }
}
/* XL - 1280px*/
@media (min-width: 80rem) {
  .project-container {
    box-shadow: 0.5rem 0.5rem 0 var(--color-violet);
  }
  .project-container:hover {
    box-shadow: 1rem 1rem 0 var(--color-crimson);
  }
  .description {
    padding: 4.5rem;
    font-size: 2.25rem;
    text-shadow: 0.125rem 0.125rem 0 var(--color-amaranth);
  }
  .project-text {
    font-size: 3.25rem;
    text-shadow: 0.188rem 0.188rem 0 var(--color-amaranth);
  }
  .engine-logo {
    filter: drop-shadow(0.188rem 0.188rem 0 var(--color-amaranth));
  }
}
/* 2XL - 1536px*/
@media (min-width: 96rem) {
  .project-container {
    box-shadow: 0.625rem 0.625rem 0 var(--color-violet);
  }
  .project-container:hover {
    box-shadow: 1.125rem 1.125rem 0 var(--color-crimson);
  }
  .description {
    padding: 2.5rem;
    font-size: 1.625rem;
  }
  .project-column {
    row-gap: 1.25rem;
  }
  .project-text {
    font-size: 2.5rem;
  }
}
/* 4XL - 2560px*/
@media (min-width: 160rem) {
  .project-container {
    box-shadow: 0.75rem 0.75rem 0 var(--color-violet);
  }
  .project-container:hover {
    box-shadow: 1.25rem 1.125rem 0 var(--color-crimson);
  }
  .description {
    padding: 3.5rem;
    font-size: 2.188rem;
  }
  .project-text {
    font-size: 3.438rem;
  }
}
/*  5XL - 3840px*/
@media (min-width: 240rem) {
  .project-container {
    box-shadow: 1rem 1rem 0 var(--color-violet);
  }
  .project-container:hover {
    box-shadow: 1.5rem 1.5rem 0 var(--color-crimson);
  }
  .description {
    padding: 6rem;
    font-size: 3.438rem;
  }
  .project-text {
    font-size: 5rem;
  }
}
</style>
