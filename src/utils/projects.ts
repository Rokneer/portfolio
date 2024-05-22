import type { Project } from "../types";

const PROJECTS: Record<string, Project> = {
  masquerade: {
    title: "masquerade",
    shortDescription:
      "A story driven puzzle game set in a floating village of masked people.",
    longDescription:
      "After a mysterious train ride you find yourself stranded in the floating village of Liberio. Its inhabitants are cheerful and welcoming, but you can't seem to shake the feeling that something is wrong. Why are you here, why does everyone in the village wear a mask and who was that towering figure that spoke to you in the train, the answers to this questions are for you to find.",
    role: "Game designer, level designer, quest designer and script writer",
    category: "game",
    bulletPoints: [
      "World design and level design for the islands.",
      "Quest and puzzle design.",
      "Original story concept and character writing.",
    ],
  },
  caveDwellers: {
    title: "cave-dwellers",
    shortDescription:
      "A charming little 2D platformer where you look for treasure in a dark and dangerous cave.",
    longDescription:
      "Trapped in a dark cave, your light is running out, its only a matter of time before the darkness engulfs you.",
    role: "Developer, game designer and level designer",
    category: "game",
    bulletPoints: [
      "Overall gameplay and level design.",
      "Playtesting to ensure smooth and snappy movement.",
      "Developed gameplay and systems programming",
    ],
  },
  potionRush: {
    title: "potion-rush",
    shortDescription:
      "A quirky mobile game about a witch trying to survive in the big city.",
    longDescription:
      "You've just opened your Potions Café in the middle of the world's greatest magical city, New Arkadia. With open doors you receive your first customers, only to discover that everyone is in a hurry to go elsewhere and does not have the patience to wait for their orders for long. In a hurry, you start creating potions and giving them to your customers. It's going to be hard but the rent doesn't pay for itself.",
    role: "Game designer, level designer, UI & UX designer and artist",
    category: "game",
    bulletPoints: [
      "Designed 12 unique potions and their magical ingredients.",
      "Conceptualized the gameplay of four different potion making utensils.",
      "Designed colorful, intuitive and easy to interact with UI",
    ],
  },
  soulsOfLight: {
    title: "souls-of-light",
    shortDescription:
      "A mysterious 2D puzzle platformer where light is your only ally.",
    longDescription:
      "You wake up in the middle of a cold dark forest, at your side lies a metallamp, a weak ember appears to burn inside it. In front of you an enormous castle opens its rusted gates to you. With no other option you decide to enter the castle, as you advance you notice that thorny vines cover thewalls. A chill runs down your spine, you try to remember who you are, whyyou are here, but your mind is blank. Who knows what other mysteries lieahead in this darken path.",
    role: "Game designer, level designer and script writer",
    category: "game",
    bulletPoints: [
      "Designed over 5 castle levels, and their own unique puzzles.",
      "Wrote story and all NPCs conversations with the castle ghosts.",
      "Conceptualized three different flame abilities to interact with the enviroment.",
    ],
  },
  unRecuerdo: {
    title: "un-recuerdo",
    shortDescription: "A short film about memories and unconditional love.",
    longDescription: `Today is an special day for Amelia, she and her husband Jorge are going on a date to her favorite museum the Parque Explora. The date goes great but the past a truth that they need to live with every day.
    This shortfilm was nominated in the Smartfilms 2022 film festival in the REDvolucionarias category.`,
    role: "Actor, video editor and poster designer",
    category: "other",
    bulletPoints: [
      "Acted as one of the protragonist of the short film.",
      "Edited the script and video footage.",
      "Designed vertical and horizontal posters to promote the short film.",
    ],
  },
  voltronInfographic: {
    title: "voltron-infographic",
    shortDescription:
      "An interactive introduction to the world of Voltron: The Legendary Defender",
    longDescription:
      "Meet the many characters of the Voltron: The Legendary Defender universe in this interactive infographic. Learn their stories, the planets they visited and much more in this thematic informative piece.",
    role: "Developer, UI & UX designer, programmer and animator",
    category: "other",
    bulletPoints: [
      "Designed the flow of the infographic.",
      "Researched and summarized information about all the main Voltron characters.",
      "Programmed interactivity and animations for the infographic.",
    ],
  },
};

export default PROJECTS;
