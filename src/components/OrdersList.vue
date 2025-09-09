<template>
  <div class="orders-list">
    <OrderCard
      v-for="order in orders"
      :key="order.id"
      :order="order"
      :expanded="expandedOrders.includes(order.id)"
      @toggle="() => $emit('toggle', order.id)"
      @cancel="() => $emit('cancel', order.id)"
      @reorder="() => $emit('reorder', order)"
    />
  </div>
</template>

<script setup>
import OrderCard from "./OrdersCard.vue";
defineProps({
  orders: Array,
  expandedOrders: Array,
});
defineEmits(["toggle", "cancel", "reorder"]);
</script>

<style scoped>
.orders-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
