import './assets/main.css';

import { createApp } from 'vue';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';
import Home from './pages/Home.vue';
import Cart from './pages/Cart.vue';
import Favorite from './pages/Favorite.vue';

const app = createApp(App);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/favorite', name: 'Favorite', component: Favorite },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);
app.use(autoAnimatePlugin);
app.mount('#app');
