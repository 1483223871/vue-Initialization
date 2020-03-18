
const baseRoute = [
  {
    path: '/',
    name: 'index',
    meta: {
      auth: false,
      keepAlive: false,
      title:"首页"
    },
    component: () => import('../../views/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      auth: false,
      keepAlive: false,
      title:"登录"
    },
    component: () => import('../../views/login.vue')
  }

]
export default baseRoute
