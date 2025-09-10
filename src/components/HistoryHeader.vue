<template>
  <div class="history-header">
    <h1>Histórico de Pedidos</h1>
    <p class="history-subtitle">Visualize todos os seus pedidos anteriores</p>
  </div>
</template>

<script setup></script>

<style scoped>
.history-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 0 20px;
}

.history-header h1 {
  font-size: 3rem;
  color:#c02b2b;
  margin: 0 0 16px 0;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
}

.history-subtitle {
  font-size: 1.2rem;
  color: #c02b2b;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .history-header h1 {
    font-size: 2.2rem;
  }

  .history-subtitle {
    font-size: 1rem;
  }
}
</style>
