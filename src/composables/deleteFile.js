 import {ref} from 'vue'
import { storage } from '../firebase/config'


const deletFile = async( refChild )=>{
  
        const  deleteFileError = ref(null)
        const Fileref = storage.ref(refChild)

        try{
            await Fileref.delete()

        }catch(err){
            deleteFileError.value = err.message
        }
  
  
    return {deleteFileError}
}

export { deletFile }
