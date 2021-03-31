import {ref} from 'vue'
import {AuthRef} from '../firebase/config'

const error = ref(null)

const signup = async(email, password , _displayName)=>{
 
    try{
    
       const res = await AuthRef.createUserWithEmailAndPassword(email , password)
       const user = AuthRef.currentUser

    
       user.updateProfile({
           displayName: _displayName,
           
       }).then(function() {
           console.log(user)
       }).catch(function(error) {
           console.log(err.message)
       });
       
       
   }
   catch(err){
       console.log("hmm")
          
        console.log(err) 
        error.value = err.message 
   }

  


}
export {signup, error}