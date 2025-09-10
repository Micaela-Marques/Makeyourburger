<template>
  <div class="order-details">
    <h4>📋 Detalhes do Pedido</h4>
    
    <!-- Informações do Cliente -->
    <div class="customer-info">
      <h5>👤 Cliente</h5>
      <p><strong>Nome:</strong> {{ order.customerName }}</p>
      <p><strong>Email:</strong> {{ order.customerEmail }}</p>
      <p><strong>Telefone:</strong> {{ order.customerPhone }}</p>
    </div>

    <!-- Itens do Pedido -->
    <div class="items-section">
      <h5>🍔 Itens</h5>
      <div v-for="item in order.items" :key="item.burgerId" class="order-item">
        <div class="item-info">
          <span class="item-name">{{ item.burger?.name }}</span>
          <span class="item-quantity">x{{ item.quantity }}</span>
        </div>
        <div class="item-price">{{ formatPrice(item.burger?.price * item.quantity) }}</div>
      </div>
    </div>

    <!-- Resumo do Pedido -->
    <div class="order-summary-section">
      <h5>💰 Resumo</h5>
      <p><strong>Total:</strong> {{ formatPrice(order.total) }}</p>
      <p><strong>Método de Pagamento:</strong> {{ order.paymentMethod }}</p>
      <p><strong>Endereço de Entrega:</strong> {{ order.deliveryAddress }}</p>
      <p v-if="order.notes"><strong>Observações:</strong> {{ order.notes }}</p>
    </div>

    <!-- Datas Importantes -->
    <div class="dates-section">
      <h5>📅 Datas</h5>
      <p><strong>Pedido realizado:</strong> {{ formatDateTime(order.createdAt) }}</p>
      <p v-if="order.deliveredAt"><strong>Entregue em:</strong> {{ formatDateTime(order.deliveredAt) }}</p>
      <p v-if="order.cancelledAt"><strong>Cancelado em:</strong> {{ formatDateTime(order.cancelledAt) }}</p>
    </div>

    <!-- Histórico de Status -->
    <StatusHistory v-if="order.statusHistory" :history="order.statusHistory" />
  </div>
</template>
  
<script setup>
import StatusHistory from './StatusHistory.vue'
import { formatPrice } from '@db/index.js'

defineProps({ order: Object })

const formatDateTime = (dateString) => {
  if (!dateString) return 'N/A'
  const date = new Date(dateString)
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>
  
  <style scoped>
.order-details {
  padding: 20px;
  background: #f8f9fa;
  border-top: 1px solid #e0e0e0;
}

.order-details h4 {
  margin: 0 0 20px 0;
  color: #333;
  font-size: 1.1rem;
  border-bottom: 2px solid #d68a18;
  padding-bottom: 8px;
}

.order-details h5 {
  margin: 16px 0 8px 0;
  color: #555;
  font-size: 0.95rem;
  font-weight: 600;
}

.customer-info,
.items-section,
.order-summary-section,
.dates-section {
  margin-bottom: 20px;
  padding: 12px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.order-item:last-child {
  border-bottom: none;
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.item-name {
  font-weight: 500;
  color: #333;
}

.item-quantity {
  font-size: 0.85rem;
  color: #666;
}

.item-price {
  font-weight: 600;
  color: #d68a18;
}

.order-details p {
  margin: 6px 0;
  color: #555;
  line-height: 1.4;
}

.order-details strong {
  color: #333;
}
</style>
  