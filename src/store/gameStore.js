import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    state: 0,
    gameId: 0,
    player1Id: 0,
    player1Username: 0,
    player1GameRating: 0,
    player2Id: 0,
    player2Username: 0,
    player2GameRating: 0,
    winner: 0,
    loser: 0,
    winnerPoints: 0,
    looserPoints: 0,
    questions: []
  }
})
export default store