import { ref, onMounted, onUnmounted, computed } from "vue";
import { Project } from "./types";

// Functions
export function onWindowResize() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);
  function handler() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }
  onMounted(() => window.addEventListener("resize", handler));
  onUnmounted(() => window.removeEventListener("resize", handler));
  return { width, height };
}

export const isMobile = computed(() => {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a,
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        a.substring(0, 4),
      )
    )
      check = true;
  })(navigator.userAgent);
  return check;
});

export function sendEmail() {
  const email = "alejandro.hincapie.lo@gmail.com";
  const subject = "Opportunity Email";
  const msgBody = "Your message here!";
  window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
}

// Constanst
export const PROJECTS: Record<string, Project> = {
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
      "You wake up in the middle of a cold dark forest, at your side lies a metallamp, a weak ember appears to burn inside it. In front of you an enormous castle opens its rusted gates to you. With no other option you decide to enter the castle, as you advance you notice that thorny vines cover thewalls. A chill runs down your spine, you try to remember who you are, whyyou are here, but your mind is blank. Who knows what other mysteries lieahead in this darken path.",
    role: "I worked as the game designer, level designer and script writer for this project.",
    category: "game",
  },
  cave_dwellers: {
    title: "cave-dwellers",
    short_description:
      "A charming little 2D platformer where you look for treasure in a dark and dangerous cave.",
    long_description:
      "​Trapped in a dark cave, your light is running out, its only a matter of time before the darkness engulfs you.​",
    role: "I worked as the sole developer and game designer and level designer for this project.",
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
      "Meet the many characters of the Voltron: The Legendary Defender universe in this interactive infographic. Learn their stories, the planets they visited, their and much more in this thematic informative piece.",
    role: "I worked as developer, UI & UX designer, programmer and animator for this project.",
    category: "other",
  },
};
