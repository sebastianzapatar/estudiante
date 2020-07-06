<template>
  <div class="center">
    <Slider texto="Esta es la lista de estudiantes de fullstack que van a sacar 0"></Slider>
    <h2>La lista</h2>
    <article v-for="estudiante in estudiantes" :key="estudiante.id">
      <div class="image-wrap">
        <img
          :src="'http://localhost:3900/imagen/'+estudiante.image"
          :alt="estudiante.nombre"
          width="100px"
        />
        <br />
        {{estudiante.nombre+" "+estudiante.apellido}}
        <br />
        {{estudiante.date}}
        <br />
        {{estudiante.date| moment('dddd-MMMM-YYYY')}}
        <br />
        {{estudiante.date| moment('from','now')}}
        <br />
        
        <router-link :to="'/estudiante/'+estudiante._id">Obtener más información</router-link>
      </div>
    </article>
  </div>
</template>
<script>
import Slider from "./Slider.vue";
import axios from "axios";
import Global from "../Global";

export default {
  name: "mi_nino",
  components: {
    Slider
  },
  methods: {
    getEstudiantes() {
      console.log(this.url);
      axios.get(this.url + "listarestudiante/").then(res => {
        this.estudiantes = res.data.estudiantes;
        console.log(this.estudiantes);
      });
    },
    
  },
  mounted() {
    this.getEstudiantes();
  },
  data() {
    return {
      estudiantes: null,
      url: Global.url
    };
  }
};
</script>
<style>
@import "../assets/css/styles.css";
</style>