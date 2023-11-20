<template>
  <div class="flex flex-col items-center text-center text-white">
    <!-- LOGO -->
    <img
      class="animate__animated animate__fadeInDown max-w-xs object-scale-down p-4 lg:max-w-xl"
      :src="`../voltron-infographic/voltron-infographic-logo.png`"
      :alt="`Voltron Infographic logo`"
    />
    <!-- LONG DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown text-md w-10/12 py-6 lg:text-2xl"
    >
      {{ projects["voltron_infographic"].long_description }}
    </div>
    <!-- SMALL DESCRIPTION -->
    <div
      class="animate__animated animate__fadeInDown text-md flex w-10/12 flex-row items-center justify-center py-6 lg:text-xl"
    >
      <img
        class="mr-4 w-10 text-white lg:w-12"
        src="../../../tomato-single.png"
        alt="Tomate icon"
      />
      <div class="text-left">
        {{ projects["voltron_infographic"].role }}
      </div>
    </div>
    <!-- GAME -->
    <div
      class="flex h-96 w-9/12 justify-center rounded-2xl border-4 border-secondary-200 py-6"
    >
      <div class="text-white">Game goes here</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from "../../.";
</script>
