import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";

import ui from "@nuxt/ui/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    ui({
      ui: {
        colors: {
          primary: "green",
          neutral: "slate",
        },
      },
    }),
  ],
});
