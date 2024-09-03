import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";

import "@packages/design-system/main.scss";

const app = createApp(App);

app.use(router);

app.mount("#app");
