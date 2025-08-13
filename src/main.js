import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import "./style.css";
import "./flags.css";

import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import ToastService from "primevue/toastservice";

import AppState from "./plugins/appState.js";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import Noir from "./presets/Noir.js";

import StyleClass from 'primevue/styleclass';


const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Noir,
    options: {
      prefix: "p",
      darkModeSelector: ".p-dark",
      cssLayer: false,
    },
  },
});

app.use(PrimeVue);
app.directive('styleclass', StyleClass);

app.use(AppState);
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);

app.component("ThemeSwitcher", ThemeSwitcher);

app.use(createPinia());
app.use(router);

app.mount("#app");
