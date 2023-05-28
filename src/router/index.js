import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Filmovi from '../views/Filmovi.vue'
import Serije from '../views/Serije.vue'
import Iznajmljeni from '../views/Iznajmljeni.vue'
import Film from '../views/Film.vue'
import Serija from '../views/Serija.vue'
import Epizoda from '../views/Epizoda.vue'
import Login from '../views/Login.vue'
import SingUp from '../views/SingUp.vue'
import Zanr from '../views/Zanr.vue'
import Korpa from '../views/Korpa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/filmovi',
    name: 'Filmovi',
    component: Filmovi
  },
  {
    path: '/serije',
    name: 'Serije',
    component: Serije
  },
  {
    path: '/iznajmljeni',
    name: 'Iznajmljeni',
    component: Iznajmljeni
  },
  {
    path: '/film/:id',
    name: 'Film',
    component: Film
  },
  {
    path: '/serija/:id',
    name: 'Serija',
    component: Serija
  },
  {
    path: '/epizoda/:id',
    name: 'Epizoda',
    component: Epizoda
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/singup',
    name: 'SingUp',
    component: SingUp
  },
  {
    path: '/zanrovi/:id',
    name: 'Zanr',
    component: Zanr
  },
  {
    path: '/korpa',
    name: 'Korpa',
    component: Korpa
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
