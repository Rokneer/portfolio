<template>
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
</template>

<style lang="css" scoped>
/* DEFAULT */
.link {
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
}
.link:hover {
  font-size: 1.2rem;
  font-weight: 900;
}
.head {
  z-index: 10;
  height: 6vh;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-inline: auto;
  background-color: var(--violet);
  box-shadow: 0px 2px 2px #311f4c4d;
}
@media (prefers-reduced-motion: reduce) {
  .link {
    transition: none;
  }
}
/* SM - 640px*/
@media (min-width: 40rem) {
  .head {
    box-shadow: 0px 3px 2px #311f4c4d;
  }
  .link {
    font-size: 1.5rem;
  }
  .link:hover {
    font-size: 1.6rem;
  }
}
/* LG - 1024px*/
@media (min-width: 64rem) {
  .head {
    justify-content: start;
    padding-inline: 5rem;
    box-shadow: 0px 5px 2px #311f4c4d;
  }
  .link {
    font-size: 1.6rem;
  }
  .link:hover {
    font-size: 1.75rem;
  }
}
/* 2XL - 1536px*/
@media (min-width: 96rem) {
  .head {
    gap: 2rem;
    padding-inline: 6rem;
  }
  .link {
    font-size: 2.25rem;
  }
  .link:hover {
    font-size: 2.5rem;
  }
}
/* 4XL - 2560px*/
@media (min-width: 160rem) {
  .head {
    padding-inline: 8rem;
  }
  .link {
    font-size: 2.75rem;
  }
  .link:hover {
    font-size: 3rem;
  }
}
</style>
