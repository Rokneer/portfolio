import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Portfolio from "../views/Portfolio.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Masquerade from "../views/projects/masquerade.vue";
import PotionRush from "../views/projects/potionRush.vue";
import SoulsOflight from "../views/projects/soulsOfLight.vue";
import UnRecuerdo from "../views/projects/unRecuerdo.vue";
import VoltronInfographic from "../views/projects/voltronInfographic.vue";
import NotFound from "../views/404.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/projects",
    name: "projects",
    component: Portfolio,
  },
  {
    path: "/projects/masquerade",
    name: "masquerade",
    component: Masquerade,
  },
  {
    path: "/projects/potion-rush",
    name: "potion-rush",
    component: PotionRush,
  },
  {
    path: "/projects/souls-of-light",
    name: "souls-of-light",
    component: SoulsOflight,
  },
  {
    path: "/projects/un-recuerdo",
    name: "un-recuerdo",
    component: UnRecuerdo,
  },
  {
    path: "/projects/voltron-infographic",
    name: "voltron-infographic",
    component: VoltronInfographic,
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
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
