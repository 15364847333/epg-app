import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {//默认进入
    path: '/',
    redirect: '/index'
  },
  {//酒店首页
    path: '/index',
    name: 'index',
    component: () => import('@/views/index.vue'),
  },
  /************************************************* 视频相关 *************************************************/
  {//直播首页
    path: '/live',
    name: 'live',
    component: () => import('@/views/video/live.vue'),
  },
  {//点播首页
    path: '/demand',
    name: 'demand',
    component: () => import('@/views/video/demand/index.vue'),
  },
  {//点播电视剧
    path: '/drama',
    name: 'drama',
    component: () => import('@/views/video/demand/drama.vue'),
  },
  {//点播电影
    path: '/film',
    name: 'film',
    component: () => import('@/views/video/demand/film.vue'),
  },
  /************************************************* 酒店相关 *************************************************/

  {//酒店页面:去哪玩、美食
    path: '/hotel/:type',
    name: 'hotel',
    component: () => import('@/views/hotel/index.vue'),
  },
  /************************************************* 企业相关 *************************************************/

  {//企业
    path: '/companyDesc',
    name: 'companyDesc',
    component: () => import('@/views/company/companyDesc.vue'),
  },
  {//企业视频
    path: '/companyVideo',
    name: 'companyVideo',
    component: () => import('@/views/company/companyVideo.vue'),
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
