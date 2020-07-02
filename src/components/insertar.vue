<template>
    <div class="center" id="articles">
        <Slider texto="Esta es la página para insertar el estudiante"></Slider>
        <form @submit.prevent="save()">
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" placeholder="Ingrese su nombre"
                required minlength="2" v-model="estudiante.nombre"/>
            </div>
            <div class="form-group">
                <label for="apellido">Apellido</label>
                <input type="text" name="apellido" placeholder="Ingrese su apellido"
                required minlength="2" v-model="estudiante.apellido"/>
            </div>
            <div class="form-group">
                <label for="cedula">Cédula</label>
                <input type="number" name="cedula" placeholder="Ingrese su cédula"
                required v-model="estudiante.cedula"/>
            </div>
            <div class="form-group">
                <label for="imagen">Imagén</label>
                <input type="file" name="imagen" placeholder="Suba su imagen"/>
            </div>
            <input type="submit" value="Guardar" class="btn btn-success"/>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
import Global from '../Global';
import Estudiante from './models/Estudiante';
import Slider from './Slider.vue';
export default {
    name:'insertar',
    components:{
        Slider,
    },
    methods:{
        save(){
            console.log(this.estudiante);
            axios.post(this.url+'guardar',this.estudiante).then(res=>{
                if(res.data){
                     this.$router.push('/estudiantes');
                }
               
            }).catch(err=>{
                console.log(err);
            })
        }
    },
    data(){
        return{
            url:Global.url,
            estudiante:new Estudiante('','','',null,''),//Siempre se usan : y  no =
        }  
    }
}
</script>
<style>
@import '../assets/css/styles.css';
</style>