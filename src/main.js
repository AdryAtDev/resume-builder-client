import './assets/css/main.css';
import '../node_modules/element-plus/dist/index.css';

import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia());
app.use(ElementPlus);
app.use(router);

app.mount('#app');
