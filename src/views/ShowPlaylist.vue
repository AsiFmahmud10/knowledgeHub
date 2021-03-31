<template>

  <div class="main">
      <div v-if="data != null">

          <div class="flex">
            <div class =" photo ">
              <img :src="data.publicCoverPhotoUrl" style="max-width:100%" alt="">
                    <div class="createdAt"> Ctreated At :{{data.createdAt.toDate().toDateString()}} </div> 
                    
        <!-- delete Polaylist  -->

             <div v-if="showDelete">

                  <button class="error"  @click="handleDelete" >delete</button>
                  <div v-if="errorInFileDelete">{{errorInFileDelete}}</div>
             </div>

            </div>
              <div>
                    <div class="title  one">
                          title:  {{data.title}}
                    </div>

                    <div class="details one">
                     details: {{data.details}}
                    </div>
                    <div class="details one">
                      owner : {{data.owner}}
                    </div>
              </div>
          </div>

    </div>
    <div v-else> PlayList is not exist </div>

          <!-- error  -->

   <div class="error" v-if="error != null ">
     {{error}}
   </div>
    
  </div>

</template>

<script>

import {getDoc} from '../composables/getDoc'
import {getUser} from '../composables/getUser'
import {deletFile} from '../composables/deleteFile'
import {deleteDoc} from '../composables/deleteDoc'

import {computed, ref} from 'vue'

export default {

    props:['id'],
   
    setup(props){ 

            
        const {error,data} = getDoc('playList', props.id)
         const {user} = getUser()
        const errorInFileDelete = ref (null)
         

         const showDelete = computed(()=>{

             return user.value && data.value && user.value.uid === data.value.owner
                  
         })

         const handleDelete = async()=>{
            
            const {deleteFileError} = await deletFile(data.value.deleteCoverPath)
            const {error,res} = await deleteDoc('playList',props.id)

            
            if(error.value || deleteFileError.value)
                errorInFileDelete.value = error.value ? error.value : deleteFileError.value


         }

          return {data,error,showDelete,handleDelete,errorInFileDelete}
    }
}
</script>

<style scoped>
.flex{
  display: flex;
  height:550px;
  text-align: center;
  justify-content:space-around;
   background-image: linear-gradient(to left, white , rgb(252, 213, 130));
  padding: 100px;
}
.photo img{
    max-height: 300px;
    max-width: 300px;
    border: 4px solid #9999;
    border-radius: 8px;

}
.title{
  font-weight: bold;
  font-size: 20px;

}
.one{
  color: #555;
  border-radius:20px;
  padding:15px 20px;
  margin: 8px;
  margin-left: auto;
}

</style>
