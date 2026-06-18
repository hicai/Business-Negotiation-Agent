import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/create',
    name: 'CreatePlan',
    component: () => import('../views/CreatePlan.vue')
  },
  {
    path: '/plan/:id',
    name: 'PlanDetail',
    component: () => import('../views/PlanDetail.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/History.vue')
  },
  {
    path: '/chat',
    name: 'AiChat',
    component: () => import('../views/AiChat.vue')
  },
  {
    path: '/editor',
    name: 'PlanEditor',
    component: () => import('../views/PlanEditor.vue')
  },
  {
    path: '/export-preview',
    name: 'ExportPreview',
    component: () => import('../views/ExportPreview.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
