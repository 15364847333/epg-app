import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {//首页
    path: '/',
    redirect: '/index'
  },
  {//首页
    path: '/index',
    name: 'index',
    component: () => import('@/views/index.vue'),
  },
  {//出错页
    path: '/errorPage',
    name: 'errorPage',
    component: () => import('@/views/errorPage.vue'),
  },
  {//直播
    path: '/live',
    name: 'live',
    component: () => import('@/views/live.vue'),
  },
  {//点播
    path: '/demand',
    name: 'demand',
    component: () => import('@/views/demand.vue'),
  },
  {//酒店页面:去哪玩、美食
    path: '/hotel/:type',
    name: 'hotel',
    component: () => import('@/views/hotel.vue'),
  },
  // {//去哪玩
  //   path: '/travel',
  //   name: 'travel',
  //   component: () => import('@/views/travel.vue'),
  // },
  // {//美食
  //   path: '/food',
  //   name: 'food',
  //   component: () => import('@/views/food.vue'),
  // },
  {//企业
    path: '/companyDesc',
    name: 'companyDesc',
    component: () => import('@/views/companyDesc.vue'),
  },
  {//企业视频
    path: '/companyVideo',
    name: 'companyVideo',
    component: () => import('@/views/companyVideo.vue'),
  },
  {//测试页面
    path: '/test',
    name: 'test',
    component: () => import('@/views/test.vue'),
  },


]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
