<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <Slider></Slider>
    <router-view/>
  </div>

</template>

<script>

//Se importan los componentes
import HeaderComponent from './components/header.vue';
import Slider from './components/Slider.vue'
export default {
  name: 'App',
  components: {
    Slider,
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
