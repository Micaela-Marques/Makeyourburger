import { createRouter, createWebHistory } from 'vue-router'
import Home from '@views/Home.vue'
import Menu from '@views/Menu.vue'
import Orders from '@views/Orders.vue'
import Cart from '@views/Cart.vue'
import History from '@views/History.vue'
import Profile from '@views/Profile.vue'

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
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: Orders
  },
  {
    path: '/carrinho',
    name: 'Carrinho',
    component: Cart
  },
  {
    path: '/historico',
    name: 'Historico',
    component: History
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
