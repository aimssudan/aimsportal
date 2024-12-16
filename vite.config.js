import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://charts.southsudanaims.org", // Your Superset server
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  resolve: {
    alias: {
      '@': '/src', // Update as per your project structure
    },
  },
});
