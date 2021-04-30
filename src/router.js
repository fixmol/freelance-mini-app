import { createRouter, createWebHistory } from 'vue-router'
import TaskList from './pages/TaskList'
import TaskNew from './pages/TaskNew'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/tasklist', component: TaskList, alias: '/' },
    { path: '/tasknew', component: TaskNew}
  ],

  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router