import {ref} from  'vue'
import {db, AuthRef} from '../firebase/config'


const error = ref(null)

const logOut= async()=>{


 try{
 
    await AuthRef.signOut()
    console.log("logOut successful")
    error.value = null;

 }catch(err){
    
    console.log(err.message)
    error.value = err.message

 }

 return error

}

export {

  logOut

}