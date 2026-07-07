import type { Project } from "../types";
import PLATFORMS from "./platform";

import { masqueradeCover, masqueradeLogo } from "@/assets/masquerade";
import { foodCover, foodLogo } from "@/assets/foodForTheSoul";
import { caveCover, caveLogo } from "@/assets/caveDwellers";
import { potionCover, potionLogo } from "@/assets/potionRush";

//* Main Projects
const masquerade: Project = {
  cover: { src: masqueradeCover, alt: "Masquerade cover image." },
  logo: { src: masqueradeLogo, alt: "Masquerade logo" },
  roles: ["Game designer", "Level designer", "Quest designer"],
  contributions: [
    "World and level design for the islands.",
    "Led quest and puzzle design.",
    "Wrote original story concept and character dialogue.",
  ],
  platform: PLATFORMS.unity,
  description:
    "After a mysterious train ride you find yourself stranded in the floating village of Liberio. Its inhabitants are cheerful and welcoming, but you can't seem to shake the feeling that something is wrong. Why are you here, why does everyone in the village wear a mask and who was that towering figure that spoke to you in the train, the answers to this questions are for you to find.",
  itchCode: "2598761",
  youtubeCode: "TJUIgSQkQws",
};

const foodForTheSoul: Project = {
  cover: { src: foodCover, alt: "Food for the Soul cover image." },
  logo: { src: foodLogo, alt: "Food for the Soul logo" },
  roles: ["Project lead", "Lead developer", "Game designer"],
  contributions: [
    "Led a team of two developers and seven artists.",
    "Managed design and development, establishing main gameplay loop.",
    "Programmed the entirety of the game logic.",
  ],
  description:
    "On his off day, Juan, a food photographer, finds himself ravenously hungry and wishing for a bite to eat. Lucky for him, just around the corner a colorful Colombian restaurant appeared. Just as he entered a cold sweat ran down his spine, this was no ordinary place. Before he could escape his soul was trapped inside a cursed camera by the devilish head chef and now he must photograph ghostly food to serve to the ghoulish customers to free his soul.",
  platform: PLATFORMS.unity,
  itchCode: "2753590",
  youtubeCode: "PrqyUO0w4ic",
};

const caveDwellers: Project = {
  cover: { src: caveCover, alt: "Cave Dwellers cover image." },
  logo: { src: caveLogo, alt: "Cave Dwellers logo" },
  roles: ["Solo developer", "Game designer", "Level designer"],
  contributions: [
    "Conceptualized overall gameplay and level design.",
    "Developed gameplay and systems programming.",
    "Playtested to ensure smooth and snappy movement.",
  ],
  description:
    "Trapped in a dark cave, your light is running out, its only a matter of time before the darkness engulfs you.",
  platform: PLATFORMS.unity,
  itchCode: "2579277",
};

const potionRush: Project = {
  cover: { src: potionCover, alt: "Potion Rush cover image." },
  logo: { src: potionLogo, alt: "Potion Rush logo" },
  roles: ["Game designer", "UI designer", "Artist"],
  contributions: [
    "Designed 12 unique potions and their magical ingredients.",
    "Conceptualized gameplay for four different potion making utensils.",
    "Designed colorful, intuitive and easy to interact with UI.",
  ],
  description:
    "You've just opened your Potions Café in the middle of the world's greatest magical city, New Arkadia. With open doors you receive your first customers, only to discover that everyone is in a hurry to go elsewhere and does not have the patience to wait for their orders for long. In a hurry, you start creating potions and giving them to your customers. It's going to be hard but the rent doesn't pay for itself.",
  platform: PLATFORMS.unity,
  itchCode: "2598797",
};

const PROJECTS: Record<string, Project> = {
  Masquerade: masquerade,
  CaveDwellers: caveDwellers,
  FoodForTheSoul: foodForTheSoul,
  PotionRush: potionRush,
};

export default PROJECTS;
