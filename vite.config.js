import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: "/index.html",
        "destination-europa": "/destination-europa.html",
        "destination-mars": "/destination-mars.html",
        "destination-moon": "/destination-moon.html",
        "destination-titan": "/destination-titan.html",
        "crew-commander": "/crew-commander.html",
        "crew-engineer": "/crew-engineer.html",
        "crew-pilot": "/crew-pilot.html",
        "crew-specialist": "/crew-specialist.html",
        "technology-capsule": "/technology-capsule.html",
        "technology-spaceport": "/technology-spaceport.html",
        "technology-vehicle": "/technology-vehicle.html",
      },
    },
  },
});
