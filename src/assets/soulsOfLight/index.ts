import type { Image } from "@/types";

import souls1 from "./souls1.png";
import souls2 from "./souls2.png";
import souls3 from "./souls3.png";
import souls4 from "./souls4.png";
import souls5 from "./souls5.png";
import souls6 from "./souls6.png";

import soulsLogo from "./soulsLogo.png";
import soulsCover from "./soulsCover.png";

export { soulsLogo, soulsCover };

export default [
  {
    src: souls1,
    alt: "An image of a dark castle room illuminated by red lamp light. A floating bright emblem sits on top of a skeleton.",
  },
  {
    src: souls2,
    alt: "An image of a dark castle room illuminated by blue lamp light. A monster made of plants stands aside the playable character.",
  },
  {
    src: souls3,
    alt: "An image of a dark castle room illuminated by blue lamp light. A text box displaying a conversation between the playable character and a ghostly old man.",
  },
  {
    src: souls4,
    alt: "An image of a dark castle room illuminated by green lamp light. The playable character is in the middle of a jump.",
  },
  {
    src: souls5,
    alt: "An image of a dark castle room illuminated by blue lamp light. A monster made of plants is frozen in a block of ice.",
  },
  {
    src: souls6,
    alt: "An image of a dark castle room illuminated by red lamp light. Darken vines burn besides a skeleton.",
  },
] as Image[];
