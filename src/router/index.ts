import AboutViewVue from '@/views/AboutView.vue'
import NewVue from '@/views/NewView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpView from '../views/HelpView.vue'
import ServiceView from '../views/ServiceView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutViewVue
    },
    {
      path: '/new',
      name: 'new',
      component: NewVue
    },
    {
      path: '/help',
      name: 'help',
      component: HelpView
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
  ]
})

export default router
