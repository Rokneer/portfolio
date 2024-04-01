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
      class="flex flex-row flex-wrap items-center justify-between bg-tertiary-200 p-3 shadow-sm shadow-tertiary-400 sm:px-4 md:px-6 lg:px-12 xl:px-24"
    >
      <router-link
        class="flex shrink cursor-pointer justify-start sm:pr-2"
        :to="{ name: 'home' }"
      >
        <img
          class="h-8 w-full transition content-visibility-auto hover:scale-105 sm:h-10"
          src="/common/tomato-horizontal-960x.png"
          srcset="
            /common/tomato-horizontal-960x.png 960w,
            /common/tomato-horizontal-380x.png 380w
          "
          sizes="(min-width: 640px) 171px, 137px"
          alt="Tomato Logo"
          width="960"
          height="225"
        />
      </router-link>
      <icon
        class="mx-2 flex text-2xl transition hover:scale-110 sm:hidden"
        icon="mdi-menu"
        clickable
        @click="showSideMenu = true"
      />
      <div
        class="hidden justify-end text-xs font-semibold sm:flex sm:text-sm md:text-base"
      >
        <router-link :to="{ name: 'home' }">
          <basic-button
            class="mx-0.5 rounded-2xl px-2 py-1 uppercase sm:mx-1 sm:px-4 md:px-6 lg:mx-2 lg:px-10 xl:px-16"
          >
            Home
          </basic-button>
        </router-link>
        <span
          class="group flex flex-col items-center justify-center"
          @mouseleave="isHoveringPortfolio = false"
        >
          <router-link :to="{ name: 'projects' }">
            <basic-button
              class="mx-0.5 rounded-2xl px-2 py-1 uppercase sm:mx-1 sm:px-4 md:px-6 lg:mx-2 lg:px-10 xl:px-16"
              tabindex="1"
              @mouseover="isHoveringPortfolio = true"
            >
              Portfolio
            </basic-button>
          </router-link>
          <transition
            v-if="!isMobile"
            enter-active-class="animate__animated animate__fadeIn animate__faster"
            leave-active-class="animate__animated animate__fadeOut animate__faster"
            @mouseover="isHoveringPortfolio = true"
          >
            <span
              v-if="isHoveringPortfolio"
              class="absolute top-8 z-50 pt-2 sm:top-12"
            >
              <ul
                class="flex flex-col justify-center rounded-b-xl bg-gradient-to-t from-tertiary-400 from-85% to-tertiary-200 to-95% px-2 py-1 sm:px-3 sm:py-2"
              >
                <li
                  v-for="(project, index) in Projects"
                  :key="index"
                  class="py-1.5"
                >
                  <router-link :to="{ name: `${project.title}` }">
                    <basic-button
                      class="w-20 rounded-xl p-0.5 text-[9.6px] uppercase sm:w-28 sm:rounded-2xl sm:py-1 sm:text-xs md:w-32 md:text-sm lg:w-48 xl:text-base"
                    >
                      {{ project.title.replace(/-/g, " ") }}
                    </basic-button>
                  </router-link>
                </li>
              </ul>
            </span>
          </transition>
        </span>
        <router-link :to="{ name: 'about' }">
          <basic-button
            class="mx-0.5 rounded-2xl px-2 py-1 uppercase sm:mx-1 sm:px-4 md:px-6 lg:mx-2 lg:px-10 xl:px-16"
          >
            About
          </basic-button>
        </router-link>
        <router-link :to="{ name: 'contact' }">
          <basic-button
            class="mx-0.5 rounded-2xl px-2 py-1 uppercase sm:mx-1 sm:px-4 md:px-6 lg:mx-2 lg:px-10 xl:px-16"
          >
            Contact
          </basic-button>
        </router-link>
      </div>
    </nav>
  </div>
  <div class="navbar-menu relative z-50">
    <transition
      enter-active-class="animate__animated animate__slideInLeft"
      leave-active-class="animate__animated animate__slideOutLeft"
    >
      <nav
        v-if="showSideMenu"
        class="fixed bottom-0 left-0 top-0 flex w-full flex-col overflow-y-auto bg-gradient-to-t from-tertiary-400/95 from-40% to-tertiary-500/95 p-8"
      >
        <Icon
          class="navbar-close flex self-end rounded-full text-4xl"
          icon="mdi-close"
          clickable
          button
          @click="showSideMenu = false"
        />
        <ul class="flex h-full flex-col items-center justify-center">
          <li class="py-4">
            <router-link :to="{ name: 'home' }">
              <basic-button
                class="navbar-close flex rounded-2xl p-4 text-4xl font-bold uppercase hover:scale-110 hover:text-secondary-200"
                type="text"
                @click="showSideMenu = false"
              >
                Home
              </basic-button>
            </router-link>
          </li>
          <li class="py-4">
            <router-link :to="{ name: 'projects' }">
              <basic-button
                class="navbar-close flex rounded-2xl p-4 text-4xl font-bold uppercase hover:scale-110 hover:text-secondary-200"
                type="text"
                @click="showSideMenu = false"
              >
                Portfolio
              </basic-button>
            </router-link>
          </li>
          <li class="py-4">
            <router-link :to="{ name: 'about' }">
              <basic-button
                class="navbar-close flex rounded-2xl p-4 text-4xl font-bold uppercase hover:scale-110 hover:text-secondary-200"
                type="text"
                @click="showSideMenu = false"
              >
                About
              </basic-button>
            </router-link>
          </li>
          <li class="py-4">
            <router-link :to="{ name: 'contact' }">
              <basic-button
                class="navbar-close flex rounded-2xl p-4 text-4xl font-bold uppercase hover:scale-110 hover:text-secondary-200"
                type="text"
                @click="showSideMenu = false"
              >
                Contact
              </basic-button>
            </router-link>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import isMobile from "../utils/isMobile";
import Projects from "../utils/projects";
import BasicButton from "./BasicButton.vue";
import Icon from "./Icon.vue";

// State
const showSideMenu = ref(false);
const showHeader = ref(true);
const isHoveringPortfolio = ref(false);
const lastScrollPosition = ref(0);
const scrollOffset = 40;

// Lifecycle
onMounted(() => window.addEventListener("scroll", onScroll));

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

// Functions
function onScroll() {
  if (window.scrollY < 0) return;
  if (Math.abs(window.scrollY - lastScrollPosition.value) < scrollOffset)
    return;
  showHeader.value = window.scrollY < lastScrollPosition.value;
  lastScrollPosition.value = window.scrollY;
}
</script>
