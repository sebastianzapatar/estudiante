<template>
    <div class="center">
        <Slider texto="El buscador"></Slider>
       <form  @submit.prevent="buscar">
           <div class="form-group">
               <label for="buscar">Buscar</label>
               <input type="text" placeholder="Coloque la información" class="center" v-model='buscar1'  required/>
               
           </div>
            <button type="submit" class="btn btn-primary" value="Buscar" >Enviar</button>
       </form>
    </div>
</template>
<script>
import Slider from './Slider.vue'
export default {
    name:"home",
    components:{
        Slider,
    },
    methods:{
        buscar(){
            console.log(this.buscar1)
            this.$router.push('/buscar/'+this.buscar1)
        }
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
            buscar1:null,
        }
    }
}
</script>