import { createApp } from "vue";
import "./style.css";
import "@mdi/font/css/materialdesignicons.css";
import "viewerjs/dist/viewer.css";
import "animate.css";
import VueViewer from "v-viewer";
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).use(VueViewer).mount("#app");
