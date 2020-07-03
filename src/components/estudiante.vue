<template>
    <div class="container">
        <Slider :texto="'Detalles del estudiante '+estudiante.nombre+' '+estudiante.apellido "></Slider>
        <div class="center">
            <img
            :src="'http://localhost:3900/obtenerimagen/'+estudiante.image"
             :alt="estudiante.nombre"
             width="300px" />
        <br />
        {{estudiante.nombre+" "+estudiante.apellido+" "+estudiante.cedula}}
        <br />
        <h2>La fecha de inscripción fue {{estudiante.date}}</h2>
        <router-link :to="'/editar/'+estudiante._id" class="btn btn-danger">Editar</router-link>
        <a @click="deleteEstudiante(estudiante._id)" class="btn btn-warning">Eliminar</a>
        </div>
    </div>
</template>
<script>
import Slider from "./Slider.vue";
import axios from "axios";
import Global from "../Global";
import swal from'sweetalert'
export default {
    name:"Estudiante",
    components:{
        Slider,
    },
    data() {
        return {
        estudiante: null,
        url: Global.url
        };
    },
    methods:{
        getEstudiante(id){
            axios.get(this.url+'buscar/'+id).then(res=>{
                if(res.data.status=='Éxito mi niño'){
                    this.estudiante=res.data.message;
                    console.log(this.estudiante);
                }
            })
        },
        deleteEstudiante(id) {
      swal({
        title: "¿Esta seguro de borrar al estudainte?",
        text: "Esta operacion no se puede deshacer!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          axios.delete(this.url + "eliminarestudiante/" + id).then(res => {
            if (res.data) {
              swal("Estudiante eliminado");
              this.$router.push("/estudiantes");
            }
          });
        } else {
          swal("!No la embarraste!");
        }
      });
    }
    },
    mounted(){
        //vamos a coger el id y a procesarlo
        var estudianteid=this.$route.params.id;
        this.getEstudiante(estudianteid);
        console.log(estudianteid);
    }
}
</script>
<style>
@import '../assets/css/styles.css';
</style>