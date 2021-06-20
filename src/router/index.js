import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由信息数组
const routes = [
  // 首页
  { 
    path:'/',
    // 注意：这里写成components就什么都不显示
    component:()=>import('@v/Home.vue')
  },
  // 登录页
  { 
    path:'/login',
    // 注意：这里写成components就什么都不显示
    component:()=>import('@v/Login.vue')
  },
  { 
    path:'/reg',
    component:()=>import('@v/Register.vue')
  },
  { 
    path:'/layout',
    component:()=>import('@v/Layout.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
