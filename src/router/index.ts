import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Masquerade from "../views/projects/masquerade.vue";
import CaveDwellers from "../views/projects/caveDwellers.vue";
import FoodForTheSoul from "../views/projects/foodForTheSoul.vue";
import PotionRush from "../views/projects/potionRush.vue";
import SoulsOflight from "../views/projects/soulsOfLight.vue";
import UnRecuerdo from "../views/projects/unRecuerdo.vue";
import VoltronInfographic from "../views/projects/voltronInfographic.vue";
import NotFound from "../views/404.vue";

const routes = [
  {
    path: "/",
    name: "projects",
    component: Home,
  },
  {
    path: "/projects",
    children: [
      {
        path: "masquerade",
        name: "masquerade",
        component: Masquerade,
      },
      {
        path: "cave-dwellers",
        name: "cave-dwellers",
        component: CaveDwellers,
      },
      {
        path: "food-for-the-soul",
        name: "food-for-the-soul",
        component: FoodForTheSoul,
      },
      {
        path: "potion-rush",
        name: "potion-rush",
        component: PotionRush,
      },
      {
        path: "souls-of-light",
        name: "souls-of-light",
        component: SoulsOflight,
      },
      {
        path: "un-recuerdo",
        name: "un-recuerdo",
        component: UnRecuerdo,
      },
      {
        path: "voltron-infographic",
        name: "voltron-infographic",
        component: VoltronInfographic,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
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
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
