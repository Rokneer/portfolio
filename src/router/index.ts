import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from "@/views/404.vue";
import ProjectDescription from "@/views/ProjectDescription.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/project/:project",
    name: ":project",
    component: ProjectDescription,
    props: true,
  },
  {
    path: "/:pathName(.*)",
    name: "404",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      const targetElement = document.getElementById(to.hash.slice(1));
      if (targetElement) {
        const scrollMargin = parseFloat(
          getComputedStyle(targetElement).scrollMarginTop,
        );
        return {
          el: targetElement,
          top: scrollMargin,
          behavior: "smooth",
        };
      }
    }
    return savedPosition || { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
