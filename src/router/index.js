import { createRouter, createWebHistory } from 'vue-router'
import EventsView from '@/views/EventsView.vue'
import EventDetailView from '@/views/EventDetailView.vue'
import CreateEventView from '@/views/CreateEventView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: EventsView },
    { path: '/events/:id', component: EventDetailView },
    { path: '/create', component: CreateEventView },
  ],
})
