import { createRouter, createWebHistory } from 'vue-router'
import TaskList from './pages/TaskList'
import TaskNew from './pages/TaskNew'
import TaskView from './pages/TaskView'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/tasknew', component: TaskNew},
    { path: '/tasklist', alias: '/', component: TaskList, children: [
      { path: ':taskId?', component: TaskView }] },
  ],

  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router