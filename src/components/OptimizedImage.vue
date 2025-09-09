<template>
  <div class="image-wrapper" :class="{ 'loading': isLoading }">
    <img
      v-if="!isLoading"
      :src="optimizedSrc"
      :alt="alt"
      :class="imageClass"
      @load="onImageLoad"
      @error="onImageError"
      loading="lazy"
    />
    <div v-if="isLoading" class="image-placeholder">
      <div class="loading-spinner"></div>
    </div>
    <div v-if="hasError" class="image-error">
      <span>Erro ao carregar imagem</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  imageClass: {
    type: String,
    default: ''
  },
  width: {
    type: Number,
    default: 400
  },
  height: {
    type: Number,
    default: 300
  },
  quality: {
    type: Number,
    default: 80
  }
})

const isLoading = ref(true)
const hasError = ref(false)
const observer = ref(null)

// URL otimizada (simulando otimização de imagem)
const optimizedSrc = computed(() => {
  // Em um projeto real, você usaria um serviço como Cloudinary, ImageKit, ou similar
  // Para este exemplo, vamos apenas retornar a imagem original
  return props.src
})

const onImageLoad = () => {
  isLoading.value = false
  hasError.value = false
}

const onImageError = () => {
  isLoading.value = false
  hasError.value = true
}

// Intersection Observer para lazy loading
const setupIntersectionObserver = () => {
  if ('IntersectionObserver' in window) {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Quando a imagem entra na viewport, carregamos
            isLoading.value = false
            observer.value?.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '50px'
      }
    )
  }
}

onMounted(() => {
  setupIntersectionObserver()
})

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})
</script>

<style scoped>
.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image-wrapper.loading {
  background-color: #f0f0f0;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #e0e0e0;
  border-top: 3px solid #edaa0b;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.image-error {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  color: #666;
  font-size: 14px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.image-wrapper.loading img {
  opacity: 0;
}
</style>
