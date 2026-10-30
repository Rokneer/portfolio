<template>
  <div class="flex flex-col items-center gap-8 p-20">
    <div
      class="absolute top-0 left-0 -z-10 size-full bg-linear-120 from-30% to-crimson"
    />
    <div
      class="flex basis-1/4 flex-row items-center justify-center-safe gap-20"
    >
      <!--* LOGO -->
      <div class="">
        <img
          class="drop-shadow-violet drop-shadow-5"
          :src="PROJECTS[project].logo.src"
          :alt="PROJECTS[project].logo.alt"
        />
      </div>
      <div
        class="flex basis-3/4 flex-col gap-8 text-[6px] text-shadow-1 text-shadow-violet xs:text-[7px] sm:text-[9px] md:text-[11px] xl:text-[12px] 2xl:text-[24px] 2xl:text-shadow-2 3xl:text-[36px] 4xl:text-[42px]"
      >
        <!--* ROLES -->
        <div
          class="w-fit rounded-sm bg-crimson bg-linear-to-l px-10 py-4 shadow-10 shadow-violet"
        >
          <div
            class="text-[9px] font-bold text-shadow-1 text-shadow-violet sm:text-[12px] md:text-[14px] lg:text-[16px] 2xl:text-[40px] 2xl:text-shadow-3 3xl:text-[50px] 4xl:text-[65px]"
          >
            Worked as
          </div>
          <ul class="list-inside list-disc">
            <li v-for="(role, index) in PROJECTS[project].roles" :key="index">
              {{ role }}
            </li>
          </ul>
        </div>

        <!--* CONTRIBUTIONS -->
        <div
          class="w-fit rounded-sm bg-crimson px-10 py-4 shadow-10 shadow-violet"
        >
          <div
            class="text-[9px] font-bold text-shadow-1 text-shadow-violet sm:text-[12px] md:text-[14px] lg:text-[16px] 2xl:text-[40px] 2xl:text-shadow-3 3xl:text-[50px] 4xl:text-[65px]"
          >
            Doing
          </div>
          <ul class="list-inside list-disc">
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
    <div
      class="w-full text-[9px] text-shadow-1 text-shadow-violet sm:text-[12px] md:text-[14px] lg:text-[16px] 2xl:text-[40px] 2xl:text-shadow-3 3xl:text-[50px] 4xl:text-[55px]"
    >
      {{ PROJECTS[project].description }}
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
import PROJECTS from "@/utils/projects";

const props = defineProps<{ project: string }>();
</script>
