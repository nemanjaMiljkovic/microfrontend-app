import "./global.css";
import singleSpaSvelte from "single-spa-svelte";
import App from "./App.svelte";

const svelteLifecycles = singleSpaSvelte({
    component: App,
});

const containerEl = document.querySelector("#app-login");

if (Boolean(containerEl)) {
    new App({
        target: containerEl,
    });
}

export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;
