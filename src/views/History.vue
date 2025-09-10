<template>
  <div class="history-page">
    <HistoryHeader />

    <div class="history-container">
      <EmptyState v-if="orders.length === 0" />
      <OrdersList
        v-else
        :orders="orders"
        :expandedOrders="expandedOrders"
        @toggle="toggleOrderDetails"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { getAllOrders } from "@db/orders.js";
import HistoryHeader from "../components/HistoryHeader.vue";
import EmptyState from "../components/EmptyState.vue";
import OrdersList from "../components/OrdersList.vue";

const orders = ref([]);
const expandedOrders = ref([]);

const toggleOrderDetails = (id) => {
  if (expandedOrders.value.includes(id)) {
    expandedOrders.value = expandedOrders.value.filter((x) => x !== id);
  } else {
    expandedOrders.value.push(id);
  }
};

let updateInterval;

const updateHistory = () => {
  orders.value = getAllOrders().filter((order) =>
    ["entregue", "cancelado"].includes(order.status)
  );
};

onMounted(() => {
  updateHistory();
  updateInterval = setInterval(updateHistory, 5000);
});

onUnmounted(() => {
  if (updateInterval) clearInterval(updateInterval);
});
</script>

<style scoped>
.history-page {
  min-height: calc(100vh - 120px);
  padding: 40px 0 80px 0;
}

.history-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
