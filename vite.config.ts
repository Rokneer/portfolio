import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ["vue"],
          materialdesignicons: ["@mdi/font/css/materialdesignicons.css"],
        },
      },
    },
  },
  plugins: [vue({ script: { defineModel: true } })],
  resolve: {
    extensions: [
      ".js",
      ".json",
      ".jsx",
      ".mjs",
      ".ts",
      ".tsx",
      ".vue",
      ".css",
      ".scss",
    ],
  },
});
