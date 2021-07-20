import Vue from 'vue'
import Router from 'vue-router'
//解决重复触发同一个路由的错误
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)
const home = () => import ('views/home/home.vue')
const cart = () => import ('views/cart/cart.vue')
const category = () => import ('views/category/category.vue')
const profile = () => import('views/profile/proflie.vue')
const detail = () => import('views/detail/detail.vue')
const router =new Router({
  routes:[
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/category',
      component:category
    },{
      path:'/profile',
      component:profile
    },{
      path:'/detail/:id',
      component:detail,
      
    }
  ],
  mode:'history',
})
export default router