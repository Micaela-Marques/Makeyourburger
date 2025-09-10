// Dados dos hambúrgueres
export const burgerData = [
  {
    id: 1,
    name: "The Smoky Beast",
    description: "Pão brioche, hambúrguer 180g, cheddar defumado, bacon, cebola caramelizada e molho barbecue.",
    ingredients: ["Pão brioche", "Hambúrguer 180g", "Cheddar defumado", "Bacon", "Cebola caramelizada", "Molho barbecue"],
    price: 34.90,
    image: "../assets/burger/close-vertical-de-um-hamburguer-saboroso-com-bacon-em-uma-parede-preta.jpg",
    category: "Clássicos",
    calories: 650,
    prepTime: 15,
    isNew: false,
    quantity: 1,
    rating: 4.8,
    reviews: 124,
    allergens: ["Glúten", "Lactose"],
    spicy: false
  },
  {
    id: 2,
    name: "Crispy Chicken Deluxe",
    description: "Frango empanado crocante, queijo gouda, alface, tomate e molho especial.",
    ingredients: ["Frango empanado", "Queijo gouda", "Alface", "Tomate", "Molho especial"],
    price: 28.90,
    image: "/src/assets/burger.jpg",
    category: "Frango",
    calories: 520,
    prepTime: 12,
    isNew: true,
    quantity: 1,
    rating: 4.6,
    reviews: 89,
    allergens: ["Glúten", "Lactose"],
    spicy: false
  },
  {
    id: 3,
    name: "Veggie Supreme",
    description: "Hambúrguer de quinoa, queijo vegano, abacate, rúcula e molho tahine.",
    ingredients: ["Hambúrguer de quinoa", "Queijo vegano", "Abacate", "Rúcula", "Molho tahine"],
    price: 32.90,
    image: "/src/assets/burger.jpg",
    category: "Vegetariano",
    calories: 480,
    prepTime: 10,
    isNew: false,
    quantity: 1,
    rating: 4.7,
    reviews: 67,
    allergens: ["Glúten"],
    spicy: false
  },
  {
    id: 4,
    name: "Double Cheese Bacon",
    description: "Dois hambúrgueres, queijo cheddar, bacon crocante, cebola roxa e molho especial.",
    ingredients: ["2x Hambúrgueres", "Queijo cheddar", "Bacon crocante", "Cebola roxa", "Molho especial"],
    price: 39.90,
    image: "/src/assets/burger.jpg",
    category: "Clássicos",
    calories: 780,
    prepTime: 18,
    isNew: false,
    quantity: 1,
    rating: 4.9,
    reviews: 156,
    allergens: ["Glúten", "Lactose"],
    spicy: false
  },
  {
    id: 5,
    name: "Spicy Jalapeño",
    description: "Hambúrguer apimentado, queijo pepper jack, jalapeños, pimenta e molho picante.",
    ingredients: ["Hambúrguer apimentado", "Queijo pepper jack", "Jalapeños", "Pimenta", "Molho picante"],
    price: 36.90,
    image: "/src/assets/burger.jpg",
    category: "Picante",
    calories: 620,
    prepTime: 14,
    isNew: true,
    quantity: 1,
    rating: 4.5,
    reviews: 98,
    allergens: ["Glúten", "Lactose"],
    spicy: true
  },
  {
    id: 6,
    name: "Mushroom Swiss",
    description: "Hambúrguer grelhado, queijo suíço, cogumelos salteados e molho de mostarda.",
    ingredients: ["Hambúrguer grelhado", "Queijo suíço", "Cogumelos salteados", "Molho de mostarda"],
    price: 33.90,
    image: "/src/assets/burger.jpg",
    category: "Clássicos",
    calories: 580,
    prepTime: 16,
    isNew: false,
    quantity: 1,
    rating: 4.4,
    reviews: 73,
    allergens: ["Glúten", "Lactose"],
    spicy: false
  },
  {
    id: 7,
    name: "BBQ Pulled Pork",
    description: "Carne de porco desfiada, molho barbecue, cebola caramelizada e queijo cheddar.",
    ingredients: ["Carne de porco desfiada", "Molho barbecue", "Cebola caramelizada", "Queijo cheddar"],
    price: 31.90,
    image: "/src/assets/burger.jpg",
    category: "Especiais",
    calories: 590,
    prepTime: 13,
    isNew: true,
    quantity: 1,
    rating: 4.6,
    reviews: 45,
    allergens: ["Glúten", "Lactose"],
    spicy: false
  },
  {
    id: 8,
    name: "Truffle Deluxe",
    description: "Hambúrguer wagyu, queijo truffle, rúcula e molho de trufas.",
    ingredients: ["Hambúrguer wagyu", "Queijo truffle", "Rúcula", "Molho de trufas"],
    price: 49.90,
    image: "/src/assets/burger.jpg",
    category: "Premium",
    calories: 720,
    prepTime: 20,
    isNew: false,
    quantity: 1,
    rating: 4.9,
    reviews: 34,
    allergens: ["Glúten", "Lactose"],
    spicy: false
  }
]

// Categorias disponíveis
export const categories = [
  { id: 'todos', name: 'Todos', icon: '🍔' },
  { id: 'classicos', name: 'Clássicos', icon: '🥩' },
  { id: 'frango', name: 'Frango', icon: '🐔' },
  { id: 'vegetariano', name: 'Vegetariano', icon: '🥬' },
  { id: 'picante', name: 'Picante', icon: '🌶️' },
  { id: 'especiais', name: 'Especiais', icon: '⭐' },
  { id: 'premium', name: 'Premium', icon: '💎' }
]

// Configurações do restaurante
export const restaurantConfig = {
  name: "Make Your Burger",
  description: "Hambúrgueres artesanais preparados com ingredientes frescos",
  address: "Rua das Delícias, 123 - Centro",
  phone: "(11) 99999-9999",
  email: "contato@makeyourburger.com",
  hours: {
    weekdays: "11:00 - 23:00",
    weekends: "12:00 - 24:00"
  },
  deliveryFee: 5.90,
  minOrderValue: 25.00,
  estimatedDeliveryTime: "30-45 min"
}

// Promoções e ofertas
export const promotions = [
  {
    id: 1,
    title: "Combo Duplo",
    description: "2 hambúrgueres + 2 batatas + 2 refrigerantes",
    discount: 15,
    validUntil: "2025-02-28",
    code: "COMBO15"
  },
  {
    id: 2,
    title: "Segunda-feira Vegana",
    description: "20% de desconto em todos os hambúrgueres vegetarianos",
    discount: 20,
    validUntil: "2025-12-31",
    code: "VEGAN20"
  },
  {
    id: 3,
    title: "Happy Hour",
    description: "Hambúrgueres com 30% de desconto das 15h às 18h",
    discount: 30,
    validUntil: "2025-12-31",
    code: "HAPPY30"
  }
]

// Avaliações dos clientes
export const reviews = [
  {
    id: 1,
    burgerId: 1,
    userName: "Maria Silva",
    rating: 5,
    comment: "O melhor hambúrguer que já comi! Ingredientes frescos e sabor incrível.",
    date: "2025-01-15"
  },
  {
    id: 2,
    burgerId: 4,
    userName: "João Santos",
    rating: 5,
    comment: "Double Cheese Bacon é perfeito! Bacon crocante e queijo derretido.",
    date: "2025-01-14"
  },
  {
    id: 3,
    burgerId: 3,
    userName: "Ana Costa",
    rating: 4,
    comment: "Excelente opção vegetariana! O hambúrguer de quinoa é delicioso.",
    date: "2025-01-13"
  }
]
