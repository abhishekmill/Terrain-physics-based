import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.glsl"],
  plugins: [react()],
  optimizeDeps: {
    exclude: ["@dimforge/rapier3d-compat"],
  },
});
