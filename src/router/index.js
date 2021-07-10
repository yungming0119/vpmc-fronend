import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/pages/Map'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import LostPassword from '@/pages/LostPassword'

import NotFound from '@/pages/NotFound'

import "@/css/main.css"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{path: '/:pathMatch(.*)*', name:'NotFound', component: NotFound} ,
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/lostpassword',
      name: 'LostPassword',
      component: LostPassword
    },
    {
      path: '/:username/map',
      name: 'Map',
      component: Map
    },
     
  ]
})
