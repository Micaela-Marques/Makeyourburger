import { getBurgerById, formatPrice } from './index.js'

// Estado do carrinho
let cartItems = []
let cartTotal = 0

// Função para adicionar item ao carrinho
export const addToCart = (burgerId, quantity = 1) => {
  const burger = getBurgerById(burgerId)
  if (!burger) return false

  const existingItem = cartItems.find(item => item.burgerId === burgerId)
  
  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cartItems.push({
      burgerId,
      quantity,
      addedAt: new Date().toISOString()
    })
  }
  
  updateCartTotal()
  saveCartToStorage() // ✅ salvar no localStorage sempre que adicionar
  return true
}

// Função para remover item do carrinho
export const removeFromCart = (burgerId) => {
  cartItems = cartItems.filter(item => item.burgerId !== burgerId)
  updateCartTotal()
  saveCartToStorage() // ✅ salvar após remover
}

// Função para atualizar quantidade de um item
export const updateCartItemQuantity = (burgerId, quantity) => {
  const item = cartItems.find(item => item.burgerId === burgerId)
  if (item) {
    if (quantity <= 0) {
      removeFromCart(burgerId)
    } else {
      item.quantity = quantity
      updateCartTotal()
      saveCartToStorage() // ✅ salvar após atualizar
    }
  }
}

// Função para limpar carrinho
export const clearCart = () => {
  cartItems = []
  cartTotal = 0
  saveCartToStorage() // ✅ salvar carrinho vazio
}

// Função para obter itens do carrinho
export const getCartItems = () => {
  return cartItems.map(item => {
    const burger = getBurgerById(item.burgerId)
    return {
      ...item,
      burger,
      subtotal: burger.price * item.quantity
    }
  })
}

// Função para obter total do carrinho
export const getCartTotal = () => {
  return cartTotal
}

// Função para obter quantidade total de itens
export const getCartItemCount = () => {
  return cartItems.reduce((total, item) => total + item.quantity, 0)
}

// Função para verificar se carrinho está vazio
export const isCartEmpty = () => {
  return cartItems.length === 0
}

// Função para calcular total do carrinho
const updateCartTotal = () => {
  cartTotal = cartItems.reduce((total, item) => {
    const burger = getBurgerById(item.burgerId)
    return total + (burger.price * item.quantity)
  }, 0)
}

// Função para obter resumo do carrinho
export const getCartSummary = () => {
  const items = getCartItems()
  const itemCount = getCartItemCount()
  const total = getCartTotal()
  
  return {
    items,
    itemCount,
    total,
    formattedTotal: formatPrice(total),
    isEmpty: isCartEmpty()
  }
}

// Função para salvar carrinho no localStorage
export const saveCartToStorage = () => {
  try {
    localStorage.setItem('burgerCart', JSON.stringify({
      items: cartItems,
      total: cartTotal,
      savedAt: new Date().toISOString()
    }))
  } catch (error) {
    console.error('Erro ao salvar carrinho:', error)
  }
}

// Função para carregar carrinho do localStorage
export const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('burgerCart')
    if (savedCart) {
      const cartData = JSON.parse(savedCart)
      cartItems = cartData.items || []
      cartTotal = cartData.total || 0
    }
  } catch (error) {
    console.error('Erro ao carregar carrinho:', error)
    cartItems = []
    cartTotal = 0
  }
}

// Função para obter histórico de pedidos (simulado)
export const getOrderHistory = () => {
  const savedOrders = localStorage.getItem('orders')
  return savedOrders ? JSON.parse(savedOrders) : []
}

// Função para salvar pedido no histórico
export const saveOrder = (orderData) => {
  try {
    const orderHistory = getOrderHistory()
    const newOrder = {
      id: Date.now(),
      ...orderData,
      createdAt: new Date().toISOString(),
      status: 'confirmado',
      statusHistory: [
        {
          status: 'confirmado',
          timestamp: new Date().toISOString(),
          message: 'Pedido confirmado e enviado para a cozinha'
        }
      ],
      estimatedDeliveryTime: orderData.estimatedTime || '30-45 min',
      trackingCode: generateTrackingCode()
    }
    
    orderHistory.unshift(newOrder)
    localStorage.setItem('orders', JSON.stringify(orderHistory))
    
    // Simular progressão do pedido
    simulateOrderProgress(newOrder.id)
    
    // Limpar carrinho após salvar pedido
    clearCart()
    
    return newOrder
  } catch (error) {
    console.error('Erro ao salvar pedido:', error)
    return null
  }
}

// Função para gerar código de rastreamento
const generateTrackingCode = () => {
  return 'MB' + Math.random().toString(36).substr(2, 8).toUpperCase()
}

// Função para simular progressão do pedido
const simulateOrderProgress = (orderId) => {
  const orderHistory = getOrderHistory()
  const order = orderHistory.find(o => o.id === orderId)
  
  if (!order) return
  
  // Simular mudanças de status ao longo do tempo
  setTimeout(() => {
    updateOrderStatus(orderId, 'preparando', 'Pedido em preparo na cozinha')
  }, 30000) // 30 segundos
  
  setTimeout(() => {
    updateOrderStatus(orderId, 'saiu_entrega', 'Pedido saiu para entrega')
  }, 120000) // 2 minutos
  
  setTimeout(() => {
    updateOrderStatus(orderId, 'entregue', 'Pedido entregue com sucesso!')
  }, 300000) // 5 minutos
}

// Função para atualizar status do pedido
export const updateOrderStatus = (orderId, newStatus, message) => {
  try {
    const orderHistory = getOrderHistory()
    const order = orderHistory.find(o => o.id === orderId)
    
    if (order) {
      order.status = newStatus
      order.statusHistory.push({
        status: newStatus,
        timestamp: new Date().toISOString(),
        message: message
      })
      
      localStorage.setItem('orders', JSON.stringify(orderHistory))
    }
  } catch (error) {
    console.error('Erro ao atualizar status do pedido:', error)
  }
}

// Função para obter histórico de status de um pedido
export const getOrderStatusHistory = (orderId) => {
  const orderHistory = getOrderHistory()
  const order = orderHistory.find(o => o.id === orderId)
  return order ? order.statusHistory : []
}

// Função para cancelar pedido
export const cancelOrder = (orderId) => {
  try {
    const orderHistory = getOrderHistory()
    const order = orderHistory.find(o => o.id === orderId)
    
    if (order && order.status !== 'entregue' && order.status !== 'cancelado') {
      order.status = 'cancelado'
      order.statusHistory.push({
        status: 'cancelado',
        timestamp: new Date().toISOString(),
        message: 'Pedido cancelado pelo cliente'
      })
      
      localStorage.setItem('orders', JSON.stringify(orderHistory))
      return true
    }
    return false
  } catch (error) {
    console.error('Erro ao cancelar pedido:', error)
    return false
  }
}

// Inicializar carrinho ao carregar o módulo
loadCartFromStorage()
