
<!-- Exemplo de uso de aliases em componentes Vue -->
<template>
  <div class="example-component">
    <h2>Exemplo de Uso de Aliases</h2>
    
    <!-- Usando alias para imagens -->
    <img :src="logoImage" alt="Logo" class="logo" />
    <img :src="burgerImage" alt="Hambúrguer" class="burger" />
    
    <!-- Usando alias para ícones sociais -->
    <div class="social-icons">
      <img :src="facebookIcon" alt="Facebook" />
      <img :src="instagramIcon" alt="Instagram" />
      <img :src="whatsappIcon" alt="WhatsApp" />
    </div>
    
    <!-- Componente usando alias -->
    <Card :item="sampleItem" />
  </div>
</template>

<script setup>
// Importando componentes usando aliases
import Card from '@components/Card.vue'

// Importando imagens usando aliases
import logoImage from '@images/logo.png'
import burgerImage from '@burger/cheeseburguer-classico-na-placa-de-madeira.jpg'

// Importando ícones sociais usando aliases
import facebookIcon from '@social/facebook.png'
import instagramIcon from '@social/instagram.png'
import whatsappIcon from '@social/whatsapp.png'

// Importando dados do banco usando aliases
import { burgers } from '@db/burgers.js'
import { formatPrice } from '@db/index.js'

// Importando estilos usando aliases
import '@styles'

// Dados de exemplo
const sampleItem = {
  id: 1,
  name: 'Hambúrguer Clássico',
  price: 25.90,
  image: burgerImage
}

// Função usando utilitário do banco
const formatItemPrice = (price) => {
  return formatPrice(price)
}
</script>

<style scoped>
.example-component {
  padding: 20px;
  text-align: center;
}

.logo {
  width: 100px;
  height: auto;
  margin-bottom: 20px;
}

.burger {
  width: 200px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.social-icons img {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
}

.social-icons img:hover {
  transform: scale(1.1);
}
</style>
