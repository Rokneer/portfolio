import type { Project } from "../types";
import PLATFORMS from "./platform";

import { masqueradeCover, masqueradeLogo } from "@/assets/masquerade";
import { foodCover, foodLogo } from "@/assets/foodForTheSoul";
import { caveCover, caveLogo } from "@/assets/caveDwellers";
import { velezCover, velezLogo } from "@/assets/velezShowcase";
import { soulsCover, soulsLogo } from "@/assets/soulsOfLight";
import { potionCover, potionLogo } from "@/assets/potionRush";
import { recuerdoCover, recuerdoLogo } from "@/assets/unRecuerdo";
import { voltronCover, voltronLogo } from "@/assets/voltronInfographic";
import { adaletCover, adaletLogo } from "@/assets/adaletCode";
import { ninjaCover, ninjaLogo } from "@/assets/medievalNinja";
import { islandsCover, islandsLogo } from "@/assets/floatingIslands";
import { lilDungeonCover, lilDungeonLogo } from "@/assets/littleDungeon";

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
    "Led a team of two developers and seven artists, handling the game scope and ensuring quality.",
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

const velezShowcase: Project = {
  cover: { src: velezCover, alt: "Velez Showcase cover image." },
  logo: { src: velezLogo, alt: "Velez Showcase logo" },
  roles: ["Lead developer", "App designer", "QA tester"],
  contributions: [
    "Developed interactivity logic for interfacing with products.",
    "Designed.",
    "Designed.",
  ],
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate commodi dolore possimus, voluptates natus laudantium optio? Iusto natus cupiditate recusandae eum ex? Id veritatis repellat quis itaque a temporibus.",
  platform: PLATFORMS.unity,
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

const soulsOfLight: Project = {
  cover: { src: soulsCover, alt: "Souls of Light cover image." },
  logo: { src: soulsLogo, alt: "Souls of Light logo" },
  roles: ["Game designer", "Level designer", "Script writer"],
  contributions: [
    "Designed over five castle levels, and their own unique puzzles.",
    "Wrote story and all dialogue with the castle ghosts.",
    "Conceptualized three different flame abilities.",
  ],
  description:
    "You wake up in the middle of a cold dark forest, at your side lies a metal lamp, a weak ember appears to burn inside it. In front of you an enormous castle opens its rusted gates to you. With no other option you decide to enter the castle, as you advance you notice that thorny vines cover the walls. A chill runs down your spine, you try to remember who you are, why you are here, but your mind is blank. Who knows what other mysteries lie ahead in this darken path.",
  platform: PLATFORMS.unity,
  itchCode: "2598860",
  youtubeCode: "iAwDhvxiL7o",
};

const unRecuerdo: Project = {
  cover: { src: recuerdoCover, alt: "Un Recuerdo cover image." },
  logo: { src: recuerdoLogo, alt: "Un Recuerdo logo" },
  roles: ["Actor", "Video editor", "Poster designer"],
  contributions: [
    "Acted as one of the protagonist of the short film.",
    "Edited the script and video footage.",
    "Designed vertical and horizontal posters to promote the short film.",
  ],
  description: `Today is an special day for Amelia, she and her husband Jorge are going on a date to her favorite museum the Parque Explora. The date goes great but the in the past lives a truth that they need to live with every day.
  This short film was nominated in the Smartfilms 2022 film festival in the REDvolucionarias category.`,
  platform: PLATFORMS.youtube,
  youtubeCode: "HOMR1tvPWy0",
};

const voltronInfographic: Project = {
  cover: { src: voltronCover, alt: "Voltron Infographic cover image." },
  logo: { src: voltronLogo, alt: "Voltron Infographic logo" },
  roles: ["Solo developer", "UI & UX designer", "Animator"],
  contributions: [
    "Designed the flow of the infographic.",
    "Researched information about the Voltron's main cast.",
    "Programmed interactivity and animations for the infographic.",
  ],
  description:
    "Meet the many characters of the Voltron: The Legendary Defender universe in this interactive infographic. Learn their stories, the planets they visited and much more in this thematic informative piece.",
  platform: PLATFORMS.unity,
  itchCode: "2598849",
};

const adaletCode: Project = {
  cover: { src: adaletCover, alt: "Adalet's Code cover image." },
  logo: { src: adaletLogo, alt: "Adalet's Code logo" },
  roles: ["Lead developer", "Level designer", "QA tester"],
  contributions: ["Designed.", "Designed.", "Designed."],
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate commodi dolore possimus, voluptates natus laudantium optio? Iusto natus cupiditate recusandae eum ex? Id veritatis repellat quis itaque a temporibus.",
  platform: PLATFORMS.unity,
};

const medievalNinja: Project = {
  cover: { src: ninjaCover, alt: "Medieval Ninja cover image." },
  logo: { src: ninjaLogo, alt: "Medieval Ninja logo" },
  roles: ["Solo developer", "Level designer", "Dialogue writer"],
  contributions: ["Designed.", "Designed.", "Designed."],
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate commodi dolore possimus, voluptates natus laudantium optio? Iusto natus cupiditate recusandae eum ex? Id veritatis repellat quis itaque a temporibus.",
  platform: PLATFORMS.unreal,
};

const floatingIslands: Project = {
  cover: { src: islandsCover, alt: "Floating Islands cover image." },
  logo: { src: islandsLogo, alt: "Floating Islands logo" },
  roles: ["Solo developer", "Level designer", "Gameplay designer"],
  contributions: ["Designed.", "Designed.", "Designed."],
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate commodi dolore possimus, voluptates natus laudantium optio? Iusto natus cupiditate recusandae eum ex? Id veritatis repellat quis itaque a temporibus.",
  platform: PLATFORMS.unity,
};

const littleDungeon: Project = {
  cover: { src: lilDungeonCover, alt: "Little Dungeon cover image." },
  logo: { src: lilDungeonLogo, alt: "Little Dungeon logo" },
  roles: ["Solo developer", "Level designer", "Gameplay designer"],
  contributions: ["Designed.", "Designed.", "Designed."],
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate commodi dolore possimus, voluptates natus laudantium optio? Iusto natus cupiditate recusandae eum ex? Id veritatis repellat quis itaque a temporibus.",
  platform: PLATFORMS.unity,
};

const PROJECTS: Record<string, Project> = {
  Masquerade: masquerade,
  CaveDwellers: caveDwellers,
  FoodForTheSoul: foodForTheSoul,
  PotionRush: potionRush,
  SoulsOfLight: soulsOfLight,
  UnRecuerdo: unRecuerdo,
  VoltronInfographic: voltronInfographic,
  VelezShowcase: velezShowcase,
  Adalet: adaletCode,
  MedievalNinja: medievalNinja,
  FloatingIslands: floatingIslands,
  LittleDungeon: littleDungeon,
};

export default PROJECTS;
