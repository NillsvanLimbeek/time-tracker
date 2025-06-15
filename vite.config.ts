import ui from '@nuxt/ui/vite';
import vue from '@vitejs/plugin-vue';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import VueRouter from 'unplugin-vue-router/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    ui({
      ui: {
        colors: {
          primary: 'green',
          neutral: 'slate',
        },
      },
      autoImport: {
        imports: ['vue', 'date-fns', VueRouterAutoImports],
        dirs: ['./src/lib/constants/**'],
        vueTemplate: true,
        dts: true,
        eslintrc: {
          enabled: true,
        },
      },
    }),
  ],
});
