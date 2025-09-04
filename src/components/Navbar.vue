<template>
  <div id="nav">
    <div class="logo">
      <img  class="logo-img" src="../assets/logo.png" alt="logo" id="logo" />
    </div>
    <div class="navLink">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/pedidos">Pedidos</RouterLink>
      <RouterLink to="/historico">Histórico</RouterLink>
      <RouterLink to="/perfil" style="display: flex; align-items: center;">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#edaa0b" style="width: 40px; height: 40px; border-radius: 50%; background: #333; padding: 4px; margin-right: 8px; cursor: pointer;">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>

</script>
<style>
#nav {
  background-color: #222;
  border-bottom: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;
  position: sticky;
  margin-top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  margin-right: auto;
}
.logo-img {
  width: 45px;
}

.navLink {
  display: flex;
  align-items: center;
  color: #edaa0b;
  gap: 30px;
  font-size: 25px;
  margin-left: auto;
  cursor: pointer;
}
</style>
