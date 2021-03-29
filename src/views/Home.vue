<template>
   <div v-if="documents != null" >
      <div class="main">
        
        <ListView :props="documents"/>
       
      </div>
 </div>
</template>

<script>
import { getCollection } from "../composables/getCollection";
import ListView from "../components/ListView";


export default {
   components: { ListView },

  setup() {
    const { error, documents } = getCollection("playList");
      console.log(documents.value,"asdasdasdasd")
    return { documents, error };
  },
};
</script>
 

<style >
 .main{
   height: 100vh;
 }

</style>
