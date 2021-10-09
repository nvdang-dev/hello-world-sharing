import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueShareComponent from './library'

Vue.config.productionTip = false
Vue.use(VueShareComponent)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
