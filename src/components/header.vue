<template>
    <header id="header">
        <div class="center">
            <div id="menu">
                <nav id="menu">
                    <ul>
                        <li>
                            <router-link to="/home" active-class="active">Inicio</router-link>
                        </li>
                        <li>
                            <router-link to="/estudiantes" active-class="active">Estudiantes</router-link>
                        </li>
                        <li>
                            <router-link to="/insertar" active-class="active">Insertar</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div id="logo">
            <img src="../assets/logo.png" class="app-logo" alt="Logo del proyecto" /><br/>
            <span id="marca">
                <strong> Estudiantes con ganas de aprender</strong>
            </span>
        </div>
    </header>
</template>
<script>
export default {
    name:'HeaderComponent',
}
</script>
<style>
@import '../assets/css/styles.css';
</style>