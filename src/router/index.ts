import { createRouter, createWebHistory } from "vue-router";
import JobsView from "../views/JobsView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: HomeView,
    },
    {
      name: "jobs",
      path: "/jobs",
      component: JobsView,
    },
  ],
});

export default router;
