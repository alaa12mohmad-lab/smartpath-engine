import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ضع هنا اسم الـ repository بتاعك على GitHub
// مثال: إذا الرابط هو https://username.github.io/smartpath-engine
// اكتب: base: '/smartpath-engine/'
export default defineConfig({
  plugins: [react()],
  base: '/smartpath-engine/',
})
