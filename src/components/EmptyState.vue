<template>
  <div class="empty-state">
    <div class="empty-icon">📋</div>
    <h3>Nenhum pedido encontrado</h3>
    <p>Você ainda não fez nenhum pedido.</p>
    <a href="/cardapio" class="cta-button">
      Fazer Primeiro Pedido
    </a>
  </div>
</template>

<script setup>
// Componente para estado vazio do histórico
</script>

<style scoped>
.empty-state {
  text-align: center;
  padding: 60px 20px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.empty-state h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.empty-state p {
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
}

.cta-button {
  display: inline-block;
  padding: 12px 24px;
  background: linear-gradient(135deg, #edaa0b, #d68a18);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: linear-gradient(135deg, #c02b2b, #a01e1e);
  transform: translateY(-2px);
}
</style>
