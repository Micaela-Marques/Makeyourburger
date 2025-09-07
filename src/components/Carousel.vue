<template>
  <div class="carousel-container">
    <swiper
      :modules="[Navigation, Autoplay]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 3500, disableOnInteraction: false }"
      navigation
      class="carousel-swiper"
    >
      <swiper-slide v-for="(img, index) in imagens" :key="index">
        <div class="slide-content">
          <img :src="img" class="slide-img" />
          <button class="slide-btn">Saiba Mais</button>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

// Importar as imagens
import social1 from '../assets/social1.JPG'
import social2 from '../assets/social2.jpg'
import social3 from '../assets/social3.jpg'
import social4 from '../assets/social4.jpg'

const imagens = [social1, social2, social3, social4]
</script>

<style scoped>
.carousel-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.carousel-swiper {
  width: 100vw;
  height: 100vh;
}

.slide-content {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.slide-img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  border-radius: 0;
  display: block;
}

.slide-btn {
  position: absolute;
  bottom: 86px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #edaa0b 0%, #c02b2b 100%);
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 16px 40px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  transition: background 0.3s, transform 0.2s;
  z-index: 2;
}

.slide-btn:hover {
  background: linear-gradient(90deg, #c02b2b 0%, #edaa0b 100%);
  transform: translateX(-50%) scale(1.05);
}

/* Swiper navigation arrows customization */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #fff;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  transition: background 0.2s;
}

:deep(.swiper-button-next):hover,
:deep(.swiper-button-prev):hover {
  background: rgba(237, 170, 11, 0.8);
  color: #222;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  font-size: 24px;
}

:deep(.swiper-pagination) {
  display: none;
}
</style>
