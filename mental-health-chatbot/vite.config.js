import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',  // Ensure this is set to localhost or the desired host
    port: 5173         // Ensure this matches the port you're accessing
  }
})
