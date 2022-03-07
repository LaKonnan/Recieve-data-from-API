import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// (ES) Importar plugin BoostrapVue e iconos al proyecto
// (EN) Import BoostrapVue and Icons plugin to the project
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// (ES) Habilitar BoostrapVue e iconos
// (EN) Enable BootstrapVue and icons
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
