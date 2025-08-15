import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/uIPO-website/',   // if your repo is YOUR_USERNAME.github.io, use base: '/'
})
