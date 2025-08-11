import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Contador",
      name: "Contador",
      component: () => import("../components/Contador.vue"),
    },
    {
      path: "/Lista-De-Tareas",
      name: "ListaDeTareas",
      component: () => import("../components/ListaDeTareas.vue"),
    },
  ],
});

export default router;
