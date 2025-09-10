import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@views': resolve(__dirname, 'src/views'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@router': resolve(__dirname, 'src/router'),
      '@db': resolve(__dirname, 'src/db'),
      '@styles': resolve(__dirname, 'src/assets/tailwind.css'),
      '@images': resolve(__dirname, 'src/assets'),
      '@burger': resolve(__dirname, 'src/assets/burger'),
      '@social': resolve(__dirname, 'src/assets/social')
    }
  }
})
