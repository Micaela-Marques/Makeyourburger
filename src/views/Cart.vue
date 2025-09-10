<template>
  <div class="cart-page">
    <div class="cart-header">
      <h1>Carrinho de Compras</h1>
      <p class="cart-subtitle">Revise seus itens antes de finalizar o pedido</p>
    </div>

    <div class="cart-container">
      <!-- Carrinho vazio -->
      <div v-if="cartSummary.isEmpty" class="empty-cart">
        <div class="empty-icon">🛒</div>
        <h3>Seu carrinho está vazio</h3>
        <p>Adicione alguns hambúrgueres deliciosos ao seu carrinho!</p>
        <a href="/cardapio" class="cta-button">
          Ver Cardápio
        </a>
      </div>

      <!-- Carrinho com itens -->
      <div v-else class="cart-content">
        <!-- Lista de itens -->
        <div class="cart-items">
          <h2>Itens no Carrinho ({{ cartSummary.itemCount }})</h2>
          
          <div class="items-list">
            <div 
              v-for="item in cartSummary.items" 
              :key="item.burgerId"
              class="cart-item"
            >
              <div class="item-image">
                <img 
                  :src="item.burger.image" 
                  :alt="item.burger.name"
                  class="item-img"
                />
              </div>
              
              <div class="item-details">
                <h3>{{ item.burger.name }}</h3>
                <p>{{ item.burger.description }}</p>
                <div class="item-meta">
                  <span class="item-category">{{ item.burger.category }}</span>
                  <span class="item-price">{{ formatPrice(item.burger.price) }}</span>
                </div>
              </div>
              
              <div class="item-controls">
                <div class="quantity-control">
                  <button 
                    class="qty-btn" 
                    @click="updateQuantity(item.burgerId, item.quantity - 1)"
                    :disabled="item.quantity <= 1"
                  >
                    -
                  </button>
                  <span class="qty-num">{{ item.quantity }}</span>
                  <button 
                    class="qty-btn" 
                    @click="updateQuantity(item.burgerId, item.quantity + 1)"
                  >
                    +
                  </button>
                </div>
                
                <div class="item-total">
                  {{ formatPrice(item.subtotal) }}
                </div>
                
                <button 
                  class="remove-btn"
                  @click="removeItem(item.burgerId)"
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Resumo do pedido -->
        <div class="cart-summary">
          <h2>Resumo do Pedido</h2>
          
          <div class="summary-details">
            <div class="summary-row">
              <span>Subtotal ({{ cartSummary.itemCount }} itens):</span>
              <span>{{ formatPrice(cartSummary.total) }}</span>
            </div>
            
            <div class="summary-row">
              <span>Taxa de Entrega:</span>
              <span>{{ formatPrice(deliveryFee) }}</span>
            </div>
            
            <div class="summary-row total-row">
              <span>Total:</span>
              <span>{{ formatPrice(cartSummary.total + deliveryFee) }}</span>
            </div>
          </div>

          <!-- Informações de entrega -->
          <div class="delivery-info">
            <h3>Informações de Entrega</h3>
            
            <div class="form-group">
              <label for="delivery-address">Endereço de Entrega:</label>
              <input 
                id="delivery-address"
                v-model="deliveryAddress"
                type="text"
                placeholder="Digite seu endereço completo"
                class="form-input"
              />
            </div>
            
            <div class="form-group">
              <label for="payment-method">Forma de Pagamento:</label>
              <select 
                id="payment-method"
                v-model="paymentMethod"
                class="form-select"
              >
                <option value="pix">PIX</option>
                <option value="cartao">Cartão de Crédito</option>
                <option value="dinheiro">Dinheiro</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="estimated-time">Tempo Estimado:</label>
              <span class="estimated-time">{{ estimatedTime }} min</span>
            </div>
          </div>

          <!-- Botões de ação -->
          <div class="cart-actions">
            <button 
              class="continue-shopping-btn"
              @click="window.location.href = '/cardapio'"
            >
              Continuar Comprando
            </button>
            
            <button 
              class="checkout-btn"
              @click="proceedToCheckout"
              :disabled="!canCheckout"
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { 
  getCartSummary, 
  updateCartItemQuantity, 
  removeFromCart,
  saveOrder,
  clearCart
} from '../db/cart.js'
import { formatPrice } from '../db/index.js'

// Estado reativo
const cartSummary = ref({ items: [], total: 0, isEmpty: true })
const deliveryAddress = ref('')
const paymentMethod = ref('pix')
const deliveryFee = ref(5.90)
const estimatedTime = ref(30)

// Computed
const canCheckout = computed(() => {
  return !cartSummary.value.isEmpty && 
         (deliveryAddress.value || '').trim().length > 0 &&
         paymentMethod.value.length > 0
})

// Métodos
const updateCartInfo = () => {
  cartSummary.value = getCartSummary()
}

const updateQuantity = (burgerId, newQuantity) => {
  updateCartItemQuantity(burgerId, newQuantity)
  updateCartInfo()
}

