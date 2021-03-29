import { ref, watchEffect } from 'vue'
import { db } from '../firebase/config'

const getDoc = (collection,id)=>{

    const data = ref(null)
    const error = ref(null)

    const doc = db.collection(collection).doc(id)
    const unsub = doc.onSnapshot((snap)=>{
        
        //if(snap.data() ) is needed if we dont have the doc(id)

        if(snap.data() ){
            data.value = { ...snap.data(), id : snap.id}
            console.log(snap.data(),"data")
            error.value = null
        }else{
            console.log("huuu")
            error.value = "the parameter is false"
        }
        
       
    },(err)=>{

        console.log(err.message)
        error.value = "Error in fetching data"
        data.value = null
     })
     
     watchEffect((onInvalidate)=>{
        onInvalidate(()=>{
            unsub()
        })
      })



     return {error, data}

}

export {getDoc}