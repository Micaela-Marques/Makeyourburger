<template>
    <div class="order-details">
      <h4>Itens</h4>
      <div v-for="item in order.items" :key="item.burgerId" class="order-item">
        <div>{{ item.burger?.name }} x{{ item.quantity }}</div>
        <div>{{ formatPrice(item.burger?.price * item.quantity) }}</div>
      </div>
  
      <h4>Resumo</h4>
      <p>Método: {{ order.paymentMethod }}</p>
      <p>Endereço: {{ order.deliveryAddress }}</p>
  
      <StatusHistory v-if="order.statusHistory" :history="order.statusHistory" />
    </div>
  </template>
  
  <script setup>
  import StatusHistory from './StatusHistory.vue'
  import { formatPrice } from '@db/index.js'
  defineProps({ order: Object })
  </script>
  
  <style scoped>
  .order-details {
    padding: 20px;
    background: #f8f9fa;
    border-top: 1px solid #e0e0e0;
  }
  .order-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  </style>
  