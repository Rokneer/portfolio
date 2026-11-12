<template>
  <div class="gradient">
    <div class="description-container">
      <div class="header">
        <!--* LOGO -->
        <img
          class="logo"
          :src="PROJECTS[project].logo.src"
          :alt="PROJECTS[project].logo.alt"
        />
        <div class="contributions-container">
          <!--* ROLES -->
          <div class="contribution">
            <div class="contribution-title">Worked as</div>
            <ul class="contribution-text">
              <li
                v-for="(role, index) in PROJECTS[project].roles"
                :key="index"
              >
                {{ role }}
              </li>
            </ul>
          </div>

          <!--* CONTRIBUTIONS -->
          <div class="contribution">
            <div class="contribution-title">Doing</div>
            <ul class="contribution-text">
              <li
                v-for="(contribution, index) in PROJECTS[project].contributions"
                :key="index"
              >
                {{ contribution }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!--* DESCRIPTION -->
      <div class="general-text">
        {{ PROJECTS[project].description }}
      </div>

      <!--* ANALYSIS -->
      <div class="general-text">
        <slot>
          GAME ANALYSIS
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum iusto
          tempora, eius suscipit ducimus dicta. Explicabo voluptatibus dolore,
          consequatur minima dicta culpa quas, modi ullam, nesciunt ad tenetur
          quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          excepturi ea exercitationem facilis sit sequi dolor veniam, laborum,
          soluta delectus consequatur inventore reiciendis, officiis beatae
          laboriosam fugiat repellat ipsum obcaecati.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          aspernatur. Consectetur commodi id velit autem nulla accusamus modi
          expedita. Molestias ea ipsum enim modi voluptates harum similique
          corrupti maxime quam? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Minima fugiat ipsa nostrum. Ut quas dignissimos
          doloremque, quo temporibus aspernatur repellendus expedita dolore
          porro iste labore odio, excepturi ab.
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PROJECTS from "@/utils/projects";

defineProps<{ project: string }>();
</script>

<style lang="css" scoped>
/* DEFAULT */
.gradient {
  display: flex;
  background-image: linear-gradient(120deg, transparent 30%, var(--crimson));
}
.description-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: 2.5rem;
  margin-block: 3.5rem;
  gap: 2rem;
}
.header {
  display: flex;
  flex-basis: 25%;
  flex-direction: column;
  align-items: center;
  justify-content: safe center;
  gap: 3rem;
  padding-bottom: 1rem;
}
.logo {
  width: 100%;
  filter: drop-shadow(0.315rem 0.315rem 0 var(--violet));
}
.contributions-container {
  display: flex;
  flex-direction: column;
  flex-basis: 75%;
  align-items: center;
  gap: 1.5rem;
}
.contribution {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  background-color: var(--crimson);
  padding-inline: 1.5rem;
  padding-block: 1rem;
  box-shadow: 0.315rem 0.315rem 0 var(--violet);
}
.contribution-title {
  font-size: 1.85rem;
  font-weight: bold;
  text-shadow: 0.1rem 0.1rem 0 var(--violet);
}
.contribution-text {
  list-style: outside disc;
  font-size: 1.35rem;
  padding-left: 1.2rem;
  line-height: 1.75rem;
  text-shadow: 0.065rem 0.065rem 0 var(--violet);
}
.general-text {
  font-size: 1.35rem;
  text-shadow: 0.065rem 0.065rem 0 var(--violet);
}

/* SM - 640px*/
@media (min-width: 40rem) {
  .description-container {
    margin-inline: 3.5rem;
    margin-block: 2.5rem;
    gap: 2.5rem;
  }
  .contribution-title {
    font-size: 2.25rem;
  }
  .contribution-text {
    font-size: 1.55rem;
  }
  .general-text {
    font-size: 1.75rem;
  }
}
/* MD - 768px*/
@media (min-width: 48rem) {
  .description-container {
    margin-inline: 4.5rem;
    margin-block: 3.5rem;
  }
  .contributions-container {
    gap: 3rem;
  }
  .contribution {
    padding-inline: 2.5rem;
    padding-block: 1.5rem;
  }
  .contribution-title {
    font-size: 2.5rem;
  }
  .contribution-text {
    font-size: 1.75rem;
    line-height: 2.25rem;
  }
}
/* LG - 1024px*/
@media (min-width: 64rem) {
  .description-container {
    margin-inline: 6.5rem;
    margin-block: 4rem;
  }
  .contribution {
    width: 85%;
    padding-inline: 3.5rem;
    padding-block: 2.5rem;
    gap: 0.5rem;
  }
  .general-text {
    font-size: 2rem;
  }
}
/* XL - 1280px*/
@media (min-width: 80rem) {
  .description-container {
    margin-inline: 5.5rem;
    margin-block: 5rem;
  }
  .header {
    flex-direction: row;
    padding-bottom: 1.5rem;
  }
  .logo {
    flex-basis: 70%;
  }
  .contribution {
    width: 100%;
    padding-inline: 2.5rem;
    padding-block: 1.25rem;
  }
  .contribution-text {
    font-size: 1.75rem;
    text-shadow: 0.125rem 0.125rem 0 var(--violet);
  }
}
/* 2XL - 1536px*/
@media (min-width: 96rem) {
  .description-container {
    margin-inline: 9.5rem;
    margin-block: 5.5rem;
    gap: 4.5rem;
  }
  .header {
    padding-bottom: 1.5rem;
  }
  .contribution-title {
    font-size: 2.75rem;
    text-shadow: 0.2rem 0.2rem 0 var(--violet);
  }
  .general-text {
    font-size: 2.5rem;
    text-shadow: 0.2rem 0.2rem 0 var(--violet);
  }
}
/* 3XL - 1920px*/
@media (min-width: 120rem) {
  .description-container {
    margin-inline: 12rem;
    gap: 5rem;
  }
  .contribution {
    padding-inline: 3.5rem;
    padding-block: 2.25rem;
  }
  .contribution-title {
    font-size: 3.5rem;
  }
  .contribution-text {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  .general-text {
    font-size: 3.125rem;
  }
}
/* 4XL - 2560px*/
@media (min-width: 160rem) {
  .description-container {
    margin-inline: 13.5rem;
  }
  .header {
    gap: 5.5rem;
  }
  .contribution {
    padding-inline: 4.5rem;
    padding-block: 3.25rem;
  }
  .contribution-title {
    font-size: 4rem;
  }
  .contribution-text {
    font-size: 2.85rem;
    line-height: 3.75rem;
  }
  .general-text {
    font-size: 3.45rem;
  }
}
</style>
