import Vue from 'vue'
import VueRouter from 'vue-router'
import Puertos from '../views/puertos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'puertos',
    component: Puertos
  },
]

const router = new VueRouter({
  routes
})

export default router
