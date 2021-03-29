<template>
  <div id="nav">
    <Nav/> 
   
  </div>
  <router-view/>
</template>


<script>
  import Nav from './components/Navbar'
   
  export default {
    components:{ Nav }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(233, 229, 229);
  
}

#nav {
 
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
