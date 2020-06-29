import Vue from 'vue'
// import store from './store'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueHead from 'vue-head'

Vue.use(VueHead)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
