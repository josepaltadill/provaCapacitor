import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Camera from "@/views/Camera.vue";

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
    path: '/motion',
    component: () => import ('../views/Motion.vue')
  },
  // {
  //   path: '/camera',
  //   component: () => import ('../views/Camera.vue')
  // }
  {
    path: '/camera/',
    component: Camera,
    children: [
      {
        path: '',
        redirect: '/camera/camera2'
      },
      {
        path: 'camera1',
        component: () => import('@/views/Camera1.vue')
      },
      {
        path: 'camera2',
        component: () => import('@/views/Camera2.vue')
      },
      {
        path: 'camera3',
        component: () => import('@/views/Camera3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
