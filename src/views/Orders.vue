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
  getOrderHistory,
  cancelOrder as cancelOrderService,
} from "@db/cart.js";

// ---------------- STATE ----------------
const searchQuery = ref("");
const activeFilter = ref("all");
const orders = ref([]);
const expandedOrders = ref([]);

// ---------------- ESTATÍSTICAS ----------------
const stats = computed(() => {
  const total = orders.value.length;
  const emAndamento = orders.value.filter((o) =>
    ["preparing", "delivering"].includes(o.status)
  ).length;
  const concluido = orders.value.filter((o) => o.status === "delivered").length;
  const cancelado = orders.value.filter((o) => o.status === "cancelled").length;

  return [
    { label: "Total", value: total, icon: "📦" },
    { label: "Em andamento", value: emAndamento, icon: "⏳" },
    { label: "Concluídos", value: concluido, icon: "✅" },
    { label: "Cancelados", value: cancelado, icon: "❌" },
  ];
});

// ---------------- STATUS DISPONÍVEIS ----------------
const orderStatuses = [
  { id: "all", name: "Todos", icon: "📦" },
  { id: "preparing", name: "Preparando", icon: "👨‍🍳" },
  { id: "delivering", name: "A caminho", icon: "🚚" },
  { id: "delivered", name: "Entregue", icon: "✅" },
  { id: "cancelled", name: "Cancelado", icon: "❌" },
];

// ---------------- FILTRO FINAL ----------------
const filteredOrders = computed(() => {
  return orders.value.filter((o) => {
    const matchStatus =
      activeFilter.value === "all" || o.status === activeFilter.value;
    const matchSearch =
      !searchQuery.value ||
      o.items.some((i) =>
        i.burger?.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      ) ||
      o.deliveryAddress
        ?.toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      o.paymentMethod
        ?.toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      o.id.toString().includes(searchQuery.value);
    return matchStatus && matchSearch;
  });
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
  orders.value = await getOrderHistory();
};

const reorderItems = (order) => {
  console.log("Reordenar:", order);
};

// ---------------- MONTAGEM ----------------
onMounted(async () => {
  orders.value = await getOrderHistory();
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
