import { createRouter, createWebHistory } from "vue-router";
import TheDashboard from "./views/TheDashboard.vue";
import TheSettings from "./views/TheSettings.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: TheDashboard,
    },
    {
      path: "/settings",
      component: TheSettings,
    },
  ],
});
