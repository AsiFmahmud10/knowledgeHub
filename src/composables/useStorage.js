import { ref } from 'vue'
import { storage } from '../firebase/config'
import {getUser} from './getUser'

const {user} = getUser()

const setStorage= (_path)=>{
   
  
    const Uploaded_url = ref(null)
    const error = ref(null) 
    const filePath = ref(null) // firebase File path

    const uploadFile = async(file)=>{
       
        filePath.value =`cover/${user.value.uid}/${file.value.name}` 
    
    try{
            const storagePath = storage.ref( filePath.value)
            const res = await storagePath.put(file.value)
            Uploaded_url.value = await res.ref.getDownloadURL()
            error.value = null;
            console.log('upload file successfuly')
     }
     catch(err){
            error.value = err.message
            console.log(err)
     }
     return {error,Uploaded_url,filePath}
        
    }
    return {uploadFile}

}

export {setStorage }

