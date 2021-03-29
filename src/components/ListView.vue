<template>
  <div v-for="i in props" :key="i" class="back">
    <router-link :to="{name:'ShowPlaylist',params:{id:i.id}}" >

          <div class="playList">

                <div class="container">
                  <img :src="i.publicCoverPhotoUrl" class="d"/>
                </div>

                <div class="info">
                  <h3>{{ i.title }}</h3>
                  <p>created by {{ i.title }}</p>
                </div>

            <div class="nbooks">number of books {{ i.books.length }}</div>
          
          </div>
          
     </router-link>


      </div>
</template>

<script>
export default {
  props: ["playlists", "props"],
};
</script>

<style scoped>
.back{

}

.playList {
  max-width: 700px;
  display: flex;
  background: white;
  margin: 16px auto;
  height: 160px;
  padding: 20px;
  border-radius: 8px;
  align-items:center;
  justify-content:space-between;
  transition: all .2s ease;
}
.playList:hover {
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.5);

  background: whitesmoke;

  transition: all .2s ease;
}
.container{
  width: 150px;
  height: 150px;
   
}
.d{
   width: 100%;
   height: 100%;
  border-radius: 8px;
  border: 4px solid #9999;
}
.info {
  margin: 30px;
}
.nbooks {

}
</style>
