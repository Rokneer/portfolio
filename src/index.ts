export function sendEmail() {
  const email = "alejandro.hincapie.lo@gmail.com";
  const subject = "Opportunity Email";
  const msgBody = "Your message here!";
  window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
}

export const projects = [
  {
    title: "Masquerade",
    description:
      "A story driven puzzle game set in a floating village of masked people.",
    imageVertical: "masquerade/masquerade_vertical.png",
    imageHorizontal: "masquerade/masquerade_horizontal.png",
    category: "game",
  },
  {
    title: "Potion Rush",
    description:
      "A quirky mobile game about a witch trying to survive in the big city.",
    imageVertical: "potion_rush/potionRush_vertical.png",
    imageHorizontal: "potion_rush/potionRush_horizontal.png",
    category: "game",
  },
  {
    title: "Souls of Light",
    description:
      "A mysterious 2D puzzle platformer where light is your only ally.",
    imageVertical: "souls_of_light/soulsOfLight_vertical.png",
    imageHorizontal: "souls_of_light/soulsOfLight_horizontal.png",
    category: "game",
  },
  {
    title: "Un Recuerdo",
    description: "A short film about memories and unconditional love.",
    imageVertical: "un_recuerdo/unRecuerdo_vertical.png",
    imageHorizontal: "un_recuerdo/unRecuerdo_horizontal.png",
    category: "other",
  },
  {
    title: "Voltron Infographic",
    description:
      "An interactive introduction to the world of Voltron: The Legendary Defender",
    imageVertical: "voltron_infographic/voltron_vertical.png",
    imageHorizontal: "voltron_infographic/voltron_horizontal.png",
    category: "other",
  },
];
