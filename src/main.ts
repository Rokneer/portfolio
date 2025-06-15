import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./style.css";

import { createVfm } from "vue-final-modal";
import "vue-final-modal/style.css";

import VueViewer from "v-viewer";
import "viewerjs/dist/viewer.css";

createApp(App).use(router).use(createVfm()).use(VueViewer).mount("#app");
