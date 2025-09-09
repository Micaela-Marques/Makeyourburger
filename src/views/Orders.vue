<template>
  <div class="orders-page">
    <!-- FILTROS -->
    <OrdersFilters
      v-model:searchQuery="searchQuery"
      v-model:activeFilter="activeFilter"
      :orderStatuses="orderStatuses"
    />

    <!-- LISTA DE PEDIDOS -->
    <OrdersList
      :orders="filteredOrders"
      :expandedOrders="expandedOrders"
      @toggle="toggleOrderDetails"
      @cancel="cancelOrder"
      @reorder="reorderItems"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

// 👉 importa os componentes prontos
import OrdersFilters from "../components/OrdersFilters.vue";
import OrdersList from "../components/OrdersList.vue";

// 👉 importa serviços/db
import {
  getAllOrders,
  getOrdersByStatus,
  cancelOrder as cancelOrderService,
  getOrderStats,
  searchOrders
} from "@db/orders.js";

// ---------------- STATE ----------------
const searchQuery = ref("");
const activeFilter = ref("all");
const orders = ref([]);
const expandedOrders = ref([]);

// ---------------- ESTATÍSTICAS ----------------
const stats = computed(() => {
  const orderStats = getOrderStats();
  return [
    { label: "Total", value: orderStats.total, icon: "📦" },
    { label: "Em andamento", value: orderStats.emAndamento, icon: "⏳" },
    { label: "Concluídos", value: orderStats.concluidos, icon: "✅" },
    { label: "Cancelados", value: orderStats.cancelados, icon: "❌" },
  ];
});

// ---------------- STATUS DISPONÍVEIS ----------------
const orderStatuses = [
  { id: "all", name: "Todos", icon: "📦" },
  { id: "preparando", name: "Preparando", icon: "👨‍🍳" },
  { id: "a_caminho", name: "A caminho", icon: "🚚" },
  { id: "entregue", name: "Entregue", icon: "✅" },
  { id: "cancelado", name: "Cancelado", icon: "❌" },
];

// ---------------- FILTRO FINAL ----------------
const filteredOrders = computed(() => {
  let filtered = orders.value;
  
  // Aplicar filtro de status
  if (activeFilter.value !== "all") {
    filtered = filtered.filter(order => order.status === activeFilter.value);
  }
  
  // Aplicar filtro de busca
  if (searchQuery.value) {
    filtered = searchOrders(searchQuery.value).filter(order => 
      filtered.includes(order)
    );
  }
  
  return filtered;
});

// ---------------- AÇÕES ----------------
const toggleOrderDetails = (id) => {
  if (expandedOrders.value.includes(id)) {
    expandedOrders.value = expandedOrders.value.filter((x) => x !== id);
  } else {
    expandedOrders.value.push(id);
  }
};

const cancelOrder = async (id) => {
  await cancelOrderService(id);
  orders.value = getAllOrders();
};

const reorderItems = (order) => {
  console.log("Reordenar:", order);
};

// ---------------- MONTAGEM ----------------
onMounted(async () => {
  orders.value = getAllOrders();
});
</script>

<style scoped>
.orders-page {
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 700px;
}
</style>
