import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Drummer from '../views/Drummer.vue'
import Tutor from '../views/Tutor.vue'
import AllReleases from '../views/AllReleases.vue'
import AllShows from '../views/AllShows.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import { auth } from '../firebase/config'

const preAuth = (to, from, next) => {
  let user = auth.currentUser
  if (user) {
    next({name: 'admin'})
  } else {
    next()
  }
}

const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if (!user) {
    next({name: 'login'})
  } else {
    next()
  }
}

const routes = [
  { 
    path: '/:catchAll(.*)',
    name: 'redirect',
    component: Home
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Drummer
  },
  {
    path: '/lessons',
    name: 'tutor',
    component: Tutor
  },
  {
    path: '/projects',
    name: 'allreleases',
    component: AllReleases
  },
  {
    path: '/shows',
    name: 'allshows',
    component: AllShows
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: preAuth
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({behavior: 'smooth'}) 
}
})

export default router
