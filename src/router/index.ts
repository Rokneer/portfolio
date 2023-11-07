import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Portfolio from "../views/projects/Portfolio.vue";
import Masquerade from "../views/projects/Masquerade.vue";
import PotionRush from "../views/projects/PotionRush.vue";
import SoulsOfLight from "../views/projects/SoulsOfLight.vue";
import UnRecuerdo from "../views/projects/UnRecuerdo.vue";
import VoltronInfographic from "../views/projects/VoltronInfographic.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

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
    name: "Masquerade",
    component: Masquerade,
  },
  {
    path: "/portfolio/potion-rush",
    name: "Potion Rush",
    component: PotionRush,
  },
  {
    path: "/portfolio/souls-of-light",
    name: "Souls of Light",
    component: SoulsOfLight,
  },
  {
    path: "/portfolio/un-recuerdo",
    name: "Un Recuerdo",
    component: UnRecuerdo,
  },
  {
    path: "/portfolio/voltron-infographic",
    name: "Voltron Infographic",
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
];

const router = createRouter({
  history: createWebHistory(""),
  routes: routes,
});

export default router;
