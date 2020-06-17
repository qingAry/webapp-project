import Home from '../pages/home/home'
import Category from '../pages/category/category'
import Worth from '../pages/worth/worth'
import Cart from '../pages/cart/cart'
import Personal from '../pages/personal/personal'
export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/worth',
    component:Worth
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/',
    redirect:'/home'
  }

]