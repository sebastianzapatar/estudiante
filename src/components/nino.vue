<template>
<div>
    <h2>Este es el compenente</h2>
    <h3>{{mensaje}}</h3>
</div>
    
</template>
<script>
export default {
    name:'mi_nino',
    data(){
        return{
            mensaje:"Soy el profesor y van a aprender vue.js",
        }
    }
}
</script>
<style>
@import '../assets/css/styles.css';
</style>