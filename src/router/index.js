import Vue from 'vue'
import VueRouter from 'vue-router'
import Sou from '../views/Sou.vue'
import Box from '../views/Box'
import Login from '../views/Login'
import Sbox from '../views/Sbox'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Sou1',
    component: Sou
  },
  {
    path: '/Sou',
    name: 'Sou2',
    component: Sou
  },
  {
    path: '/Box',
    name: 'Box',
    component: Box
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/picture',
    name: 'Picture',
    component: () => import('../views/Picture')
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('../views/Music')
  },
  {
    path: '/audio',
    name: 'audio',
    component: () => import('../views/audio')
  },
  {
    path: '/erweima',
    name: 'erweoma',
    component: () => import('../views/erweima')
  },
  {
    path: '/evaluate',
    name: 'evaluate',
    component: () => import('../views/evaluate')
  },
  {
    path: '/Fy',
    name: 'Fy',
    component: () => import('../views/Fy')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('../views/history')
  },
  {
    path: '/iphone',
    name: 'iphone',
    component: () => import('../views/iphone')
  },
  {
    path: '/joke',
    name: 'joke',
    component: () => import('../views/joke')
  },
  {
    path: '/Tianqi',
    name: 'Tianqi',
    component: () => import('../views/Tianqi')
  },
  {
    path: '/idiom',
    name: 'idiom',
    component: () => import('../views/idiom')
  },
  {
    path: '/baike',
    name: 'Baike',
    component: () => import('../views/Baike')
  },
  {
    path: '/wallpaper',
    name: 'wallpaper',
    component: () => import('../views/wallpaper')
  },
  {
    path: '/liaotian',
    name: 'liaotian',
    component: () => import('../views/liaotian')
  },
  {
    path: '/Sbox',
    name: 'Sbox',
    component: Sbox
  }
]

const router = new VueRouter({
  routes
})

export default router
