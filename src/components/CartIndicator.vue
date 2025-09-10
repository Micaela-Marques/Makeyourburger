<template>
  <div class="cart-indicator" @click="toggleCart">
    <div class="cart-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffcd55"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </div>
    <div v-if="cartItemCount > 0" class="cart-badge">
      {{ cartItemCount }}
    </div>
    <div class="cart-total">
      {{ cartTotal }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { getCartSummary } from "@db/cart.js";

const cartItemCount = ref(0);
const cartTotal = ref("R$ 0,00");

const updateCartInfo = () => {
  const summary = getCartSummary();
  cartItemCount.value = summary.itemCount;
  cartTotal.value = summary.formattedTotal;
};

const toggleCart = () => {
  // Navegar para a página do carrinho
  window.location.href = "/carrinho";
};

onMounted(() => {
  updateCartInfo();

  // Atualizar a cada segundo para manter sincronizado
  setInterval(updateCartInfo, 1000);
});
</script>

<style scoped>
.cart-indicator {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: rgba(237, 170, 11, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cart-indicator:hover {
  background-color: rgba(237, 170, 11, 0.2);
  box-shadow: 0 0 8px rgba(237, 170, 11, 0.6);
  transform: scale(1.05);
}

.cart-icon {
  width: 24px;
  height: 24px;
  color: #edaa0b;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #c02b2b;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.cart-total {
  font-size: 14px;
  font-weight: 600;
  color: #ffcd55;
}

@media (max-width: 768px) {
  .cart-indicator {
    padding: 6px 10px;
  }

  .cart-icon {
    width: 20px;
    height: 20px;
  }

  .cart-total {
    font-size: 12px;
  }
}
</style>
