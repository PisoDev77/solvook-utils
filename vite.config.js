import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/solvook-utils",
  server: {
    proxy: {
      "/api": {
        changeOrigin: true,
        target: "https://v2api.solvook.com/api",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/unit": {
        changeOrigin: true,
        target: "https://api.staging.solvook.com/api",
        rewrite: (path) => path.replace(/^\/unit/, ""),
      },
    },
  },
});
