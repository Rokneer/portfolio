import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./style.css";

import VueViewer from "v-viewer";
import "viewerjs/dist/viewer.css";

const app = createApp(App);
app.use(router).use(VueViewer);
await router.isReady();
app.mount("#app");
