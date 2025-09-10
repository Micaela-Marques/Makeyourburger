<template>
  <div class="orders-list">
    <div
      v-for="order in orders"
      :key="order.id"
      class="order-card"
      @click="$emit('toggle', order.id)"
    >
      <div class="order-header">
        <div class="order-info">
          <h3 class="order-number">Pedido #{{ order.id }}</h3>
          <span class="order-date">{{ formatDate(order.createdAt) }}</span>
        </div>
        <div class="order-status">
          <span :class="['status-badge', order.status]">
            {{ getStatusInfo(order.status).name }}
          </span>
        </div>
      </div>

      <div class="order-summary">
        <div class="order-items">
          <span class="items-count">{{ order.items.length }} item(s)</span>
          <span class="order-total">{{ formatPrice(order.total) }}</span>
        </div>
      </div>

      <!-- Detalhes expandidos -->
      <div
        v-if="expandedOrders.includes(order.id)"
        class="order-details-expanded"
      >
        <OrderDetails :order="order" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatPrice, formatDate } from "@db/index.js";
import OrderDetails from "./OrderDetails.vue";

defineProps({
  orders: Array,
  expandedOrders: Array,
});

defineEmits(["toggle"]);

const getStatusInfo = (status) => {
  const statuses = {
    entregue: { name: "Entregue", icon: "🎉" },
    cancelado: { name: "Cancelado", icon: "❌" },
  };
  return statuses[status] || { name: "Desconhecido", icon: "❓" };
};
</script>

<style scoped>
.orders-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order-card {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.order-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
}

.order-info h3 {
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 5px 0;
}

.order-date {
  font-size: 0.9rem;
  color: #666;
}

.status-badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.status-badge.entregue {
  background-color: #e8f5e8;
  color: #2e7d32;
}

.status-badge.cancelado {
  background-color: #ffebee;
  color: #d32f2f;
}

.order-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.order-items {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.items-count {
  font-size: 0.9rem;
  color: #666;
}

.order-total {
  font-size: 1.2rem;
  font-weight: bold;
  color: #d68a18;
}

.order-details-expanded {
  background-color: #f8f9fa;
  border-top: 1px solid #e0e0e0;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
}

@media (max-width: 768px) {
  .order-header {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
}
</style>
