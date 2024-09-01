import { createRouter, createWebHistory } from 'vue-router'
// import { useMusicStore } from '@/stores/songs.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/songList',
      component: () => import('@/views/songList.vue')
    },
    {
      path: '/songDetails',
      name: '/songDetails',
      component: () => import('@/views/songDetails.vue')
    },
    {
      path: '/searchPage',
      component: () => import('@/views/searchPage.vue')
    },
    {
      path: '/searchResult',
      component: () => import('@/views/searchResult.vue')
    },
    {
      path: '/HomeView',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/logIn',
      component: () => import('@/views/logIn.vue')
    },
    // {
    //   path: '/homeMine',
    //   beforeEnter: (to, from, next) => {
    //     const store = useMusicStore()
    //     if (store.ifLogin) {
    //       next()
    //     } else {
    //       next('/logIn')
    //     }
    //   },
    //   component: () => import('@/views/homeMine.vue')
    // },
    {
      path: '/HomeMine',
      component: () => import('@/views/homeMine.vue')
    },
    {
      path: '/homeFind',
      component: () => import('@/views/homeFind.vue')
    }
  ]
})

export default router
