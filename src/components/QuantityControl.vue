<template>
  <div class="quantity-control">
    <button
      class="qty-btn"
      @click="$emit('decrease')"
      :disabled="quantity <= 1"
    >
      -
    </button>
    <span class="qty-num">{{ quantity.toString().padStart(2, "0") }}</span>
    <button class="qty-btn" @click="$emit('increase')">+</button>
  </div>
</template>

<script setup>
const props = defineProps({
  quantity: Number,
});
</script>

<style scoped>
.quantity-control {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
}

.qty-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: #edaa0b;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.qty-btn:hover:not(:disabled) {
  background: #c02b2b;
  transform: scale(1.1);
}

.qty-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.qty-num {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  min-width: 30px;
  text-align: center;
}
</style>
