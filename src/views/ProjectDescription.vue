<template>
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
            <li v-for="(role, index) in PROJECTS[project].roles" :key="index">
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
    <div class="text">
      {{ PROJECTS[project].description }}
    </div>

    <!--* ANALYSIS -->
    <div class="text">
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
        doloremque, quo temporibus aspernatur repellendus expedita dolore porro
        iste labore odio, excepturi ab.
        <br />
        Possimus, quasi! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Ut sunt nulla ex qui sequi maiores. Dolorem suscipit voluptas,
        porro blanditiis illo quos qui rerum. Optio ab enim beatae obcaecati
        labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
        tempore distinctio ratione voluptatibus quisquam perspiciatis ducimus
        consequatur quos totam quae similique quia, soluta doloribus repellendus
        adipisci optio ex quaerat blanditiis! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Recusandae ullam et odio saepe esse vitae
        vero earum minus quaerat repellendus dolore quod, cum maiores omnis,
        cumque iusto sapiente placeat autem! Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
        <br />
        Officiis possimus ad error impedit reiciendis eum aliquid optio atque
        itaque suscipit eius pariatur ipsam, aliquam voluptate unde doloremque,
        perspiciatis laborum id! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Cumque sit aspernatur natus aliquam porro? Eius, aut
        facilis.
        <br />
        Quis, deleniti! Dicta dolorem voluptatem corrupti ut minus reprehenderit
        distinctio nemo asperiores doloremque.
      </slot>
    </div>
  </div>
</template>

<style lang="css" scoped>
/* DEFAULT */
.description-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3.5rem;
  background-image: linear-gradient(
    120deg,
    transparent 30%,
    var(--color-crimson)
  );
}
.header {
  display: flex;
  flex-basis: 25%;
  flex-direction: column;
  align-items: center;
  justify-content: safe center;
  gap: 3rem;
  padding-bottom: 1.5rem;
}
.logo {
  filter: drop-shadow(0.313rem 0.313rem 0 var(--color-violet));
}
.contributions-container {
  display: flex;
  flex-direction: column;
  flex-basis: 75%;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.438rem;
  text-shadow: 0.063rem 0.063rem 0 var(--color-violet);
}
.contribution {
  width: 100%;
  border-radius: 0.25rem;
  background-color: var(--color-crimson);
  padding-inline: 1.5rem;
  padding-block: 1rem;
  box-shadow: 0.313rem 0.313rem 0 var(--color-violet);
}
.contribution-title {
  font-size: 0.875rem;
  font-weight: var(--font-weight-bold);
  text-shadow: 0.063rem 0.063rem 0 var(--color-violet);
}
.contribution-text {
  list-style: inside disc;
  font-size: 0.625rem;
}
.text {
  font-size: 0.625rem;
  text-shadow: 0.063rem 0.063rem 0 var(--color-violet);
}

/* SM - 640px*/
@media (min-width: 40rem) {
  .header {
    flex-direction: column;
  }
  .contributions-container {
    font-size: 0.563rem;
  }
  .contribution-title {
    font-size: 0.75rem;
  }
  .text {
    font-size: 0.75rem;
  }
}
/* MD - 768px*/
@media (min-width: 48rem) {
  .contributions-container {
    font-size: 0.688rem;
  }
  .contribution-title {
    font-size: 0.875rem;
  }
  .text {
    font-size: 0.875rem;
  }
}
/* LG - 1024px*/
@media (min-width: 64rem) {
  .contribution-title {
    font-size: 1rem;
  }
  .text {
    font-size: 1rem;
  }
}
/* XL - 1280px*/
@media (min-width: 80rem) {
  .contributions-container {
    font-size: 0.75rem;
  }
}
/* 2XL - 1536px*/
@media (min-width: 96rem) {
  .contributions-container {
    font-size: 1.5rem;
    text-shadow: 0.125rem 0.125rem 0 var(--color-violet);
  }
  .contribution-title {
    font-size: 2.5rem;
    text-shadow: 0.188rem 0.188rem 0 var(--color-violet);
  }
  .text {
    font-size: 2.5rem;
    text-shadow: 0.188rem 0.188rem 0 var(--color-violet);
  }
}
/* 3XL - 191.25rem*/
@media (min-width: 120rem) {
  .contributions-container {
    font-size: 2.25rem;
  }
  .contribution-title {
    font-size: 3.125rem;
  }
  .text {
    font-size: 3.125rem;
  }
}
/* 4XL - 2560px*/
@media (min-width: 160rem) {
  .contributions-container {
    font-size: 2.625rem;
  }
  .contribution-title {
    font-size: 4.063rem;
  }
  .text {
    font-size: 3.438rem;
  }
}
</style>

<script setup lang="ts">
import PROJECTS from "@/utils/projects";

const props = defineProps<{ project: string }>();
</script>
