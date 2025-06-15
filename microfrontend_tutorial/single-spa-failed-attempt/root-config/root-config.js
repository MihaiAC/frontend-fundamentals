import { registerApplication, start } from "single-spa";

registerApplication({
  name: "react-app",
  app: () => System.import("react-app"),
  activeWhen: (loc) => loc.pathname.startsWith("/react"),
});

registerApplication({
  name: "vue-app",
  app: () => System.import("vue-app"),
  activeWhen: ["/vue"],
});

start();
