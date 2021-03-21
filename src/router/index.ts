import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/geolocation'
  },
  {
    path: '/geolocation',
    component: () => import ('../views/Geolocation.vue')
  },
  {
    path: '/device_info',
    component: () => import ('../views/DeviceInfo.vue')
  },
  {
    path: '/vibrator',
    component: () => import ('../views/Vibrator.vue')
  },
  {
    path: '/share_api',
    component: () => import ('../views/ShareAPI.vue')
  },
  {
    path: '/notifications',
    component: () => import ('../views/Notifications.vue')
  },
  {
    path: '/toast',
    component: () => import ('../views/Toast.vue')
  },
  {
    path: '/camera',
    component: () => import ('../views/Camera.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
