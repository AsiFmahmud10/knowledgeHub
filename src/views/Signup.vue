<template>
  
  <form @submit.prevent="handleSignup">
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
   <div class="error" v-if="error"> {{error}} </div>
    <button>Sign up</button>
  </form>
    {{email}} {{password}}

</template>

<script>
import {ref} from 'vue'
import {signup,error} from '../composables/useSignup'
export default {
    
   setup(){
   
 const email = ref('')
 const password = ref('') 


const handleSignup= async()=>{
 
 await signup(email.value , password.value)
                
         if(error.value){
             console.log(error.value)   
         }
}
      
            return {handleSignup, email, password}
   }

}
</script>

<style>

</style>