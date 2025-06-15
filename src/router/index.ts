import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/404.vue";

const routes = [
  {
    path: "/",
    name: "projects",
    component: Home,
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
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
