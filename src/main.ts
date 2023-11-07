import { createApp } from "vue";
import "./style.css";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/sora";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
