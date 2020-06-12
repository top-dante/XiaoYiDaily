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
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
