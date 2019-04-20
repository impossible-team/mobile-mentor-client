import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    host: 'http://35.188.16.193:80/',
    login: 'login/'
  }
})
export default store