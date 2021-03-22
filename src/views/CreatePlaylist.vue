<template>
  <form @submit.prevent="handleSubmit">
    <h4>create a new list</h4>

    <input type="text" name="title" placeholder="Title" v-model="title" />
    <textarea name="details" required placeholder="Details" v-model="details">
    </textarea>

    <input type="file" ref="_ref" @change="handleChange" />
    <div></div>
    <button v-if="!isPanding">upload</button>
    <div v-else>Loading---</div>

    <div class="error" v-if="fileError">
      {{ fileError }}
    </div>
  </form>
</template>

<script>
import { setStorage } from "../composables/useStorage";
import { onMounted, ref } from "vue";
import {useCollection} from "../composables/useCollection"
import { getUser } from '../composables/getUser';
import { timeStamp } from '../firebase/config';
import { useRouter} from 'vue-router'

export default {
  setup() {
    const { uploadFile } = setStorage();
     const router = new  useRouter()
    const file = ref(null);
    const title = ref(null);
    const details = ref(null);
    const fileError = ref(null);
    const allowed_type = ["image/png", "image/jpeg"];
    const  {user} = getUser()
    const isPanding = ref(false)

    const handleChange = (e) => {

      const selected = e.target.files[0];

      if (selected && allowed_type.includes(selected.type)) {
        file.value = selected;
        fileError.value = null;
      } else {
        file.value = null;
        fileError.value = "upload image (jpeg or png)";
      }
    };


    const handleSubmit = async() => {
      isPanding.value = true
      if (file.value) {
        console.log("file selected to upload");
        const { filePath,Uploaded_url } = await uploadFile(file);

       const {error}= await useCollection('playList',{
           
           title:title.value,
           details :details.value,
           owner : user.value.uid,
           books :[],
           deleteCoverPath : filePath.value,
           publicCoverPhotoUrl:Uploaded_url.value,
           createdAt : timeStamp()

        })
        if(error.value){
          console.log(error.value)
        }else{
          console.log("Playlist Added")

        }
      }

      isPanding.value = false

      router.push({name: "Home"})

    };




    return {
      handleChange,
      file,
      details,
      title,
      fileError,
      handleSubmit,
      isPanding
    };
  },
};
</script>

<style>


</style>
