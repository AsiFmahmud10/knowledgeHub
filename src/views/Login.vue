<template>

  <form @submit.prevent="handleLogin">
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
   <div class="error" v-if="error"> {{error}} </div>
   
    <button>log in</button>
  </form>
    {{email}} {{password}}

</template>

<script>

import {usesignIn,error } from '../composables/useSignin'
import {ref} from 'vue'
import {useRouter} from 'vue-router'

export default {

  setup() {
      
       const email = ref('')
       const password = ref ('')
       const router = new useRouter()

      const handleLogin = async()=>{
          
          const res = await usesignIn(email.value, password.value)
          email.value = ''
          password.value = ''
          
          if(error.value)
             console.log(res,"res")
          else{
                router.push({name:"Home"})
           }   

       }
     

      return { error , email, password, handleLogin}
  },
};
</script>

<style>


</style>
