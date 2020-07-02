<template>
    <div>
        <Slider texto="Estas en el home mono"></Slider>
        {{personaje}}
        <h1>{{url}}</h1>
        <h2>Hola amigos</h2>
    </div>
</template>
<script>
import Slider from './Slider.vue'
export default {
    name:"home",
    components:{
        Slider,
    },
    created(){
        console.log("Componente creado");
    },
    mounted(){
        this.url=this.$route.params.cualquiercosa;
        console.log("Componente cargado al pelo");
    },
    update(){
        console.log("Componente actualizado")
    },
    destroyed(){
        console.log("Componente eliminado");
    },
    data(){
        return{
            personaje:"El chavo",
            url:null,
        }
    }
}
</script>