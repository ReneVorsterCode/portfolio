import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",

  esbuild: {
    loader: "jsx",
  },
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
  optimizeDeps: {
    esbuildOption: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
