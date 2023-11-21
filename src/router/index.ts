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

const baseUrl = import.meta.env.BASE_URL;

const routes = [
  {
    path: baseUrl,
    name: "home",
    component: Home,
  },
  {
    path: `${baseUrl}projects`,
    name: "projects",
    component: Portfolio,
  },
  {
    path: `${baseUrl}projects/masquerade`,
    name: "masquerade",
    component: Masquerade,
  },
  {
    path: `${baseUrl}projects/potion-rush`,
    name: "potion-rush",
    component: PotionRush,
  },
  {
    path: `${baseUrl}projects/souls-of-light`,
    name: "souls-of-light",
    component: SoulsOflight,
  },
  {
    path: `${baseUrl}projects/un-recuerdo`,
    name: "un-recuerdo",
    component: UnRecuerdo,
  },
  {
    path: `${baseUrl}projects/voltron-infographic`,
    name: "voltron-infographic",
    component: VoltronInfographic,
  },
  {
    path: `${baseUrl}about`,
    name: "about",
    component: About,
  },
  {
    path: `${baseUrl}contact`,
    name: "contact",
    component: Contact,
  },
  {
    path: `${baseUrl}:pathName(.*)`,
    name: "not-found",
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
