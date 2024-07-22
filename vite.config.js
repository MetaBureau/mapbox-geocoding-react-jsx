import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/webpack";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "svgr",
      transform: svgr.default,
    },
  ],
});