<template>
  <div v-for="i in props" :key="i">
    <router-link :to="{name:'ShowPlaylist',params:{id:i.id}}" >

          <div class="playList">
            <div class="thumbnail">
              <img :src="i.publicCoverPhotoUrl" />
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
.playList {
  width: 90%;
  display: flex;
  box-shadow: 1px 2px 3px 1px rgba(219, 215, 215, 0.5);
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.5);

  background: rgba(231, 231, 231, 0.1);
  margin: 16px auto;
  display: flex;
  border: 10px;
  align-items: center;
  transition: all .2s ease;
}

.playList:hover {
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.5);

  background: rgb(247, 243, 243);

  transition: all .2s ease;
}
.thumbnail {
}
.thumbnail img {
  max-width: 250px;
  display: block;
  border-radius: 10px;
}
.info {
  margin: 0 30px;
}
.nbooks {
  margin-left: auto;
  margin-right: 5px;
}
</style>
