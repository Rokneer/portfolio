<template>
  <footer>
    <div
      class="flex flex-col items-center bg-gradient-to-t from-tertiary-400 from-40% to-tertiary-500 px-4 pb-6 pt-8"
    >
      <router-link class="pr-4 lg:pr-12" :to="{ name: 'projects' }">
        <div class="w-16 md:w-20">
          <img
            src="/common/tomato-logo.png"
            alt="Tomate Logo"
            width="160"
            heigth="160"
          />
        </div>
      </router-link>
      <div class="mx-8 pt-3 text-center text-xs text-slate-400 sm:text-sm">
        Designed and developed in Vue by Alejandro Hincapie López
      </div>
    </div>
  </footer>
</template>
