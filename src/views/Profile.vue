<template>
  <div class="profile-page">
    <!-- Botão Voltar -->
    <button class="back-button" @click="goHome" aria-label="Voltar">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ed0b0b"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>

    <!-- Container -->
    <div class="profile-container">
      <!-- Banner + Avatar + Infos -->
      <div class="profile-header-section">
        <!-- Banner -->
        <div class="profile-banner">
          <div class="banner-pattern"></div>
        </div>

        <!-- Avatar -->
        <div class="profile-avatar">
          <button class="btn-upload">
            <div class="avatar-ring">
              <img
                src="/src/assets/avatar.jpg"
                alt="Foto do usuário"
                class="avatar-image"
              />
            </div>
          </button>
        </div>

        <!-- Informações -->
        <div class="profile-info-main">
          <h1 class="profile-name">{{ userInfo.name }}</h1>
          <p class="profile-details">
            {{ userInfo.gender }} - {{ userInfo.age }} anos
          </p>
        </div>
      </div>

      <!-- Informações de Contato -->
      <div class="contact-section">
        <p><strong>Email:</strong> {{ userInfo.email }}</p>
        <p><strong>Telefone:</strong> {{ userInfo.phone }}</p>
        <p><strong>Endereço:</strong> {{ userInfo.address }}</p>
        <p><strong>ID:</strong> {{ userInfo.id }}</p>
      </div>

      <!-- Botão Editar -->
      <div class="edit-section">
        <button class="action-btn primary" @click="editProfile">
          ✏️ Editar Perfil
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const userInfo = ref({
  name: "João Silva",
  email: "joao.silva@email.com",
  phone: "(11) 99999-9999",
  address: "Rua das Flores, 123 - Centro",
  gender: "Masculino",
  age: 28,
  id: "245566742-2",
});

const editProfile = () => {
  alert("Funcionalidade de edição será implementada em breve!");
};

const goHome = () => {
  window.location.href = "/";
};
</script>

<style scoped>
.profile-page {
  min-height: 100vh;
  padding: 0;
  position: relative;
}

.back-button {
  position: absolute;
  top: -24px;
  left: 20px;
  background: transparent;
  border: none;
  color: #edaa0b;
  font-size: 1rem;
  cursor: pointer;
  z-index: 10;
}

.profile-container {
  max-width: 400px;
  margin: 60px auto 0;
  background: white;
  border-radius: 16px;
  padding: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.profile-header-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 0 30px 0;
}

.profile-banner {
  width: 100%;
  height: 120px;
  background: linear-gradient(135deg, #740505, #b61c1c, #cc4747);
  position: relative;
  overflow: hidden;
}
.btn-upload {
  background: transparent;
  border: none;
  cursor: pointer;
}
.btn-upload img:hover {
  background-color: rgba(255, 1, 1, 0.3); 
  box-shadow: 0 0 8px rgba(204, 11, 11, 0.671);
  transform: scale(1.05); 
}


.banner-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 20% 30%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(255, 255, 255, 0.05) 0%,
      transparent 50%
    ),
    linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 70%
    );
}

.profile-avatar {
  display: flex;
  justify-content: center;
  margin-top: -60px;
  margin-bottom: 20px;
  z-index: 2;
  position: relative;
}

.avatar-ring {
  padding: 4px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: -19px;
}

.avatar-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  background: #fff;
}

.profile-info-main {
  text-align: center;
}

.profile-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin: 0 0 8px 0;
}

.profile-details {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0;
}

.contact-section {
  margin: 0 30px 30px;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  font-size: 0.9rem;
  line-height: 1.6;
}

.contact-section p {
  margin: 0 0 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact-section strong {
  color: #6b7280;
  font-weight: 500;
}

.edit-section {
  padding: 0 30px 30px;
  display: flex;
  justify-content: center;
}

.action-btn.primary {
  background-color: #dc2626;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

.action-btn.primary:hover {
  background-color: #b64422;
  transform: translateY(-1px);
}
</style>
