import Vue from 'vue';
import Router from 'vue-router';
import Overview from './components/views/Overview/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview,
      meta: { title: 'Overview' },
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: () => import('./components/views/Ticket/index.vue'),
      meta: { title: 'Tickets' }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./components/views/Setting/index.vue'),
      meta: { title: 'Settings' }
    }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});
