import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [vue({ script: { defineModel: true } })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~": fileURLToPath(new URL("./public", import.meta.url)),
    },
    extensions: [".js", ".json", ".ts", ".vue", ".css"],
  },
});
