import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Space-tourism-website/",
  plugins: [tailwindcss()],
});
