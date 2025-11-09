// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import { setPageMeta } from '@/utils/seo'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      title: 'Beranda',
      description:
        'Informasi kegiatan rutin, PMV, GABI, dan aktivitas terbaru.',
    },
  },
  {
    path: '/pmv',
    name: 'pmv',
    component: () => import('@/pages/Pmv.vue'),
    meta: {
      title: 'PMV',
      description: 'Agenda dan kegiatan Persatuan Muda-Mudi Vihara (PMV).',
    },
  },
  {
    path: '/gabi',
    name: 'gabi',
    component: () => import('@/pages/Gabi.vue'),
    meta: {
      title: 'GABI',
      description:
        'Informasi kegiatan Gelanggang Anak Buddhis Indonesia (GABI).',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta.title ?? 'Vihara'
  const description =
    to.meta.description ?? 'Informasi kegiatan rutin Vihara, PMV, dan GABI.'
  setPageMeta({
    title,
    description,
    image: 'https://viharaavalokitesvara.netlify.app/og.png',
  })
})

export default router
