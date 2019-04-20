import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    logged: false,
    username: '',
    themeScore: 0,
    raiting: 0,
    gameCount: 0,
    winCount: 0,
    balance: 0
  },
  mutations: {
    setValue (state, keyValue) {
        state[keyValue.key] = keyValue.value
    }
  },  
  actions: {
    setValue ({commit}, keyValue) {
        commit('setValue', keyValue)
    }
  },
  getters: {
    value: state => key => {
        return state[key]
    }
  }
})
export default store