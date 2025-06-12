import type { Image } from "@/types";

import food1 from "./food1.png";
import food2 from "./food2.png";
import food3 from "./food3.png";
import food4 from "./food4.png";
import food5 from "./food5.png";
import food6 from "./food6.png";

import foodLogo from "./foodLogo.png";
import foodCover from "./foodCover.png";

export { foodLogo, foodCover };

export default [
  {
    src: food1,
    alt: "A first person view of a dilapidated restaurant, the player character is holding a polaroid-like camera and pointing it at a zombie.",
  },
  {
    src: food2,
    alt: "A first person view of a zoomed in camera viewport pointing at a plate of food in a wood beam.",
  },
  {
    src: food3,
    alt: "An image of a dilapidated restaurant, two zombies are in frame with colorful chairs and tables thrown about.",
  },
  {
    src: food4,
    alt: "An image of an evil looking chef looking maliciously from behind a kitchen window.",
  },
  {
    src: food5,
    alt: "An image of a single zombie walkin through a dilapidated restaurant.",
  },
  {
    src: food6,
    alt: "An wide shot image of dilapidated restaurant, three zombies walk forwards towards the counter while ingredients float in the wooden beams above.",
  },
] as Image[];
