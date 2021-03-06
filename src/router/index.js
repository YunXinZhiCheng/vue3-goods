import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import { Notify, Toast } from 'vant'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category.vue')
const Detail = () => import('../views/detail/Detail.vue')
const Profile = () => import('../views/profile/Profile.vue')
const ShopCart = () => import('../views/shopcart/ShopCart.vue')

const Register = () => import('../views/profile/Register.vue')
const Login = () => import('../views/profile/Login.vue')

const routes = [
  {
    path: '',
    name: 'DefaultHome',
    component: Home,
    // 导航守卫
    meta: {
      title: '图书兄弟',
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // 导航守卫
    meta: {
      title: '图书兄弟',
    },
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    // 导航守卫
    meta: {
      title: '图书兄弟-商品分类',
    },
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    // 导航守卫
    meta: {
      title: '图书兄弟-商品详情',
    },
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    // 导航守卫
    meta: {
      title: '图书兄弟-购物车',
      isAuthRequired: true,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    // 导航守卫
    meta: {
      title: '图书兄弟-个人中心',
      isAuthRequired: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // 导航守卫
    meta: {
      title: '图书兄弟-用户登录',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    // 导航守卫
    meta: {
      title: '图书兄弟-用户注册',
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
//
router.beforeEach((to, from, next) => {
  // 如果没有登录，在这里到login
  if (to.meta.isAuthRequired && store.state.user.isLogin === false) {
    // Notify('您还有登录，请先登录')
    Toast.fail('您还有登录，请先登录')
    return next('/login')
  } else {
    next()
  }

  document.title = to.meta.title
})

export default router
