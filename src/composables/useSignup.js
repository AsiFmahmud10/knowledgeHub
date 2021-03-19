import {ref} from 'vue'
import {AuthRef} from '../firebase/config'

const error = ref(null)

const signup = async(email, password)=>{
 
    try{
    
       const res = await AuthRef.createUserWithEmailAndPassword(email , password)
       return {res}
       
   }
   catch(err){
       console.log("hmm")
          
        console.log(err) 
        error.value = err.message 
   }

}
export {signup, error}