import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/',        name: 'home',    component: () => import('@/pages/Home.vue'),    meta: { title: 'Beranda' } },
  { path: '/pmv',     name: 'pmv',     component: () => import('@/pages/Pmv.vue'),     meta: { title: 'PMV' } },
  { path: '/gabi',    name: 'gabi',    component: () => import('@/pages/Gabi.vue'),    meta: { title: 'GABI' } },
  { path: '/finance', name: 'finance', component: () => import('@/pages/Finance.vue'), meta: { title: 'Laporan Keuangan' } },
]

const router = createRouter({ history: createWebHistory(), routes })
router.afterEach(to => { document.title = (to.meta?.title as string) || 'Vihara' })
export default router
