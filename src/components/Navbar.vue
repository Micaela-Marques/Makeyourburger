<template>
  <div id="nav">
    <div class="logo">
      <img class="logo-img" src="../assets/logo.png" alt="logo" id="logo" />
    </div>
    <div class="navLink">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/cardapio">Cardápio</RouterLink>
      <RouterLink to="/pedidos">Pedidos</RouterLink>
      <RouterLink to="/historico">Histórico</RouterLink>
    </div>
    <div class="nav-actions">
      <CartIndicator />
      <div class="perfil">
        <RouterLink to="/perfil" style="display: flex; align-items: center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffcd55"
            style="
              width: 40px;
              height: 40px;
              border-radius: 50%;
              padding: 4px;
              margin-right: 8px;
              cursor: pointer;
              background-color: rgba(245, 170, 11, 0.1);
              transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;
            "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartIndicator from "./CartIndicator.vue";
</script>

<style>
#nav {
  background-color: #851212;
  border-bottom: 4px solid #ffcd55;
  padding: 15px 50px;
  display: flex;
  align-items: center;
  margin-top: 0;
  justify-content: space-between;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50px;
}

.logo-img {
  width: 45px;
}

.navLink {
  display: flex;
  align-items: center;
  color: #ffcd55;
  gap: 30px;
  font-size: 20px;
  cursor: pointer;
  margin: 0 auto;
}

.navLink a {
  color: #ffcd55;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;
}

.navLink a:hover {
  color: #fff;
}

.navLink a.router-link-active {
  color: #fff;
  font-weight: bold;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
}

.perfil {
  display: flex;
  align-items: center;
}

.perfil svg {
  transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;
}

.perfil svg:hover {
  background-color: rgba(245, 170, 11, 0.3); /* cor mais forte no hover */
  box-shadow: 0 0 8px rgba(237, 170, 11, 0.6);
  transform: scale(1.05); /* leve zoom */
}
</style>
