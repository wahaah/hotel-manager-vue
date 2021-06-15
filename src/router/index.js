import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由信息数组
const routes = [
  // 登录页
  { 
    path:'/',
    // 注意：这里写成components就什么都不显示
    component:()=>import('@v/Login.vue')
  },
  { 
    path:'/reg',
    component:()=>import('@v/Register.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
