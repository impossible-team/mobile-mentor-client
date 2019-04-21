import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    logged: false,
    username: 'Ivan_Ivanov',
    topicStudied: 12,
    topicTotal: 15,
    gameRating: 68,
    gameCount: 36,
    gameWon: 24,
    points: 314
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