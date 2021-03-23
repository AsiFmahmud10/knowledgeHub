<template>
<div>
  
  <ListView :props="documents"/>

</div>
</template>

<script>
import { getCollection } from "../composables/getCollection";
import ListView from "../components/ListView";


export default {
   components: { ListView },

  setup() {
    const { error, documents } = getCollection("playList");
    
    return { documents, error };
  },
};
</script>

<style></style>
