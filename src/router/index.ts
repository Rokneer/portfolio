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
    path: "/portfolio/masquerade",
    name: "masquerade",
    component: Masquerade,
  },
  {
    path: "/portfolio/potion-rush",
    name: "potion-rush",
    component: PotionRush,
  },
  {
    path: "/portfolio/souls-of-light",
    name: "souls-of-light",
    component: SoulsOflight,
  },
  {
    path: "/portfolio/un-recuerdo",
    name: "un-recuerdo",
    component: UnRecuerdo,
  },
  {
    path: "/portfolio/voltron-infographic",
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
