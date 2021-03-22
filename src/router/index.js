import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import CreatePlaylist from '../views/CreatePlaylist.vue'
import ShowPlaylist from '../views/ShowPlaylist'

/// route guard
import {AuthRef} from '../firebase/config'

let requireAuth = (to, from, next)=>{

  let user = AuthRef.currentUser
  if(user){
    next()

  }else{
    
    next({name:"Login"})
  }

}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props:true
  },
  {
      path: '/login',
      name : 'Login',
      component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup

  },
  {
    path:'/playlist/create',
    name:'CreatePlaylist',
    component:CreatePlaylist,
    beforeEnter: requireAuth

  },
  {
    path:'/showplaylist',
    name:'ShowPlaylist',
    component:ShowPlaylist,
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
