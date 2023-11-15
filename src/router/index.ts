import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Portfolio from "../views/Portfolio.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Project from "../views/Project.vue";
import Masquerade from "../views/projects/masquerade.vue";
import NotFound from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/portfolio/:title",
    name: "Project",
    component: Project,
  },
  {
    path: "/portfolio/masquerade",
    name: "Project",
    component: Masquerade,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/:pathName(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes: routes,
});

export default router;
