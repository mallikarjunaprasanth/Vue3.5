import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Auth/Login.vue'
import MainView from '@/views/MainView.vue'
import Profile from '@/views/Profile/Profile.vue'
import Settings from '@/views/Settings/Settings.vue'
import Dashboard from "@/views/DashBoard/Dashboard.vue"

const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    component: MainView,
    name: 'Dashboard',
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        name:"dashboard",
        component: Dashboard,
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
