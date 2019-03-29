import Vue from 'vue';
import Router from 'vue-router';
import Aandachtspunten from './views/Aandachtspunten.vue';
import Settings from './views/Settings.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'aandachtspunten',
      component: Aandachtspunten,
    },
    {
      path: '/about',
      name: 'over',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue'),
    },
  ],
});
