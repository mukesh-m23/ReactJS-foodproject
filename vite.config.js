import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  eslint:{
    ignoreDuringBuilds:true,
  },
  plugins: [react()],
  base:"/"
})
