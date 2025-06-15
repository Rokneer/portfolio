import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  build: { rollupOptions: { output: { manualChunks: { vue: ["vue"] } } } },
  plugins: [
    vue({
      script: { defineModel: true },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~": fileURLToPath(new URL("./public", import.meta.url)),
    },
    extensions: [".js", ".json", ".ts", ".vue", ".css"],
  },
});
