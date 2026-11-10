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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  text-align: center;
}
.error-title {
  font-size: 6.25rem;
  font-weight: var(--font-weight-extrabold);
  text-shadow: 0.375rem 0.375rem 0 var(--color-crimson);
}
.error-description {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 2.5rem;
}
.error-text {
  font-weight: var(--font-weight-bold);
  text-shadow: 0.188rem 0.188rem 0 var(--color-violet);
}
.home-link {
  display: inline-block;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
}
.home-link:hover {
  font-size: 3.125rem;
  font-weight: var(--font-weight-bold);
  text-shadow: 0.313rem 0.313rem 0 var(--color-crimson);
}

/* MD - 768px*/
@media (min-width: 48rem) {
  .error-container {
    padding: 2rem;
  }
  .error-title {
    font-size: 12.5rem;
    text-shadow: 0.5rem 0.5rem 0 var(--color-crimson);
  }
  .error-description {
    font-size: 3.125rem;
  }
  .error-text {
    text-shadow: 0.25rem 0.25rem 0 var(--color-violet);
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
    text-shadow: 0.625rem 0.625rem 0 var(--color-crimson);
  }
  .error-description {
    font-size: 4.063rem;
  }
  .home-link:hover {
    font-size: 4.688rem;
    text-shadow: 0.375rem 0.375rem 0 var(--color-crimson);
  }
}
/* 4XL - 2560px*/
@media (min-width: 160) {
  .error-container {
    padding: 8.5rem;
  }
  .error-title {
    font-size: 25rem;
    text-shadow: 1.25rem 1.25rem 0 var(--color-crimson);
  }
  .error-description {
    font-size: 5rem;
  }
  .error-text {
    text-shadow: 0.375rem 0.375rem 0 var(--color-violet);
  }
  .home-link:hover {
    font-size: 6.25rem;
    text-shadow: 0.5rem 0.5rem 0 var(--color-crimson);
  }
}
/*  5XL - 3840px*/
@media (min-width: 240) {
  .error-title {
    font-size: 37.5rem;
    text-shadow: 1.875rem 1.875rem 0 var(--color-crimson);
  }
  .error-description {
    font-size: 6.25rem;
  }
  .error-text {
    text-shadow: 0.5rem 0.5rem 0 var(--color-violet);
  }
  .home-link:hover {
    font-size: 11.25rem;
    text-shadow: 0.625rem 0.625rem 0 var(--color-crimson);
  }
}
</style>
