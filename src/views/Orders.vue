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
import { ref, computed, onMounted, onUnmounted } from "vue";

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
  { id: "confirmado", name: "Confirmado", icon: "✅" },
  { id: "preparando", name: "Preparando", icon: "👨‍🍳" },
  { id: "a_caminho", name: "A caminho", icon: "🚚" },
];

// ---------------- FILTRO FINAL ----------------
const filteredOrders = computed(() => {
  // Primeiro, filtrar apenas pedidos ativos (confirmado, preparando e a_caminho)
  let filtered = orders.value.filter(order => 
    ['confirmado', 'preparando', 'a_caminho'].includes(order.status)
  );
  
  // Aplicar filtro de status
  if (activeFilter.value !== "all") {
    filtered = filtered.filter(order => order.status === activeFilter.value);
  }
  
  // Aplicar filtro de busca
  if (searchQuery.value) {
    filtered = searchOrders(searchQuery.value).filter(order => 
      filtered.includes(order) && ['confirmado', 'preparando', 'a_caminho'].includes(order.status)
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

// ---------------- ATUALIZAÇÃO AUTOMÁTICA ----------------
let updateInterval;

const updateOrders = () => {
  orders.value = getAllOrders();
};

// ---------------- MONTAGEM ----------------
onMounted(async () => {
  updateOrders();
  // Atualizar a cada 5 segundos para verificar mudanças de status
  updateInterval = setInterval(updateOrders, 5000);
});

onUnmounted(() => {
  if (updateInterval) {
    clearInterval(updateInterval);
  }
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
  padding-bottom: 80px; /* afasta do footer */
}
</style>
