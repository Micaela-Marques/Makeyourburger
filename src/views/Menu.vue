<template>
  <div class="menu-page">
    <div class="menu-header">
      <h1>Nosso Cardápio</h1>
      <p class="menu-subtitle">Descubra nossos hambúrgueres artesanais preparados com ingredientes frescos</p>
    </div>
    <Card />
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";
</script>

<style scoped>
.menu-page {
  min-height: calc(100vh - 120px); /* Ajusta para navbar e footer */
  padding: 40px 0 80px 0; /* Espaço para o footer fixo */
  background: linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD853F 100%);
}

.menu-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 0 20px;
}

.menu-header h1 {
  font-size: 3rem;
  color: #fff;
  margin: 0 0 16px 0;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
}

.menu-subtitle {
  font-size: 1.2rem;
  color: #f5f5f5;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* Responsividade */
@media (max-width: 768px) {
  .menu-page {
    padding: 20px 0 80px 0;
  }
  
  .menu-header h1 {
    font-size: 2.2rem;
  }
  
  .menu-subtitle {
    font-size: 1rem;
    padding: 0 20px;
  }
}

@media (max-width: 480px) {
  .menu-header h1 {
    font-size: 1.8rem;
  }
  
  .menu-subtitle {
    font-size: 0.9rem;
  }
}
</style>