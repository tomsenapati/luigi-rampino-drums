import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Drummer from '../views/Drummer.vue'
import Tutor from '../views/Tutor.vue'
import AllReleases from '../views/AllReleases.vue'
import AllShows from '../views/AllShows.vue'
const routes = [
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
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({behavior: 'smooth'}) 
}
})

export default router
