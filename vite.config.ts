import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Add this section
    host: true, // This makes it accessible on the network
    // port: 3000 // You can also change the port here if needed
  },
});
