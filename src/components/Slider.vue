<template>
    <div id="slider" class="slider">
            <h2>{{texto}}</h2>
             <img src="../assets/logo.png" />
    </div>
   
</template>
<script>
export default {
    name:'Slider',
    props:['texto']
}
</script>
<style>
@import '../assets/css/styles.css';
</style>