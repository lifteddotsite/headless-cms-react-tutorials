import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

module.exports = defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.jsx"),
      name: "LiftedWP-Widgets",
      fileName: (format) => `liftedwp-widgets.${format}.js`,
    },
  },
});
