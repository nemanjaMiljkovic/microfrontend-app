import "core-js/stable";
import "regenerator-runtime/runtime";

import { navigateToUrl, registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import { defineCustomElements } from "@app/shared/loader";

defineCustomElements();

const loadingFns = {
  login: () => import("login/Login"),
  dashboard: () => import("dashboard/Dashboard"),
  products: () => import("products/Products"),
};

const routes = constructRoutes(document.querySelector("#single-spa-layout"), {
  loaders: {
    generic: "<sh-loader />",
  },
  props: {
    isAuthenticated: Boolean(localStorage.getItem("micro-token")),
    navigateToUrl,
  },
});

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return loadingFns[name]();
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

start();
