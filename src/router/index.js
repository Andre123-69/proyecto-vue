import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Contador",
      name: "Contador",
      component: () => import("../modules/contador/components/Contador.vue"),
    },
    {
      path: "/Lista-De-Tareas",
      name: "ListaDeTareas",
      component: () => import("../modules/listaDeTareas/components/ListaDeTareas.vue"),
    },
    {
      path: "/Registro",
      name: "Registrar",
      component: () => import("../views/registroView.vue"),
    },
    {
      path: "/Productos",
      name: "Productos",
      component: () => import("../api/apiPoductos.vue"),
    },
  ],
});

export default router;
