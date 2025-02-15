import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@src": "/src",
            "@assets": "/src/assets",
            "@components": "/src/components",
            "@pages": "/src/pages",
            "@store": "/src/store",
            "@customTypes": "/src/customTypes",
            "@utils": "/src/utils",
        },
    },
    envPrefix: "VITE_",
});
