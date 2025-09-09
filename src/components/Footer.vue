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

<style scoped>
#footer {
  background: linear-gradient(135deg, #222 0%, #333 100%);
  border-top: 3px solid #edaa0b;
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

.social-links {
  display: flex;
  gap: 25px;
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: scale(1.15);
  background-color: #edaa0b;
  box-shadow: 0 4px 12px rgba(237, 170, 11, 0.3);
}

.social-link img {
  width: 20px;
  height: 20px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.footer-text {
  color: #fff;
}

.footer-text p {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* Responsividade */
@media (max-width: 768px) {
  #footer {
    padding: 15px 20px;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 15px;
  }
  
  .social-links {
    gap: 20px;
  }
  
  .social-link {
    padding: 6px;
  }
  
  .social-link img {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 480px) {
  #footer {
    padding: 12px 15px;
  }
  
  .social-links {
    gap: 15px;
  }
  
  .footer-text p {
    font-size: 12px;
  }
}
</style>