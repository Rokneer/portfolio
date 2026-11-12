<template>
  <router-link
    :to="'project/' + project.name"
    class="project-container group test"
  >
    <img
      :src="project.cover.src"
      :alt="project.cover.alt"
      class="project-cover group test"
    />
    <div class="description group test">
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

defineProps<{ project: Project }>();
</script>

<style lang="css" scoped>
/* DEFAULT */
test:hover {
  filter: blur(1.5px) brightness(40%);
}
.project-container {
  width: 100%;
  height: 100%;
  cursor: pointer;
  box-shadow: 0.25rem 0.25rem 0 var(--violet);
  transition: all 0.2s ease-in-out;
  animation: rotateIn 0.3s forwards;
}
.project-container:hover {
  animation: rotateOut 0.3s forwards;
  box-shadow: 0.5rem 0.5rem 0 var(--crimson);
}
.project-cover {
  width: 100%;
  height: 100%;
}
.project-container:hover .project-cover {
  filter: blur(1.5px) brightness(40%);
}
.description {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0%;
  padding: 1rem;
  font-size: 0.7rem;
  color: white;
  transition: all 0.2s ease-in-out;
  text-shadow: 0.03rem 0.03rem 0 var(--amaranth);
}
.project-container:hover .description {
  opacity: 100%;
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
  font-size: 0.95rem;
  font-weight: bold;
  text-shadow: 0.065rem 0.065rem 0 var(--amaranth);
}
.list {
  list-style: disc inside;
}
.engine-logo {
  width: 65%;
  filter: drop-shadow(0.065rem 0.065rem 0 var(--amaranth));
}
.category-column {
  width: 100%;
  display: flex;
  flex-direction: column;
}
@media (prefers-reduced-motion: reduce) {
  .project-container {
    transition: none;
    animation: none;
  }
  .project-container:hover {
    animation: none;
  }
  .description {
    transition: none;
  }
}
/* SM - 640px*/
@media (min-width: 40rem) {
  .description {
    padding: 1.5rem;
    font-size: 1.2rem;
    text-shadow: 0.065rem 0.065rem 0 var(--amaranth);
  }
  .project-text {
    font-size: 1.625rem;
    text-shadow: 0.125rem 0.125rem 0 var(--amaranth);
  }
  .engine-logo {
    filter: drop-shadow(0.125rem 0.125rem 0 var(--amaranth));
  }
}
/* MD - 768px*/
@media (min-width: 48rem) {
  .description {
    padding: 2rem;
    font-size: 1.45rem;
  }
  .project-text {
    font-size: 2rem;
  }
}
/* LG - 1024px*/
@media (min-width: 64rem) {
  .project-container {
    box-shadow: 0.375rem 0.375rem 0 var(--violet);
  }
  .project-container:hover {
    box-shadow: 0.75rem 0.75rem 0 var(--crimson);
  }
  .description {
    padding: 3rem;
    font-size: 1.875rem;
  }
  .project-text {
    font-size: 2.8rem;
  }
}
/* XL - 1280px*/
@media (min-width: 80rem) {
  .project-container {
    box-shadow: 0.5rem 0.5rem 0 var(--violet);
  }
  .project-container:hover {
    box-shadow: 1rem 1rem 0 var(--crimson);
  }
  .description {
    padding: 4.5rem;
    font-size: 2.25rem;
    text-shadow: 0.125rem 0.125rem 0 var(--amaranth);
  }
  .project-text {
    font-size: 3.25rem;
    text-shadow: 0.2rem 0.2rem 0 var(--amaranth);
  }
  .engine-logo {
    filter: drop-shadow(0.2rem 0.2rem 0 var(--amaranth));
  }
}
/* 2XL - 1536px*/
@media (min-width: 96rem) {
  .project-container {
    box-shadow: 0.625rem 0.625rem 0 var(--violet);
  }
  .project-container:hover {
    box-shadow: 1.125rem 1.125rem 0 var(--crimson);
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
    box-shadow: 0.75rem 0.75rem 0 var(--violet);
  }
  .project-container:hover {
    box-shadow: 1.25rem 1.125rem 0 var(--crimson);
  }
  .description {
    padding: 3.5rem;
    font-size: 2.2rem;
  }
  .project-text {
    font-size: 3.45rem;
  }
}
/*  5XL - 3840px*/
@media (min-width: 240rem) {
  .project-container {
    box-shadow: 1rem 1rem 0 var(--violet);
  }
  .project-container:hover {
    box-shadow: 1.5rem 1.5rem 0 var(--crimson);
  }
  .description {
    padding: 6rem;
    font-size: 3.45rem;
  }
  .project-text {
    font-size: 5rem;
  }
}
</style>
