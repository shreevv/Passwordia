import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Passwordia/",  // <-- Replace "Passwordia" with your GitHub repo name
  plugins: [react()]
});