<template>
    <div class="container">
        <Slider :texto="'Detalles del estudiante '+estudiante.nombre "></Slider>
        <div class="center">
            <img
            :src="'http://localhost:3900/obtenerimagen/'+estudiante.image"
             :alt="estudiante.nombre"
             width="300px" />
        <br />
        {{estudiante.nombre+" "+estudiante.apellido+" "+estudiante.cedula}}
        <br />
        {{estudiante.date}}
        </div>
    </div>
</template>
<script>
import Slider from "./Slider.vue";
import axios from "axios";
import Global from "../Global";

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