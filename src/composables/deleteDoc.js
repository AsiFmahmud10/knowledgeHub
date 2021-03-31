import {ref} from  'vue'
import {db, AuthRef} from '../firebase/config'


const deleteDoc = async (collection,doc)=>{

   const error = ref(null)

        try{
        
            const res = await db.collection(collection).doc(doc).delete();
            error.value = null
        }
        catch(err){
            error.value = err.message
        }

   return {error}

}

export { deleteDoc }