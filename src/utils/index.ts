import { ref, onMounted, onUnmounted } from "vue";

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

export function sendEmail() {
  const email = "alejandro.hincapie.lo@gmail.com";
  const subject = "Opportunity Email";
  const msgBody = "Your message here!";
  window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
}
