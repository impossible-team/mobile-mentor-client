<template>
    <div id="battleInProgress">
        <p class="battle-in-progress-title">
            Ищем <br>
            подходящего вам <br>
            по уровню соперника ...
        </p>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
</template>
<script>
import gameStore from '../store/gameStore.js'
import userStore from '../store/userStore.js'
import httpStore from '../store/httpStore.js'
export default {
    data () {
        return{
            gameIsActive: false,
            timerId: null
        }
    },
    mounted () {
        this.getGame()
        this.cyclingCheckStatus()
    },
    methods: {
        getGame () {
            let data = {
                'user_id': localStorage.getItem('id')
            }
            this.$http.post(httpStore.state.host + httpStore.state.game, data).then((response) => {
                gameStore.state.gameId = response.data.id
                gameStore.state.questions = response.data.questions
                this.gameIsActive = true;
            }).catch(error => {
                console.log(error)
            })
        },
        checkGameStatus (context) {
            this.$http.get(httpStore.state.host + httpStore.state.game + gameStore.state.gameId + '/').then((response) => {
                let gameState = response.data.state
                if (gameState === 3) {
                    clearInterval(context.timerId)
                    gameStore.state.player1Id = response.data.player1.id
                    gameStore.state.player1Username = response.data.player1.username
                    gameStore.state.player1GameRating = response.data.player1.game_rating
                    gameStore.state.player2Id = response.data.player2.id
                    gameStore.state.player2Username = response.data.player2.username
                    gameStore.state.player2GameRating = response.data.player2.game_rating
                    gameStore.state.winner = response.data.winner
                    gameStore.state.loser = response.data.loser
                    gameStore.state.winnerPoints = response.data.winner_points
                    gameStore.state.looserPoints = response.data.looser_points
                    gameStore.state.start = response.data.start
                    gameStore.state.end = response.data.end
                    gameStore.state.state = response.data.state
                    context.$router.push('/battleStart')
                }
            }).catch(error => {
                console.log(error)
            })
        },
        cyclingCheckStatus () {
            let self = this
            this.timerId = setInterval(function () {
                if (self.gameIsActive) {
                    self.checkGameStatus(self)
                }
            }, 1000)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/app.scss";
.lds-ellipsis {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 64px;
    height: 64px;
    margin-top: -32px;
    margin-left: -32px;
}

.lds-ellipsis {
  width: 64px;
  height: 64px;
}
.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: $green;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
  background: $violet;
}
.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}

.battle-in-progress-title {
    width: 100%;
    padding: 20px;
    padding-top: 40px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-weight: 600;
}
</style>
