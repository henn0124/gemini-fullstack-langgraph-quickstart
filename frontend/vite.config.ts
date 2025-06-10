import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/app/",
  resolve: {
    alias: {
      "@": path.resolve(new URL(".", import.meta.url).pathname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: ["afba2b9f-4c7e-49b2-8f7b-405ec4cf6afe-00-1t83um98r6eyh.spock.replit.dev", ".replit.dev"],
    proxy: {
      // Proxy LangGraph API requests to the backend server
      "/threads": {
        target: "http://127.0.0.1:2024",
        changeOrigin: true,
      },
      "/runs": {
        target: "http://127.0.0.1:2024",
        changeOrigin: true,
      },
      "/assistants": {
        target: "http://127.0.0.1:2024",
        changeOrigin: true,
      },
      "/docs": {
        target: "http://127.0.0.1:2024",
        changeOrigin: true,
      },
    },
  },
});
