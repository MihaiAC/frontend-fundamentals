import { registerApplication, start } from "single-spa";
import { constructRoutes, constructApplications } from "single-spa-layout";

const routes = constructRoutes(document.querySelector("single-spa-router"));

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});

applications.forEach(registerApplication);

start({
  urlRerouteOnly: true,
});
