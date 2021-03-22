<template>

     <div>


    </div>

  
</template>

<script>
import {getCollection} from '../composables/getCollection'

export default {
     setup(){
     
      const {error,collectionRef} = getCollection('playList')
            console.log(collectionRef,"collection")



     }
 

}
</script>

<style>

</style>