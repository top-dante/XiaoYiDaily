import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    name: '',
    component: Layout,
    children:[
      {
        path:'/',
        name:'home',
        component:()=>import('../views/Home')
      },
      {
        path:'materials',
        name:'materials',
        component:()=>import('../views/materials/Index')
      },
      {
        path:'brand',
        name:'brand',
        component:()=>import('../views/brand/Index')
      },
      {
        path:'setting',
        name:'setting',
        component:()=>import('../views/setting/Index')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
