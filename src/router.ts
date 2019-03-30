import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/aandachtspunten',
      name: 'aandachtspunten',
      component: () => import(/* webpackChunkName: "aandachtspunten" */ './views/Aandachtspunten.vue'),
    },
    {
      path: '/over',
      name: 'over',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/instellingen',
      name: 'instellingen',
      component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue'),
    },
  ],
});
