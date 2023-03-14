import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'StartView',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/auth',
      component: () => import('@/layouts/BlankLayout/BlankLayout.vue'),
      children: [
        {
          path: '',
          redirect: { name: 'Login' }
        },
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/views/auth/Login.vue')
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import('@/views/auth/Register.vue')
        },
        {
          path: 'forgot-password',
          name: 'ForgotPassword',
          component: () => import('@/views/auth/ForgotPassword.vue')
        }
      ]
    },
    {
      path: '/dashboard',
      component: () => import('@/layouts/AppLayout/AppLayout.vue'),
      children: [
        {
          path: '',
          redirect: { name: 'Home' }
        },
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/views/dashboard/Dashboard.vue')
        },
        {
          path: 'translate',
          name: 'Translate',
          component: () => import('@/views/dashboard/Translations.vue')
        },
        {
          path: 'store',
          name: 'Store',
          component: () => import('@/views/dashboard/Store.vue')
        },
        {
          path: 'vuetify',
          name: 'Vuetify',
          component: () => import('@/views/dashboard/Vuetify.vue')
        },
        {
          path: 'rest-api',
          name: 'RestApi',
          component: () => import('@/views/dashboard/RestApi.vue')
        },
        {
          path: 'websocket',
          name: 'Websocket',
          component: () => import('@/views/dashboard/Websocket.vue')
        }
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') }
  ]
})

export default router
