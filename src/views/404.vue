<template>
  <div class="error-container">
    <div class="error-title motion-preset-shake">¡404!</div>
    <div class="error-description">
      <div class="error-text">
        Whoops! Couldn't find the page you were looking for.
      </div>
      <div class="error-text">
        How about we go back
        <router-link class="home-link" :to="{ name: 'projects' }">
          home
        </router-link>
        ? :)
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
/* DEFAULT */
.error-container {
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  text-align: center;
}
.error-title {
  font-size: 6.25rem;
  font-weight: bolder;
  text-shadow: 0.375rem 0.375rem 0 var(--crimson);
}
.error-description {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 2.5rem;
}
.error-text {
  font-weight: bold;
  text-shadow: 0.2rem 0.2rem 0 var(--violet);
}
.home-link {
  display: inline-block;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}
.home-link:hover {
  font-size: 3.125rem;
  font-weight: bold;
  text-shadow: 0.315rem 0.315rem 0 var(--crimson);
}
@media (prefers-reduced-motion: reduce) {
  .home-link {
    transition: none;
  }
}
/* MD - 768px*/
@media (min-width: 48rem) {
  .error-container {
    padding: 2rem;
  }
  .error-title {
    font-size: 12.5rem;
    text-shadow: 0.5rem 0.5rem 0 var(--crimson);
  }
  .error-description {
    font-size: 3.125rem;
  }
  .error-text {
    text-shadow: 0.25rem 0.25rem 0 var(--violet);
  }
  .home-link:hover {
    font-size: 3.75rem;
  }
}
/* XL - 1280px*/
@media (min-width: 80) {
  .error-container {
    padding: 5rem;
  }
  .error-title {
    font-size: 15.625rem;
    text-shadow: 0.625rem 0.625rem 0 var(--crimson);
  }
  .error-description {
    font-size: 4.063rem;
  }
  .home-link:hover {
    font-size: 4.688rem;
    text-shadow: 0.375rem 0.375rem 0 var(--crimson);
  }
}
/* 4XL - 2560px*/
@media (min-width: 160) {
  .error-container {
    padding: 8.5rem;
  }
  .error-title {
    font-size: 25rem;
    text-shadow: 1.25rem 1.25rem 0 var(--crimson);
  }
  .error-description {
    font-size: 5rem;
  }
  .error-text {
    text-shadow: 0.375rem 0.375rem 0 var(--violet);
  }
  .home-link:hover {
    font-size: 6.25rem;
    text-shadow: 0.5rem 0.5rem 0 var(--crimson);
  }
}
/*  5XL - 3840px*/
@media (min-width: 240) {
  .error-title {
    font-size: 37.5rem;
    text-shadow: 1.875rem 1.875rem 0 var(--crimson);
  }
  .error-description {
    font-size: 6.25rem;
  }
  .error-text {
    text-shadow: 0.5rem 0.5rem 0 var(--violet);
  }
  .home-link:hover {
    font-size: 11.25rem;
    text-shadow: 0.625rem 0.625rem 0 var(--crimson);
  }
}
</style>
