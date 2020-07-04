import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Nino from './components/nino.vue'
import Insertar from './components/insertar.vue'
import ErrorComponent from './components/ErrorComponent.vue'
import Estudiante from './components/estudiante.vue'
import Buscar from './components/buscar.vue'
import moment from 'vue-moment';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap/dist/js/bootstrap"
import Editar from './components/edtiar.vue'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(moment)

const routes=[
  {path:'/home/:cualquiercosa?',component:Home},
  {path:'/estudiantes/:true?',component:Nino},
  {path:'/',component:Home},
  {path:'*',component:ErrorComponent},
  {path:'/insertar',component:Insertar},
  {path:'/editar/:id',component:Editar},
  {path:'/estudiante/:id',component:Estudiante},
  {path:'/buscar/:buscar',component:Buscar},
];
const router=new Router({
  routes,
  mode:'history',
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
