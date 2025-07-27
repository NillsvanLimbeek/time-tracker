import ui from '@nuxt/ui/vite';
import vue from '@vitejs/plugin-vue';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import VueRouter from 'unplugin-vue-router/vite';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueDevTools(),
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
        imports: ['vue', 'pinia', 'date-fns', VueRouterAutoImports],
        dirs: [
          './src/lib/constants/**',
          './src/lib/models/**',
          './src/lib/stores/**',
          './src/lib/mock/**/*',
          './src/lib/composables/**',
          './src/utils/**',
          './src/components/**/*',
        ],
        vueTemplate: true,
        dts: true,
        eslintrc: {
          enabled: true,
        },
      },
    }),
  ],
});
