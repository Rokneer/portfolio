<template>
  <div class="flex flex-col items-center gap-8 p-20">
    <div
      class="absolute top-0 left-0 -z-10 h-full w-full bg-linear-to-l from-amaranth from-0%"
    />
    <div class="flex w-full flex-row items-center justify-center-safe gap-20">
      <!--* LOGO -->
      <div class="">
        <img
          class="aspect-square"
          :src="project.logo.src"
          :alt="project.logo.alt"
        />
      </div>

      <div class="flex basis-3/4 flex-col">
        <!--* ITCH -->
        <div class="flex w-full" v-if="project.itchCode">
          <iframe
            class="h-44"
            :src="`https://itch.io/embed/${project.itchCode}?bg_color=a9a5d2&amp;border_color=a9a5d2&amp;fg_color=ffffff&amp;link_color=e42038`"
            width="60%"
          />
        </div>

        <div
          class="flex flex-row gap-8 text-[6px] text-shadow-1 text-shadow-violet xs:text-[7px] sm:text-[9px] md:text-[11px] xl:text-[12px] 2xl:text-[24px] 2xl:text-shadow-2 3xl:text-[36px] 4xl:text-[42px]"
        >
          <!--* ROLES -->
          <div class="flex-2/6 p-4">
            <div
              class="text-[9px] font-bold text-shadow-1 text-shadow-violet sm:text-[12px] md:text-[14px] lg:text-[16px] 2xl:text-[40px] 2xl:text-shadow-3 3xl:text-[50px] 4xl:text-[65px]"
            >
              Worked as
            </div>
            <ul class="list-inside list-disc">
              <li v-for="(role, index) in project.roles" :key="index">
                {{ role }}
              </li>
            </ul>
          </div>

          <!--* CONTRIBUTIONS -->
          <div class="flex-4/6 p-4">
            <div
              class="text-[9px] font-bold text-shadow-1 text-shadow-violet sm:text-[12px] md:text-[14px] lg:text-[16px] 2xl:text-[40px] 2xl:text-shadow-3 3xl:text-[50px] 4xl:text-[65px]"
            >
              Doing
            </div>
            <ul class="list-inside list-disc">
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
    </div>

    <!--* DESCRIPTION -->
    <div
      class="w-full text-[9px] text-shadow-1 text-shadow-violet sm:text-[12px] md:text-[14px] lg:text-[16px] 2xl:text-[40px] 2xl:text-shadow-3 3xl:text-[50px] 4xl:text-[55px]"
    >
      {{ project.description }}
    </div>

    <!--* ANALYSIS -->
    <div
      class="w-full text-[9px] text-shadow-1 text-shadow-violet sm:text-[12px] md:text-[14px] lg:text-[16px] 2xl:text-[40px] 2xl:text-shadow-3 3xl:text-[50px] 4xl:text-[55px]"
    >
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
<script setup lang="ts">
import type { Project } from "@/types";

const props = defineProps<{ project: Project }>();
</script>
