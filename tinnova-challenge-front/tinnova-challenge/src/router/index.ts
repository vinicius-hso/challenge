import { createRouter, createWebHistory } from 'vue-router'
import VeiculosView from '../views/VeiculosView.vue'
import AdicionarVeiculoView from '../views/AdicionarVeiculoView.vue'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/veiculos",
      name: "veiculos",
      component: VeiculosView,
    },
    {
      path: "/adicionar-veiculo",
      name: "adicionar-veiculo",
      component: AdicionarVeiculoView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router
