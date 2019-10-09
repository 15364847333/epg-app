import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {//首页
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
  },
  {//出错页
    path: '/errorPage',
    name: 'errorPage',
    component: () => import('@/views/errorPage.vue'),
  },
  {//去哪玩
    path: '/travel',
    name: 'travel',
    component: () => import('@/views/travel.vue'),
  },
  {//美食
    path: '/food',
    name: 'food',
    component: () => import('@/views/food.vue'),
  },
  {//企业
    path: '/companyDesc',
    name: 'companyDesc',
    component: () => import('@/views/companyDesc.vue'),
  },


]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
