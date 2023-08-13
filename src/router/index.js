import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/subCategory/index.vue'

//createWebHistory创建history 的路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:[
        {path:'/',
        component:Home
      },
      {
        path:'/category/:id',
        component:Category
      },
      {
          path:'/category/sub/:id',
          component: SubCategory
      }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router
