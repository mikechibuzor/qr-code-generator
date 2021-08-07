import { createRouter, createWebHistory } from "vue-router";

// componets
import HomePage from "./components/screeens/Homepage.vue";
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
