import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import civet from '@danielx/civet/vite'

export default defineConfig({
  plugins: [
    civet({ts: "preserve"}), 
    react()
  ],
})
