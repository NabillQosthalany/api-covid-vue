import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../App'
import Home from '../views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/app',
    name: 'homeApp',
    component: HomeView
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
