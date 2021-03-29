<template>

  <div class="main">
      <div v-if="data != null">

          <div class="flex">
            <div class =" photo ">
              <img :src="data.publicCoverPhotoUrl" style="max-width:100%" alt="">
                    <div class="createdAt">{{data.createdAt.toDate()}}</div>

            </div>
              <div>
                    <div class="title  one">
                            {{data.title}}
                    </div>

                    <div class="details one">
                      {{data.details}}
                    </div>
                    <div class="details one">
                      {{data.details}}
                    </div>
              </div>
          </div>

    </div>
     <div class="error" v-if="error != null ">{{error}}</div>
      
  </div>

</template>

<script>

import {getDoc} from '../composables/getDoc'
import {getUser} from '../composables/getUser'
import {ref} from 'vue'
export default {

    props:['id'],

    setup(props){
            
        const {error,data} = getDoc('playList', props.id)
        const showDelete = ref(false)
         const user = getUser()

          return {data,error}
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
}

</style>
