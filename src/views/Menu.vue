<template>
  <div class="menu-section">
    <!-- Barra de busca e filtros -->
    <SearchFilterBar
      v-model:searchQuery="searchQuery"
      v-model:activeFilter="activeFilter"
      :categories="availableCategories"
    />

    <!-- Grid de cards -->
    <div class="cards-container">
      <BurgerCard
        v-for="burger in filteredBurgers"
        :key="burger.id"
        :burger="burger"
        @increaseQuantity="increaseQuantity"
        @decreaseQuantity="decreaseQuantity"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import SearchFilterBar from '../components/SearchFilterBar.vue'
import BurgerCard from '../components/BurgerCard.vue'
import { burgerData, categories, getBurgersByCategory, searchBurgers } from '../db/index.js'
import { addToCart as addToCartService } from '../db/cart.js'

const searchQuery = ref('')
const activeFilter = ref('Todos')
const burgers = ref([])

const availableCategories = computed(() => categories.map(cat => cat.name))

const filteredBurgers = computed(() => {
  let filtered = burgers.value
  if (activeFilter.value !== 'Todos') {
    filtered = getBurgersByCategory(activeFilter.value.toLowerCase())
  }
  if (searchQuery.value) {
    filtered = searchBurgers(searchQuery.value)
  }
  return filtered
})

const increaseQuantity = (id) => {
  const burger = burgers.value.find(b => b.id === id)
  if (burger) burger.quantity++
}

const decreaseQuantity = (id) => {
  const burger = burgers.value.find(b => b.id === id)
  if (burger && burger.quantity > 1) burger.quantity--
}

const addToCart = (burger) => {
  const success = addToCartService(burger.id, burger.quantity)
  if (success) console.log('Adicionado ao carrinho:', burger.name)
}

onMounted(() => {
  burgers.value = [...burgerData]
})
</script>

<style scoped>

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
  max-width: 1400px;
}



</style>