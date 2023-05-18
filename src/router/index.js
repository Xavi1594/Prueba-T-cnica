import { createRouter, createWebHistory } from 'vue-router'
import "../assets/css/reset.css";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import ('../views/WeatherDashboardView.vue'),
    }
    
  ]
})

export default router
