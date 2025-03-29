import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import civet from '@danielx/civet/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    civet({ts: "preserve"}), 
    react()
  ],
})
