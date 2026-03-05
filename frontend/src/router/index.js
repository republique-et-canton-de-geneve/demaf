import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import DashboardView   from '../views/DashboardView.vue'
import MessagesView    from '../views/MessagesView.vue'
import MessageTypeView from '../views/MessageTypeView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView,
  },
  {
    path: '/applications/:appName/messages',
    name: 'messages',
    component: MessagesView,
    props: route => ({
      appName:       route.params.appName,
      initialStatus: route.query.status ?? null,
      initialType:   route.query.type   ?? null,
    }),
  },
  {
    path: '/message-types/:type',
    name: 'message-type-detail',
    component: MessageTypeView,
    props: route => ({ type: route.params.type }),
  },
]

export default createRouter({
  history: import.meta.env.VITE_MOCK === 'true' ? createWebHashHistory() : createWebHistory(),
  routes,
})
