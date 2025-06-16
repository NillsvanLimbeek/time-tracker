import ui from '@nuxt/ui/vue-plugin';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router.ts';

import './assets/main.css';

const app = createApp(App);
const pinia = createPinia();

app.use(ui);
app.use(router);
app.use(pinia);

app.mount('#app');
