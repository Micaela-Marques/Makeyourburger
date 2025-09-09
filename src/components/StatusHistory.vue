<template>
    <div class="status-history">
      <h4>Histórico</h4>
      <div v-for="(s, i) in history" :key="i" class="status-item">
        <span class="status">{{ s.status }}</span> - 
        <span class="message">{{ s.message }}</span>
        <span class="time">{{ s.timestamp }}</span>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({ history: Array })
  </script>
  
  <style scoped>
  .status-history {
    margin: 20px 0;
    padding: 15px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
  }
  .status-item {
    font-size: 0.9rem;
    margin-bottom: 6px;
  }
  .status {
    font-weight: bold;
    color: #333;
  }
  .message {
    color: #666;
  }
  .time {
    font-size: 0.8rem;
    color: #999;
  }
  </style>
  