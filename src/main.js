import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(Vuex)
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})
