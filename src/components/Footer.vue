<template>
  <div id="footer">
    <div class="footer-content">
      <div class="social-links">
        <a href="https://facebook.com" target="_blank" class="social-link" aria-label="Facebook">
          <img src="../assets/social/facebook.png" alt="Facebook">
        </a>
        <a href="https://instagram.com" target="_blank" class="social-link" aria-label="Instagram">
          <img src="../assets/social/instagram.png" alt="Instagram">
        </a>
        <a href="https://wa.me/SEUNUMERO" target="_blank" class="social-link" aria-label="WhatsApp">
          <img src="../assets/social/whatsapp.png" alt="WhatsApp">
        </a>
      </div>
      <div class="footer-text">
        <p>Make Your Burger © 2025</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
#footer {
  background-color: #222;
  border-top: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  width: 100%;
}

.social-links {
  display: flex;
  gap: 20px;
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.social-link:hover {
  transform: scale(1.1);
}

.social-link img {
  width: 18px;
  height: 14px;
  object-fit: contain;
}

.footer-text {
  color: #fff;
}

.footer-text p {
  margin: 0;
  font-size: 14px;
}
</style>