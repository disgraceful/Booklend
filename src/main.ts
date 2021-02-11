import { createApp } from "vue";
import { store, key } from '@/store/store'
import App from "./App.vue";
import "@/shared.scss";

createApp(App).use(store, key).mount("#app");
