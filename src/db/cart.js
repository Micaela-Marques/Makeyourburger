// Sistema de carrinho de compras
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
  return true
}

// Função para remover item do carrinho
export const removeFromCart = (burgerId) => {
  cartItems = cartItems.filter(item => item.burgerId !== burgerId)
  updateCartTotal()
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
    }
  }
}

// Função para limpar carrinho
export const clearCart = () => {
  cartItems = []
  cartTotal = 0
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
  const savedOrders = localStorage.getItem('orderHistory')
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
      status: 'confirmado'
    }
    
    orderHistory.unshift(newOrder)
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory))
    
    // Limpar carrinho após salvar pedido
    clearCart()
    saveCartToStorage()
    
    return newOrder
  } catch (error) {
    console.error('Erro ao salvar pedido:', error)
    return null
  }
}

// Inicializar carrinho ao carregar o módulo
loadCartFromStorage()
