import { createRouter, createWebHistory } from "vue-router";
import dashboard from "./views/dashboard.vue";
import settings from "./views/settings.vue";
import filesystem from "./views/filesystem.vue";
import os from "./views/operation_system.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: dashboard,
    },
    {
      path: "/settings",
      component: settings,
    },
    {
      path: "/filesystem",
      component: filesystem,
    },
    {
      path: "/os",
      component:os,
    },
    {
      path: "/os"
    }
],
});
