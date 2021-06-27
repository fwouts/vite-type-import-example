import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
// import { fakeExportedTypes } from "./fake-exported-types";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    // fakeExportedTypes(),
  ],
});
