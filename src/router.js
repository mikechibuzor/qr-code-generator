import { createRouter, createWebHistory } from "vue-router";

// components

import HomePage from "./components/screens/HomePage.vue";
import TheHistory from "./components/screens/TheHistory.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: HomePage,
      alias: "/",
    },
    {
      path: "/history",
      component: TheHistory,
    },
  ],
});

export default router;
