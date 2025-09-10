<template>
  <div class="search-filter-bar">
    <div class="search-container">
      <input
        v-model="localSearchQuery"
        type="text"
        placeholder="Buscar hambúrgueres..."
        class="search-input"
        @input="updateSearch"
      />
      <div class="search-icon">🔍</div>
    </div>

    <div class="filter-buttons">
      <button
        v-for="category in categories"
        :key="category"
        :class="['filter-btn', { active: activeFilter === category }]"
        @click="$emit('update:activeFilter', category)"
      >
        {{ category }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  categories: Array,
  searchQuery: String,
  activeFilter: String,
});

const emit = defineEmits(["update:searchQuery", "update:activeFilter"]);

const localSearchQuery = ref(props.searchQuery);

watch(
  () => props.searchQuery,
  (val) => {
    localSearchQuery.value = val;
  }
);

const updateSearch = () => {
  emit("update:searchQuery", localSearchQuery.value);
};
</script>

<style scoped>
.search-filter-bar {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza tudo no eixo horizontal */
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  padding: 20px 0;
  text-align: center;
}

.search-container {
  position: relative;
  width: 100%;
  max-width: 700px; /* controla o limite */
  display: flex;
  justify-content: center;
}

.search-input {
  width: 100%; /* ocupa até o max-width */
  padding: 12px 16px 12px 45px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  background-color: #fff;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #edaa0b;
  box-shadow: 0 4px 12px rgba(237, 170, 11, 0.3);
}

.search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #666;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center; /* já centraliza os botões */
}

.filter-btn {
  padding: 8px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 20px;
  background-color: #fff;
  color: #666;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: #edaa0b;
  color: #edaa0b;
  transform: translateY(-2px);
}

.filter-btn.active {
  background-color: #edaa0b;
  border-color: #edaa0b;
  color: #fff;
}
</style>
