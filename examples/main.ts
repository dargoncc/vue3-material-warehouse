import { createApp } from "vue";
import App from "./App.vue";
import CCDesign from "@cc-design/web"

const app = createApp(App);
app.use(CCDesign);
app.mount("#app");
