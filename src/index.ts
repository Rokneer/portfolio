import { Project } from "./types";

export function sendEmail() {
  const email = "alejandro.hincapie.lo@gmail.com";
  const subject = "Opportunity Email";
  const msgBody = "Your message here!";
  window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
}

export const projects: Record<string, Project> = {
  masquerade: {
    title: "masquerade",
    short_description:
      "A story driven puzzle game set in a floating village of masked people.",
    long_description:
      "After a mysterious train ride you find yourself stranded in the floating village of Liberio. Its inhabitants are cheerful and welcoming, but you can't seem to shake the feeling that something is wrong. Why are you here, why does everyone in the village wear a mask and who was that towering figure that spoke to you in the train, the answers to this questions are for you to find.",
    role: "I worked as game designer, level designer, 3D artist, QA tester, script writer and quest designer for this project.",
    category: "game",
  },
  potion_rush: {
    title: "potion-rush",
    short_description:
      "A quirky mobile game about a witch trying to survive in the big city.",
    long_description:
      "You've just opened your Potions Café in the middle of the world's greatest magical city, New Arkadia. With open doors you receive your first customers, only to discover that everyone is in a hurry to go elsewhere and does not have the patience to wait for their orders for long. In a hurry, you start creating potions and giving them to your customers. It's going to be hard but the rent doesn't pay for itself.",
    role: "I worked as the game designer, level designer, UI & UX designer and artist for this project.",
    category: "game",
  },
  souls_of_light: {
    title: "souls-of-light",
    short_description:
      "A mysterious 2D puzzle platformer where light is your only ally.",
    long_description:
      "You wake up in the middle of a cold dark forest, at your side lies a metallamp, a weak ember appears to burn inside it. In front of you an enormouscastle opens its rusted gates to you. With no other option you decide to enter the castle, as you advance you notice that thorny vines cover thewalls. A chill runs down your spine, you try to remember who you are, whyyou are here, but your mind is blank. Who knows what other mysteries lieahead in this darken path.",
    role: "I worked as the game designer, level designer and script writer for this project.",
    category: "game",
  },
  un_recuerdo: {
    title: "un-recuerdo",
    short_description: "A short film about memories and unconditional love.",
    long_description: `Today is an special day for Amelia, she and her husband Jorge are going on a date to her favorite museum the Parque Explora. The date goes great but the past a truth that they need to live with every day.
    This shortfilm was nominated in the Smartfilms 2022 film festival in the REDvolucionarias category.`,
    role: "I worked as an actor, video editor and poster designer for this project.",
    category: "other",
  },
  voltron_infographic: {
    title: "voltron-infographic",
    short_description:
      "An interactive introduction to the world of Voltron: The Legendary Defender",
    long_description:
      "Meet the many characters of the Voltron: The Legendary Defender universe in this interactive infrografic. Learn their stories, the planets they visited, their and much more in this thematic informative piece.",
    role: "I worked as developer, UI & UX designer, programmer and animator for this project.",
    category: "other",
  },
};
