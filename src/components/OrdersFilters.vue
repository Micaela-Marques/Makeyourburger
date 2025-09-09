<template>
  <div class="orders-filters">
    <input
      :value="searchQuery"
      @input="$emit('update:searchQuery', $event.target.value)"
      type="text"
      class="search-input"
      placeholder="Buscar por item, pedido, status..."
    />
    <div class="filter-buttons">
      <button
        v-for="status in orderStatuses"
        :key="status.id"
        :class="['filter-btn', { active: activeFilter === status.id }]"
        @click="handleFilterClick(status.id)"
        type="button"
      >
        <span>{{ status.icon }}</span> {{ status.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  searchQuery: {
    type: String,
    default: ''
  },
  activeFilter: {
    type: String,
    default: ''
  },
  orderStatuses: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['update:searchQuery', 'update:activeFilter']);

const handleFilterClick = (statusId) => {
  emit('update:activeFilter', statusId);
};
</script>

<style scoped>
.orders-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  padding: 0 20px;
}

.search-input {
  flex: 1 1 300px;
  max-width: 700px;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  font-size: 1rem;
}

.filter-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 18px;
  border-radius: 6px;
  border: none;
  background: #f5f5f5;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.filter-btn.active {
  background: #edaa0b;
  color: #fff;
}
</style>
