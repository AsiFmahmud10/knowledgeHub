import {ref} from 'vue'
import {AuthRef} from '../firebase/config'


const signIn = async(email,password)=>{

try{
    const res = AuthRef.signInWithEmailAndPassword(email , password )
}
catch(err){
    console.log(error)

}

return {res,error}

}


export { 

    res, error
}
 