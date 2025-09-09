// Exemplo de uso do sistema de dados
import { 
  burgerData, 
  categories, 
  restaurantConfig,
  getBurgersByCategory,
  searchBurgers,
  getBurgerById,
  getPopularBurgers,
  getMenuStats
} from './burgers.js'

import { 
  addToCart,
  getCartSummary,
  removeFromCart,
  updateCartItemQuantity,
  saveOrder,
  getOrderHistory
} from './cart.js'

// Exemplo 1: Buscar hambúrgueres por categoria
console.log('Hambúrgueres Clássicos:', getBurgersByCategory('classicos'))

// Exemplo 2: Buscar hambúrgueres por termo
console.log('Hambúrgueres com "bacon":', searchBurgers('bacon'))

// Exemplo 3: Obter hambúrguer específico
const burger = getBurgerById(1)
console.log('Hambúrguer ID 1:', burger)

// Exemplo 4: Obter hambúrgueres mais populares
console.log('Top 3 mais populares:', getPopularBurgers(3))

// Exemplo 5: Estatísticas do menu
console.log('Estatísticas do menu:', getMenuStats())

// Exemplo 6: Adicionar itens ao carrinho
addToCart(1, 2) // Hambúrguer ID 1, quantidade 2
addToCart(4, 1) // Hambúrguer ID 4, quantidade 1

// Exemplo 7: Obter resumo do carrinho
const cartSummary = getCartSummary()
console.log('Resumo do carrinho:', cartSummary)

// Exemplo 8: Atualizar quantidade de item
updateCartItemQuantity(1, 3) // Hambúrguer ID 1, nova quantidade 3

// Exemplo 9: Remover item do carrinho
removeFromCart(4)

// Exemplo 10: Salvar pedido
const orderData = {
  items: cartSummary.items,
  total: cartSummary.total,
  customerName: 'João Silva',
  deliveryAddress: 'Rua das Flores, 123',
  paymentMethod: 'Cartão de Crédito'
}

const savedOrder = saveOrder(orderData)
console.log('Pedido salvo:', savedOrder)

// Exemplo 11: Obter histórico de pedidos
const orderHistory = getOrderHistory()
console.log('Histórico de pedidos:', orderHistory)

// Exemplo 12: Configurações do restaurante
console.log('Configurações do restaurante:', restaurantConfig)

// Exemplo 13: Categorias disponíveis
console.log('Categorias:', categories)

// Exemplo 14: Todos os hambúrgueres
console.log('Todos os hambúrgueres:', burgerData)
