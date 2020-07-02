import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Nino from './components/nino.vue'
import Insertar from './components/insertar.vue'
import ErrorComponent from './components/ErrorComponent.vue'
import moment from 'vue-moment';
Vue.config.productionTip = false
Vue.use(Router)
Vue.use(moment)
const routes=[
  {path:'/home/:cualquiercosa?',component:Home},
  {path:'/estudiantes/:true?',component:Nino},
  {path:'/',component:Home},
  {path:'*',component:ErrorComponent},
  {path:'/insertar',component:Insertar},
];
const router=new Router({
  routes,
  mode:'history',
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
