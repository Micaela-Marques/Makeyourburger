<template>
  <div>
    <Navbar />
    <router-view />
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: linear-gradient(135deg, #c02b2b 0%, #d68a18 100%);
}
</style>
