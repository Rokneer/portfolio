import { Project } from "./types";

export function sendEmail() {
  const email = "alejandro.hincapie.lo@gmail.com";
  const subject = "Opportunity Email";
  const msgBody = "Your message here!";
  window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
}

export const projects: Project[] = [
  {
    title: "Masquerade",
    short_description:
      "A story driven puzzle game set in a floating village of masked people.",
    long_description:
      "A story driven puzzle game set in a floating village of masked people.",
    role: "",
    imageVertical: "masquerade/masquerade_vertical.png",
    imageHorizontal: "masquerade/masquerade_horizontal.png",
    category: "game",
  },
  {
    title: "Potion Rush",
    short_description:
      "A quirky mobile game about a witch trying to survive in the big city.",
    long_description:
      "A story driven puzzle game set in a floating village of masked people.",
    role: "",
    imageVertical: "potion_rush/potionRush_vertical.png",
    imageHorizontal: "potion_rush/potionRush_horizontal.png",
    category: "game",
  },
  {
    title: "Souls of Light",
    short_description:
      "A mysterious 2D puzzle platformer where light is your only ally.",
    long_description:
      "A story driven puzzle game set in a floating village of masked people.",
    role: "",
    imageVertical: "souls_of_light/soulsOfLight_vertical.png",
    imageHorizontal: "souls_of_light/soulsOfLight_horizontal.png",
    category: "game",
  },
  {
    title: "Un Recuerdo",
    short_description: "A short film about memories and unconditional love.",
    long_description:
      "A story driven puzzle game set in a floating village of masked people.",
    role: "",
    imageVertical: "un_recuerdo/unRecuerdo_vertical.png",
    imageHorizontal: "un_recuerdo/unRecuerdo_horizontal.png",
    category: "other",
  },
  {
    title: "Voltron Infographic",
    short_description:
      "An interactive introduction to the world of Voltron: The Legendary Defender",
    long_description:
      "A story driven puzzle game set in a floating village of masked people.",
    role: "",
    imageVertical: "voltron_infographic/voltron_vertical.png",
    imageHorizontal: "voltron_infographic/voltron_horizontal.png",
    category: "other",
  },
];
