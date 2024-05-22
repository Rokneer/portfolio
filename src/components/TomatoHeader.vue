<template>
  <div
    class="animate__animated animate__faster fixed z-40 w-full"
    :class="`${showHeader ? 'animate__fadeInDown' : 'animate__fadeOutUp'}`"
  >
    <nav
      class="flex flex-row items-center justify-start bg-tertiary-200 p-3 shadow-sm shadow-tertiary-400 sm:px-4 md:px-6 lg:px-12 xl:px-24"
    >
      <div class="flex w-full flex-row items-center sm:pr-2">
        <router-link class="pr-4 lg:pr-12" :to="{ name: 'projects' }">
          <img
            class="h-8 w-full transition hover:scale-105 sm:h-10"
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
        <div class="flex flex-row items-center gap-2 lg:gap-4">
          <a
            class="flex"
            href="https://rokneer.itch.io/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="h-7 w-full transition hover:scale-105 sm:h-[2.3rem]"
              src="/common/itchio-logo-textless-white.png"
              alt="itch.io"
              width="225"
              height="225"
            />
          </a>
          <a
            class="flex"
            href="https://github.com/Rokneer"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="h-7 w-full transition hover:scale-105 sm:h-[2.3rem]"
              src="/common/github-white.png"
              alt="GitHub"
              width="225"
              height="225"
            />
          </a>
          <a
            class="flex"
            href="https://www.linkedin.com/in/alejandro-hincapie/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="h-7 w-full transition hover:scale-105 sm:h-[2.3rem]"
              src="/common/linkedin.png"
              alt="LinkedIn"
              width="225"
              height="225"
            />
          </a>
        </div>
      </div>
      <icon
        class="mx-2 flex text-2xl transition hover:scale-110 sm:hidden"
        icon="mdi-menu"
        clickable
        @click="showSideMenu = true"
      />
      <div
        class="hidden justify-end gap-1 text-xs font-semibold sm:flex sm:text-sm md:text-base"
      >
        <router-link :to="{ name: 'projects' }">
          <basic-button
            class="rounded-2xl px-2 py-1 uppercase sm:px-4 md:px-6 lg:mx-2 lg:px-10 xl:px-16"
          >
            Projects
          </basic-button>
        </router-link>
        <router-link :to="{ name: 'about' }">
          <basic-button
            class="rounded-2xl px-2 py-1 uppercase sm:px-4 md:px-6 lg:mx-2 lg:px-10 xl:px-16"
          >
            About
          </basic-button>
        </router-link>
        <router-link :to="{ name: 'contact' }">
          <basic-button
            class="rounded-2xl px-2 py-1 uppercase sm:px-4 md:px-6 lg:mx-2 lg:px-10 xl:px-16"
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
            <router-link :to="{ name: 'projects' }">
              <basic-button
                class="navbar-close flex rounded-2xl p-4 text-4xl font-bold uppercase hover:scale-110 hover:text-secondary-200"
                type="text"
                @click="showSideMenu = false"
              >
                Projects
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
import { BasicButton, Icon } from ".";

// Reactivity
const showSideMenu = ref(false);
const showHeader = ref(true);
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
