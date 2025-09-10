// Utilitários para gerenciamento de dados
import { burgerData, categories, restaurantConfig, promotions, reviews } from './burgers.js'

// Função para buscar hambúrgueres por categoria
export const getBurgersByCategory = (categoryId) => {
  if (categoryId === 'todos') {
    return burgerData
  }
  return burgerData.filter(burger => 
    burger.category.toLowerCase() === categoryId.toLowerCase()
  )
}

// Função para buscar hambúrgueres por termo
export const searchBurgers = (searchTerm) => {
  if (!searchTerm) return burgerData
  
  const term = searchTerm.toLowerCase()
  return burgerData.filter(burger => 
    burger.name.toLowerCase().includes(term) ||
    burger.description.toLowerCase().includes(term) ||
    burger.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(term)
    )
  )
}

// Função para buscar hambúrguer por ID
export const getBurgerById = (id) => {
  return burgerData.find(burger => burger.id === id)
}

// Função para obter hambúrgueres em promoção
export const getBurgersOnSale = () => {
  return burgerData.filter(burger => burger.isNew)
}

// Função para obter hambúrgueres mais populares (por avaliação)
export const getPopularBurgers = (limit = 3) => {
  return [...burgerData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit)
}

// Função para obter hambúrgueres mais baratos
export const getCheapestBurgers = (limit = 3) => {
  return [...burgerData]
    .sort((a, b) => a.price - b.price)
    .slice(0, limit)
}

// Função para obter hambúrgueres mais caros
export const getMostExpensiveBurgers = (limit = 3) => {
  return [...burgerData]
    .sort((a, b) => b.price - a.price)
    .slice(0, limit)
}

// Função para obter avaliações de um hambúrguer
export const getBurgerReviews = (burgerId) => {
  return reviews.filter(review => review.burgerId === burgerId)
}

// Função para calcular avaliação média
export const getAverageRating = (burgerId) => {
  const burgerReviews = getBurgerReviews(burgerId)
  if (burgerReviews.length === 0) return 0
  
  const sum = burgerReviews.reduce((acc, review) => acc + review.rating, 0)
  return (sum / burgerReviews.length).toFixed(1)
}

// Função para obter promoções ativas
export const getActivePromotions = () => {
  const today = new Date().toISOString().split('T')[0]
  return promotions.filter(promo => promo.validUntil >= today)
}

// Função para aplicar desconto
export const applyDiscount = (price, discountPercent) => {
  return price * (1 - discountPercent / 100)
}

// Função para formatar preço
export const formatPrice = (price) => {
  if (price === null || price === undefined || isNaN(price)) {
    return 'R$ 0,00'
  }
  return `R$ ${Number(price).toFixed(2).replace('.', ',')}`
}

// Função para formatar data
export const formatDate = (dateString) => {
  if (!dateString) return 'Data não disponível'
  
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return 'Data inválida'
    
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  } catch (error) {
    console.error('Erro ao formatar data:', error)
    return 'Data inválida'
  }
}

// Função para obter tempo estimado de preparo médio
export const getAveragePrepTime = () => {
  const totalTime = burgerData.reduce((acc, burger) => acc + burger.prepTime, 0)
  return Math.round(totalTime / burgerData.length)
}

// Função para obter estatísticas do menu
export const getMenuStats = () => {
  return {
    totalBurgers: burgerData.length,
    categories: categories.length,
    averagePrice: burgerData.reduce((acc, burger) => acc + burger.price, 0) / burgerData.length,
    averageRating: burgerData.reduce((acc, burger) => acc + burger.rating, 0) / burgerData.length,
    averagePrepTime: getAveragePrepTime(),
    vegetarianOptions: burgerData.filter(burger => burger.category === 'Vegetariano').length,
    spicyOptions: burgerData.filter(burger => burger.spicy).length
  }
}

// Exportar todos os dados
export {
  burgerData,
  categories,
  restaurantConfig,
  promotions,
  reviews
}
