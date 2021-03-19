
import {ref} from  'vue'
import {db} from '../firebase/config'

const  useCollection = async(collection,document)=>{
    const error = ref(null)

 try{
  await db.collection(collection).add(document)
 }
catch(err){
   console.log(err.message)
   error.value = err.message
}
  return {error}
}




export {
        useCollection
}