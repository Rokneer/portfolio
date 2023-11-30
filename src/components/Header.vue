<template>
  <div
    class="animate__animated sticky top-0 z-40"
    :class="`${
      showHeader
        ? 'animate__fadeInDown animate__faster'
        : 'animate__fadeOutUp animate__faster'
    }`"
  >
    <nav
      class="flex w-full flex-row flex-wrap items-center justify-between bg-tertiary-200 px-2 py-3 shadow-sm shadow-tertiary-400 sm:px-4 md:px-6 lg:px-12 xl:px-24"
    >
      <router-link
        class="flex shrink cursor-pointer justify-start sm:pr-2"
        :to="{ name: 'home' }"
      >
        <img
          class="h-8 w-full text-center text-white transition duration-150 content-visibility-auto hover:scale-105 sm:h-10"
          src="/tomato-horizontal-960x.png"
          srcset="
            /tomato-horizontal-960x.png 960w,
            /tomato-horizontal-380x.png 380w
          "
          sizes="(min-width: 640px) 171px, 137px"
          alt="Tomato Logo"
          width="960"
          height="225"
        />
      </router-link>
      <Icon
        class="mx-2 flex items-center text-2xl text-white transition duration-150 hover:scale-110 sm:hidden"
        icon="mdi-menu"
        clickable
        @click="showSideMenu = true"
      />
      <div
        class="hidden justify-end text-xs font-semibold sm:flex sm:text-sm md:text-base"
      >
        <router-link :to="{ name: 'home' }">
          <Button
            class="mx-0.5 rounded-2xl px-2 py-1 uppercase sm:mx-1 sm:px-4 md:px-6 lg:mx-2 lg:px-10 xl:px-16"
          >
            Home
          </Button>
        </router-link>
        <span class="group flex w-full flex-col items-center justify-center">
          <router-link :to="{ name: 'projects' }">
            <Button
              class="mx-0.5 rounded-2xl px-2 py-1 uppercase sm:mx-1 sm:px-4 md:px-6 lg:mx-2 lg:px-10 xl:px-16"
            >
              Portfolio
            </Button>
          </router-link>
          <span
            class="invisible absolute top-8 z-50 pt-2 sm:top-12"
            :class="{ 'group-hover:visible': !isMobile() }"
          >
            <ul
              class="flex flex-col justify-center rounded-b-xl bg-gradient-to-t from-tertiary-400 from-85% to-tertiary-200 to-95% px-2 py-1 sm:px-3 sm:py-2"
            >
              <li
                v-for="(project, index) in projects"
                :key="index"
                class="py-1.5"
              >
                <router-link
                  :to="{
                    name: `${project.title}`,
                  }"
                >
                  <Button
                    class="w-20 rounded-xl p-0.5 text-[9.6px] uppercase sm:w-28 sm:rounded-2xl sm:py-1 sm:text-xs md:w-32 md:text-sm lg:w-48 xl:text-base"
                  >
                    {{ project.title.replace(/-/g, " ") }}
                  </Button>
                </router-link>
              </li>
            </ul>
          </span>
        </span>
        <router-link :to="{ name: 'about' }">
          <Button
            class="mx-0.5 rounded-2xl px-2 py-1 uppercase sm:mx-1 sm:px-4 md:px-6 lg:mx-2 lg:px-10 xl:px-16"
          >
            About
          </Button>
        </router-link>
        <router-link :to="{ name: 'contact' }">
          <Button
            class="mx-0.5 rounded-2xl px-2 py-1 uppercase sm:mx-1 sm:px-4 md:px-6 lg:mx-2 lg:px-10 xl:px-16"
          >
            Contact
          </Button>
        </router-link>
      </div>
    </nav>
  </div>
  <div
    class="navbar-menu relative z-50"
    :class="[
      { hidden: !showSideMenu },
      `${
        showHeader
          ? 'animate__fadeInDown animate__faster'
          : 'animate__fadeOutUp animate__faster'
      }`,
    ]"
  >
    <nav
      class="animate__animated fixed bottom-0 left-0 top-0 flex w-full flex-col overflow-y-auto bg-gradient-to-t from-tertiary-400/95 from-40% to-tertiary-500/95 p-8"
      :class="{
        animate__slideInLeft: showSideMenu,
        animate__slideOutLeft: !showSideMenu,
      }"
    >
      <Icon
        class="navbar-close flex self-end rounded-full text-4xl text-white"
        icon="mdi-close"
        clickable
        button
        @click="showSideMenu = false"
      />
      <ul class="flex h-full flex-col items-center justify-center">
        <li class="py-4">
          <router-link :to="{ name: 'home' }">
            <Button
              class="navbar-close flex w-full rounded-2xl p-4 text-4xl font-bold uppercase text-white hover:scale-110 hover:text-secondary-200"
              type="text"
              @click="showSideMenu = false"
            >
              Home
            </Button>
          </router-link>
        </li>
        <li class="py-4">
          <router-link :to="{ name: 'projects' }">
            <Button
              class="navbar-close flex w-full rounded-2xl p-4 text-4xl font-bold uppercase text-white hover:scale-110 hover:text-secondary-200"
              type="text"
              @click="showSideMenu = false"
            >
              Portfolio
            </Button>
          </router-link>
        </li>
        <li class="py-4">
          <router-link :to="{ name: 'about' }">
            <Button
              class="navbar-close flex w-full rounded-2xl p-4 text-4xl font-bold uppercase text-white hover:scale-110 hover:text-secondary-200"
              type="text"
              @click="showSideMenu = false"
            >
              About
            </Button>
          </router-link>
        </li>
        <li class="py-4">
          <router-link :to="{ name: 'contact' }">
            <Button
              class="navbar-close flex w-full rounded-2xl p-4 text-4xl font-bold uppercase text-white hover:scale-110 hover:text-secondary-200"
              type="text"
              @click="showSideMenu = false"
            >
              Contact
            </Button>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import { projects, isMobile } from "..";
import Button from "./Button.vue";
import Icon from "./Icon.vue";

const showSideMenu = ref(false);
const showHeader = ref(true);
const lastScrollPosition = ref(0);
const scrollOffset = 40;
onMounted(() => {
  window.addEventListener("scroll", onScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelectorAll(".navbar-menu");
  const close = document.querySelectorAll(".navbar-close");
  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});

// Watchers
watch(showSideMenu, () => {
  if (showSideMenu.value) {
    const scrollY = window.scrollY.toLocaleString();
    document.body.style.overflowY = "hidden";
    document.body.style.top = `-${scrollY}px`;
    return;
  }
  const scrollY = document.body.style.top;
  document.body.style.overflowY = "";
  document.body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
});

// Function
function onScroll() {
  if (window.scrollY < 0) return;
  if (Math.abs(window.scrollY - lastScrollPosition.value) < scrollOffset)
    return;
  showHeader.value = window.scrollY < lastScrollPosition.value;
  lastScrollPosition.value = window.scrollY;
}
</script>
