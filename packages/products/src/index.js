import "core-js/stable";
import "regenerator-runtime/runtime";

import "./global.css";
import { createApp, h } from "vue";
import App from "./App";
import singleSpaVue from "single-spa-vue";
import { defineCustomElements } from "@app/shared/loader";

defineCustomElements();

const rootContainer = document.querySelector("#app-products");

if (rootContainer) {
  const app = createApp(App);
  app.mount("body");
}

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        navigateToUrl: this.navigateToUrl,
      });
    },
  },
  handleInstance: (app) => {},
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
