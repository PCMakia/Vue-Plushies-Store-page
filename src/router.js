import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue';
import DoraemonPage from './views/Doraemon.vue';
import JewelpetPage from './views/Jewelpet.vue';
import KingdomHeartPage from './views/KingdomHeart.vue';
import FruitRoboPage from './views/FruitRobo.vue';
import CartPage from '@/components/Cart.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/doraemon',
    name: 'Doraemon',
    component: DoraemonPage,
  },
  {
    path: '/jewelpet',
    name: 'Jewelpet',
    component: JewelpetPage,
  },
  {
    path: '/kingdomheart',
    name: 'KingdomHeart',
    component: KingdomHeartPage,
  },
  {
    path: '/fruitrobo',
    name: 'FruitRobo',
    component: FruitRoboPage,
  },
  { path: '/cart', 
    component: CartPage, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
