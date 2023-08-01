import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://<felipedev1996>.github.io/frontend-react-mongo-auth-crud/'
})
