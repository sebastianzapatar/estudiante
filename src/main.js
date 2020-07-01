import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Nino from './components/nino.vue'
import ErrorComponent from './components/ErrorComponent.vue'
Vue.config.productionTip = false
Vue.use(Router)
const routes=[
  {path:'/home/:cualquiercosa?',component:Home},
  {path:'/estudiantes',component:Nino},
  {path:'/',component:Home},
  {path:'*',component:ErrorComponent},
];
const router=new Router({
  routes,
  mode:'history',
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
