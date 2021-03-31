<template>

  <nav>
     <div class="logo">
     <img src="https://p7.hiclipart.com/preview/158/931/681/cartoon-film-illustration-book.jpg" alt="" />
            Knowledge HUB   
     </div>      
         <div v-if="user"> {{user.email}}</div>

        <div class="link">
            
            <div  v-if="user === null">
                  <router-link :to="{name: 'Signup'}">Sign up</router-link>
                  <router-link :to="{name: 'Login'}">Log In</router-link>
            </div>
            <div v-else>
            <router-link :to="{name: 'CreatePlaylist'}">Create BookList</router-link>
            <button  @click="handleLogout"  >Log out</button>

            </div>
            
        </div>
  </nav>

</template>

<script>

import {getUser} from '../composables/getUser'
import {logOut} from '../composables/useLogout'
import {useRouter} from 'vue-router'
import {ref} from 'vue'


export default {

  setup(){

      const {user} = getUser()
      const router = useRouter()

      const handleLogout = async()=>{
         const {error} = await logOut()
            console.log(user.value,"user")

           router.push({name:'Login'})
      }


        return {user, handleLogout}
  }



};
</script>

<style scoped>

nav{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 7px;
}

.link button,a{
 margin: 0px 5px;
 background:inherit;


}
.link button:hover{
 background:white;
 color: #000;
 
}
img{
    max-width: 30px;
}
.logo{
    margin-left:15px ;
}
</style>
