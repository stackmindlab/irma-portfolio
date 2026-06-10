// vite.config.js - Vite build tool configuration
// Vite is what powers npm run dev and npm run build
// This file tells Vite which plugins to use when processing your code
// You rarely need to touch this file

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    // react() - enables JSX processing so React components work
    // without this Vite would not understand .jsx files
    react(),

    // tailwindcss() - processes all Tailwind utility classes
    // without this className="text-purple-400" would not work
    tailwindcss(),
  ],
});
