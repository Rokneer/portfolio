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
import {
  constellationCover,
  constellationLogo,
} from "@/assets/rainbowConstellation";
import { lilDungeonCover, lilDungeonLogo } from "@/assets/littleDungeon";

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
  cover: { src: velezCover, alt: "TresDLab by Velez cover image." },
  logo: { src: velezLogo, alt: "TresDLab by Velez logo" },
  roles: ["Lead developer", "App designer", "QA tester"],
  contributions: [
    "Developed interactivity logic for interfacing with products.",
    "Designed.",
    "Designed.",
  ],
  description:
    "An interactive application developed to allow a fully digital workflow for Velez Cueros bag prototyping. Users can interact with highly detailed and fully realized 3D models, allowing real-time changes to the models, colors and textures, as well as having a digital mannequin providing a clear and realistic sense of scale.",
  platform: PLATFORMS.unity,
};

//* Side Projects
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
  description:
    "Today is an special day for Amelia, she and her husband Jorge are going on a date to her favorite museum the Parque Explora. The date goes great but the in the past lives a truth that they need to live with every day. This short film was nominated in the Smartfilms 2022 film festival in the REDvolucionarias category.",
  platform: PLATFORMS.youtube,
  youtubeCode: "HOMR1tvPWy0",
};

const voltronInfographic: Project = {
  cover: { src: voltronCover, alt: "Voltron Infographic cover image." },
  logo: { src: voltronLogo, alt: "Voltron Infographic logo" },
  roles: ["Solo developer", "UI & UX designer", "Animator"],
  description:
    "Meet the many characters of the Voltron: The Legendary Defender universe in this interactive infographic. Learn their stories, the planets they visited and much more in this thematic informative piece.",
  platform: PLATFORMS.unity,
  itchCode: "2598849",
};

const adaletCode: Project = {
  cover: { src: adaletCover, alt: "Adalet's Code cover image." },
  logo: { src: adaletLogo, alt: "Adalet's Code logo" },
  roles: ["Lead developer", "Level designer", "QA tester"],
  description:
    "Explore an abandoned bunker and solve puzzle minigames in hopes to find a way to help the human rebelion and destroy their robotic overlords one and for all.",
  platform: PLATFORMS.unity,
  itchCode: "3142157",
};

const medievalNinja: Project = {
  cover: { src: ninjaCover, alt: "Medieval Ninja cover image." },
  logo: { src: ninjaLogo, alt: "Medieval Ninja logo" },
  roles: ["Solo developer", "Level designer", "Dialogue writer"],
  description:
    "You're master has just informed you of some trully terrible news, the king is dying and it is your mission to deliver his live saving medicine before its too late.",
  platform: PLATFORMS.unreal,
};

const rainbowConstellation: Project = {
  cover: { src: constellationCover, alt: "Rainbow Constellation cover image." },
  logo: { src: constellationLogo, alt: "Rainbow Constellation logo" },
  roles: ["Lead developer", "UI designer", "Gameplay designer"],
  description:
    "Join colorful stars to reveal beatiful constellations from different cultures in this fun and casual mobile game.",
  platform: PLATFORMS.unity,
};

const littleDungeon: Project = {
  cover: { src: lilDungeonCover, alt: "Little Dungeon cover image." },
  logo: { src: lilDungeonLogo, alt: "Little Dungeon logo" },
  roles: ["Solo developer", "System designer", "Gameplay designer"],

  description:
    "Fight little monster with your little weapons while you explore and try to escape a little dungeon in this little game prototype.",
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
  RainbowConstellation: rainbowConstellation,
  LittleDungeon: littleDungeon,
};

export default PROJECTS;
