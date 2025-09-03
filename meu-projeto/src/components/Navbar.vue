<template>
  <div id="nav">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" id="logo" />
    </div>
    <div class="options">
      <RouterLink>Home</RouterLink>
      <RouterLink>Pedidos</RouterLink>
      <RouterLink>Histórico</RouterLink>
      <RouterLink>
        <img
          src="../assets/5987424.png"
          alt="Avatar"
          style="
            width: 40px;
            height: 40px;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 8px;
            object-fit: cover;
            cursor: pointer;
          "
        />
      </RouterLink>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
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

.options {
  color: #edaa0b;
  display: flex;
  gap: 30px;
  font-size: 25px;
  margin-left: auto;
  cursor: pointer;
}
</style>
