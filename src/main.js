import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';



  const app = createApp(App);
  app.use(router);
   
  

  app.directive("game",{

   
    mounted() {
        console.log("mounted")
    },


});
  
  app.mount('#app');

//createApp(App).use(router).mount('#app')
