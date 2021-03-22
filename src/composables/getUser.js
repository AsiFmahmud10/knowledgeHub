import {AuthRef, db} from '../firebase/config'
import {ref} from 'vue'

const user = ref(AuthRef.currentUser)

AuthRef.onAuthStateChanged( (_user)=> {
    if (_user) {
      // User is signed in.
      console.log('user changed', _user)
      user.value = _user

    } else{
     console.log("there is no user ")

    }
  });

  const getUser=()=>{
      return {user}
  }

  export{

    getUser

  }