<template>

  <form @submit.prevent="handleLogin">
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
   <div class="error"> {{error}} </div>
    <button>log in</button>
  </form>
    {{email}} {{password}}

</template>



<script>

import {usesignIn,error } from '../composables/useSignin'
import {ref} from 'vue'
export default {

  setup() {
      
       const email = ref('')
       const password = ref ('')
       

      const handleLogin = async()=>{
          
          const res = await usesignIn(email.value, password.value)
          email.value = ''
          password.value = ''
          
          if(error.value)
             console.log(res,"res")

       }
     

      return { error , email, password, handleLogin}
  },
};
</script>

<style>


</style>
