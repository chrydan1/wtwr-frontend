import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// "ghpages" mode builds the demo version for GitHub Pages
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "ghpages" ? "/se_project_react/" : "/",
  server: {
    port: 3000,
  },
}));
