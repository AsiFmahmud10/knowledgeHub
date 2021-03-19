import {ref} from 'vue'
import {AuthRef} from '../firebase/config'

const error = ref(null)

const usesignIn = async(email,password)=>{


try{
    const res = await AuthRef.signInWithEmailAndPassword(email , password )
    return {res} // its just return a promise. nothing fancy

}
catch(err){
     
    console.log(err.message)
    error.value = err.message
}


}


export { 

     error , usesignIn
}
 