import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/reactivity',
      name: 'reactivity',
      component: () => import('../views/ReactivityView.vue')
    },
    {
      path: '/style-binding',
      name: 'style-binding',
      component: () => import('../views/StyleBinding.vue')
    },
    {
      path: '/watcher-test',
      name: 'watcher-test',
      component: () => import('../views/WatcherView.vue')
    },
    {
      path: '/template-ref',
      name: 'template-ref',
      component: () => import('../views/templateRef.vue')
    },
    {
      path: '/custom-event',
      name: 'custom-event',
      component: () => import('../views/CustomEvent.vue')
    },
    {
      path: '/composable',
      name: 'composable',
      component: () => import('../views/ComposableView.vue')
    },
    {
      path: '/built-in-component',
      name: 'built-in-component',
      component: () => import('../views/BuiltInComponent.vue')
    }
  ]
})

export default router
