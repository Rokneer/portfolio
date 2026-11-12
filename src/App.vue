<template>
  <div class="app">
    <router-view v-slot="{ Component, route }">
      <nav class="head">
        <router-link
          class="link"
          :to="{ path: '/', hash: '#about' }"
        >
          About
        </router-link>
        <router-link
          class="link"
          :to="{ path: '/', hash: '#projects' }"
        >
          Projects
        </router-link>
        <router-link
          class="link"
          :to="{ path: '/', hash: '#contact' }"
        >
          Contact
        </router-link>
      </nav>
      <transition name="fade">
        <component
          :is="Component"
          :key="route.path"
        />
      </transition>
    </router-view>
  </div>
</template>

<style lang="css" scoped>
.app {
  position: relative;
  height: 100lvh;
  overflow-x: hidden;
  background-color: var(--color-blue);
  color: white;
  font-family: var(--font-overpass);
}
.link {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
}
.link:hover {
  font-size: 1.6rem;
  font-weight: 900;
}
.head {
  z-index: 10;
  position: sticky;
  display: flex;
  top: 0;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 7vh;
  gap: 1rem;
  padding-inline: 4rem;
  background-color: var(--color-violet);
  box-shadow: 0px 5px 1px rgba(129, 68, 191, 0.458);
}
</style>
