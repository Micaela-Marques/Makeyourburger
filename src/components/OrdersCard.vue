<template>
    <div class="order-card" @click="$emit('toggle')">
      <div class="order-header">
        <div class="order-info">
          <h3>Pedido #{{ order.id }}</h3>
          <span class="order-date">{{ formatDate(order.createdAt) }}</span>
        </div>
        <span class="status-badge">{{ order.status }}</span>
      </div>
  
      <div class="order-summary">
        <span>{{ order.items.length }} item(s)</span>
        <span class="order-total">{{ formatPrice(order.total) }}</span>
      </div>
  
      <div v-if="expanded">
        <OrderDetails :order="order" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { formatPrice, formatDate } from '@db/index.js'
  import OrderDetails from './OrderDetails.vue'
  defineProps({ order: Object, expanded: Boolean })
  </script>
  
  <style scoped>
  .order-card {
    background: #fff;
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
    margin: 0;
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
  }
  .order-summary {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  .order-total {
    font-weight: bold;
    color: #d68a18;
  }
  </style>
  