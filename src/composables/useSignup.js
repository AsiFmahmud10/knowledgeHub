import {ref} from 'vue'
import {AuthRef} from '../firebase/config'

const signup = async(email, password)=>{
 
    try{
    
       const res = await AuthRef.createUserWithEmailAndPassword(email , password)
       
   }
   catch(err){
        console.log(err)
        
   }
  return {res}

}
export {signup}