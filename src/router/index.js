import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cardapio',
    name: 'Cardapio',
    component: Menu
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