const removeItem = (burgerId) => {
  if (confirm('Tem certeza que deseja remover este item do carrinho?')) {
    removeFromCart(burgerId)
    updateCartInfo()
  }
}

const proceedToCheckout = () => {
  if (!canCheckout.value) return
  
  const orderData = {
    items: cartSummary.value.items,
    total: cartSummary.value.total + deliveryFee.value,
    subtotal: cartSummary.value.total,
    deliveryFee: deliveryFee.value,
    status: 'confirmado',
    paymentMethod: getPaymentMethodName(paymentMethod.value),
    deliveryAddress: deliveryAddress.value,
    estimatedTime: `${estimatedTime.value}-${estimatedTime.value + 15} min`
  }
  
  const savedOrder = saveOrder(orderData)
  
  if (savedOrder) {
    alert('Pedido realizado com sucesso! Você pode acompanhar o status em "Meus Pedidos".')
    window.location.href = '/pedidos'
  } else {
    alert('Erro ao processar o pedido. Tente novamente.')
  }
}

const getPaymentMethodName = (method) => {
  const methods = {
    'pix': 'PIX',
    'cartao': 'Cartão de Crédito',
    'dinheiro': 'Dinheiro'
  }
  return methods[method] || 'PIX'
}

// Inicialização
let intervalId

onMounted(() => {
  updateCartInfo()
  intervalId = setInterval(updateCartInfo, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.cart-page {
  min-height: calc(100vh - 120px);
  padding: 40px 0 80px 0;

}

.cart-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 0 20px;
}

.cart-header h1 {
  font-size: 3rem;
  color: #fff;
  margin: 0 0 16px 0;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
}

.cart-subtitle {
  font-size: 1.2rem;
  color: #f5f5f5;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.cart-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.empty-cart {
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

.empty-cart h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.empty-cart p {
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

.cart-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

.cart-items {
  background-color: #fff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.cart-items h2 {
  font-size: 1.5rem;
  color: #333;
  margin: 0 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
}

.items-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 12px;
  align-items: center;
}

.item-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
}

.item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-details h3 {
  font-size: 1.1rem;
  color: #333;
  margin: 0 0 5px 0;
}

.item-details p {
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 10px 0;
  line-height: 1.4;
}

.item-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-category {
  font-size: 0.8rem;
  color: #edaa0b;
  font-weight: 600;
  text-transform: uppercase;
}

.item-price {
  font-size: 1rem;
  font-weight: bold;
  color: #d68a18;
}

.item-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
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
  transform: none;
}

.qty-num {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  min-width: 30px;
  text-align: center;
}

.item-total {
  font-size: 1.2rem;
  font-weight: bold;
  color: #d68a18;
}

.remove-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.remove-btn:hover {
  background-color: #ffebee;
  transform: scale(1.1);
}

.cart-summary {
  background-color: #fff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  height: fit-content;
}

.cart-summary h2 {
  font-size: 1.5rem;
  color: #333;
  margin: 0 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
}

.summary-details {
  margin-bottom: 30px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.total-row {
  font-weight: bold;
  font-size: 1.2rem;
  color: #d68a18;
  padding-top: 10px;
  border-top: 2px solid #e0e0e0;
  border-bottom: none;
}

.delivery-info {
  margin-bottom: 30px;
}

.delivery-info h3 {
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 20px 0;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.form-input, .form-select {
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-input:focus, .form-select:focus {
  outline: none;
  border-color: #edaa0b;
  box-shadow: 0 0 0 3px rgba(237, 170, 11, 0.1);
}

.estimated-time {
  font-weight: bold;
  color: #edaa0b;
}

.cart-actions {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.continue-shopping-btn {
  padding: 12px 20px;
  background-color: #f5f5f5;
  color: #666;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.continue-shopping-btn:hover {
  background-color: #e0e0e0;
  color: #333;
}

.checkout-btn {
  padding: 15px 20px;
  background: linear-gradient(135deg, #edaa0b, #d68a18);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.checkout-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #c02b2b, #a01e1e);
  transform: translateY(-2px);
}

.checkout-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
}

/* Responsividade */
@media (max-width: 768px) {
  .cart-page {
    padding: 20px 0 80px 0;
  }
  
  .cart-header h1 {
    font-size: 2.2rem;
  }
  
  .cart-subtitle {
    font-size: 1rem;
  }
  
  .cart-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .cart-item {
    grid-template-columns: 60px 1fr;
    grid-template-rows: auto auto;
    gap: 15px;
  }
  
  .item-controls {
    grid-column: 1 / -1;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .item-image {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 480px) {
  .cart-item {
    padding: 15px;
  }
  
  .item-controls {
    flex-direction: column;
    gap: 10px;
  }
  
  .quantity-control {
    gap: 8px;
  }
  
  .qty-btn {
    width: 28px;
    height: 28px;
    font-size: 16px;
  }
}
</style>