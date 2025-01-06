import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: 'build', // Configura el nombre de la carpeta de salida (opcional, por defecto es "dist")
  },
  plugins: [react()],
    server: {
    // No especificar un puerto fijo
    strictPort: false, // Permite que Vite elija un puerto dinámico si el predeterminado está ocupado
  },
})
