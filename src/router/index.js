import { createRouter, createWebHashHistory } from 'vue-router'
import AuthLayout from '@/layout/auth-layout.vue'
import AppLayout from '@/layout/app-layout.vue'
import Page404Layout from '@/layout/page-404-layout.vue'


const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: AppLayout
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthLayout,
    redirect: {name: "login"},
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('@/views/auth/Login.vue'),
      },
      {
        name: 'signup',
        path: 'signup',
        component: () => import('@/views/auth/Signup.vue'),
      },
      {
        name: 'recover-password',
        path: 'recover-password',
        component: () => import('@/views/auth/RecoverPassword.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: 'notfound',
    component: Page404Layout,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
