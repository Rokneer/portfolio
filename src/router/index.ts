import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from "@/views/404.vue";
import ProjectDescription from "@/views/ProjectDescription.vue";

const routes = [
  {
    path: "/",
    name: "projects",
    component: Home,
    meta: { transition: "" },
  },
  {
    path: "/project/:project",
    name: ":project",
    component: ProjectDescription,
    props: true,
    meta: { transition: "" },
  },
  {
    path: "/:pathName(.*)",
    name: "404",
    component: NotFound,
    meta: { transition: "" },
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
