import { createRouter, createWebHistory } from 'vue-router'
import VeiculosView from '../views/VeiculosView.vue'
import AdicionarVeiculoView from '../views/AdicionarVeiculoView.vue'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: { path: "/veiculos" },
    },
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
  ],
});

export default router
