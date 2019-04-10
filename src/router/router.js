import Home from '@/views/Home.vue'
import Layout from '@/views/Layout.vue'

export default [
  {
    path: '/',
    alias: 'home_page',
    name: 'home',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Home
      }
    ],
    props: route => ({
      food: route.query.food
    }),
    beforeEnter: (to, from, next) => {
      // if (from.name === 'about') alert('这是从 about 来的！')
      // else alert('这不是从 about 来的')
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    props: {
      food: 'apple apple'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/Argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/Parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    redirect: to => '/'
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '/split-pane',
    component: () => import('@/views/split-pane.vue')
  },
  {
    path: '/count-to',
    name: 'count_to',
    component: () => import('@/views/count-to.vue')
  },
  {
    path: '/menu_page',
    name: 'menu_page',
    component: () => import('@/views/menu-page.vue')
  },
  {
    path: '/',
    name: 'table',
    component: Layout,
    children: [
      {
        path: 'table',
        component: () => import('@/views/table.vue')
      }
    ]
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
