<template>
  <div class="card-details">
    <div class="image-container">
      <OptimizedImage
        :src="burger.image"
        :alt="burger.name"
        image-class="burgerimg"
        :width="320"
        :height="200"
      />
      <div v-if="burger.isNew" class="new-badge">NOVO</div>
    </div>

    <div class="card-content">
      <h3>{{ burger.name }}</h3>
      <p>{{ burger.description }}</p>

      <!-- Quantidade -->
      <QuantityControl
        :quantity="burger.quantity"
        @increase="$emit('increaseQuantity', burger.id)"
        @decrease="$emit('decreaseQuantity', burger.id)"
      />

      <!-- Preço + Botão -->
      <div class="price-add-container">
        <span class="price"
          >R$ {{ burger.price.toFixed(2).replace(".", ",") }}</span
        >
        <button class="add-btn" @click="$emit('addToCart', burger)">
          Adicionar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import OptimizedImage from "./OptimizedImage.vue";
import QuantityControl from "./QuantityControl.vue";

const props = defineProps({
  burger: Object,
});
</script>

<style scoped>
.menu-section {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Barra de busca e filtros */
.search-filter-bar {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  padding: 20px 0;
}

.search-container {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
}

.search-input {
  width: 100%;
  padding: 12px 16px 12px 45px;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 16px;
  background-color: #fff;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.search-input:focus {
  outline: none;
  border-color: #edaa0b;
  box-shadow: 0 4px 12px rgba(237, 170, 11, 0.3);
}

.search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #666;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.filter-btn {
  padding: 8px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 20px;
  background-color: #fff;
  color: #666;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: #edaa0b;
  color: #edaa0b;
  transform: translateY(-2px);
}

.filter-btn.active {
  background-color: #edaa0b;
  border-color: #edaa0b;
  color: #fff;
}

/* Cards container */
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
}

/* Card individual */
.card-details {
  display: flex;
  flex-direction: column;
  flex: 1 1 300px;
  max-width: 320px;
  min-height: 480px;
  max-height: 480px;
  background-color: #FFF4E0;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  transition: none;
}

.card-details:hover {
  transform: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.image-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.burgerimg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: none;
}

.card-details:hover .burgerimg {
  transform: none;
}

.new-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: #fff;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Conteúdo do card */
.card-content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-content h3 {
  font-size: 1.2rem;
  margin: 0 0 8px 0;
  color: #c02b2b;
  text-align: center;
  font-weight: bold;
  line-height: 1.3;
}

.card-content p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 15px;
  text-align: center;
  line-height: 1.5;
  flex-grow: 1;
}

/* Remover efeito de expandir */
.expanded-details {
  display: none !important;
}

.ingredients h4 {
  font-size: 0.9rem;
  color: #333;
  margin: 0 0 8px 0;
  font-weight: 600;
}

.ingredients ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ingredients li {
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 4px;
  padding-left: 12px;
  position: relative;
}

.ingredients li::before {
  content: "•";
  color: #edaa0b;
  position: absolute;
  left: 0;
}

.nutrition {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #e0e0e0;
}

.calories,
.prep-time {
  font-size: 0.8rem;
  color: #666;
  font-weight: 500;
}

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
  user-select: none;
}

.qty-btn:hover:not(:disabled) {
  background: #c02b2b;
  transform: scale(1.1);
}

.qty-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
}

.qty-num {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  min-width: 30px;
  text-align: center;
}

/* Container preço e botão */
.price-add-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.price {
  font-size: 1.3rem;
  font-weight: bold;
  color: #d68a18;
  text-align: center;
}

.add-btn {
  width: 100%;
  background: linear-gradient(135deg, #edaa0b, #d68a18);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.add-btn:hover {
  background: linear-gradient(135deg, #c02b2b, #a01e1e);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(192, 43, 43, 0.3);
}

.add-btn:active {
  transform: translateY(0);
}

/* Responsividade */
@media (max-width: 768px) {
  .cards-container {
    justify-content: center;
    gap: 20px;
    padding: 10px;
  }

  .search-filter-bar {
    padding: 10px;
  }

  .filter-buttons {
    gap: 8px;
  }

  .filter-btn {
    padding: 6px 12px;
    font-size: 13px;
  }

  .card-content {
    padding: 15px;
  }

  .image-container {
    height: 180px;
  }

  .card-details {
    flex: 1 1 260px;
    max-width: 280px;
    min-height: 440px;
    max-height: 440px;
  }
}

@media (max-width: 480px) {
  .cards-container {
    gap: 15px;
    padding: 10px;
  }

  .search-input {
    font-size: 14px;
    padding: 10px 14px 10px 40px;
  }

  .card-details {
    flex: 1 1 100%;
    max-width: 100%;
    min-height: 400px;
    max-height: 100%;
  }
}
</style>
