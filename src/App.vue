<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    
    <router-view/>
  </div>

</template>

<script>

//Se importan los componentes
import HeaderComponent from './components/header.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
