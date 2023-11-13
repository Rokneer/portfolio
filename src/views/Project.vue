<template>
  <div class="flex flex-col items-center text-center text-white">
    <img
      class="animate__animated animate__fadeInDown max-w-[26rem] object-scale-down p-4"
      :src="`../${projects[projectName].title}/${projects[projectName].title}-logo.png`"
      :alt="`${projectName.replace(/_/g, ' ')} logo`"
    />
    <!--  <div
      class="animate__animated animate__fadeInDown my-3 w-full bg-gradient-to-l from-tertiary-500 from-20% via-tertiary-300 to-tertiary-500 to-80% p-2 text-5xl lg:my-6 lg:text-6xl"
    >
      {{
        projectName
          .replace(/_/g, " ")
          .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
      }}
    </div> -->
    <div
      class="animate__animated animate__fadeInDown text-md w-10/12 py-4 lg:text-2xl"
    >
      {{ projects[projectName].long_description }}
    </div>
    <div
      class="animate__animated animate__fadeInDown w-10/12 py-4 text-sm lg:text-xl"
    >
      {{ projects[projectName].role }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { projects } from "..";
import { useRoute } from "vue-router";

const route = useRoute();
const projectName = computed(() => {
  if (typeof route.params.title === "string")
    return route.params.title.replace(/-/g, "_");
  else return "";
});
</script>
