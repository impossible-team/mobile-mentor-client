<template>
    <div id="battleResult">
        <div v-if="!finishGame" class="spinner">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
        <div v-if='finishGame' class="main-load-wrapp">
            <p v-if="winner" class="battle-result-title">Поздравляем, <br>
                вы победили!
            </p>
            <p v-if="!winner" class="battle-result-title">К сожалению <br>
                вы проиграли :(
            </p>
            <img v-if="winner" class="avatar" src="../assets/img/youwin.png">
            <img v-else class="avatar" src="../assets/img/avatar.png">
            <div class="balance">
                <div class="balance-content-wrapp">
                    <div class="balance-content-value-wrap">
                        <p class="title-text full-width-text white-text float-left-text">Зачислено:</p>
                        <p class="middle-text full-width-text white-text float-left-text">{{points}} баллов</p>
                    </div>
                    <img src="../assets/img/coins_bg.png">
                </div>
            </div>
            <!-- <button class="new-battle">найти нового соперника</button> -->
            </div>
    </div>
</template>
<script>
import gameStore from '../store/gameStore.js'
import userStore from '../store/userStore.js'
import httpStore from '../store/httpStore.js'
export default {
    data () {
        return {
            finishGame: false,
            timerId: null,
            points: 0
        }
    },
    computed: {
        winner () {
            return gameStore.state.winner == localStorage.getItem('id')
        }
    },
    mounted () {
        this.cyclingCheckStatus()
    },
    methods: {
        checkGameStatus (context) {
            context.$http.get(httpStore.state.host + httpStore.state.game + gameStore.state.gameId + '/').then((response) => {
                console.log(response)
                let gameEnd = response.data.winner
                if (gameEnd) {
                    context.stopInterval()
                    context.finishGame = true
                    gameStore.state.player1Id = response.data.player1.id
                    gameStore.state.player1Username = response.data.player1.username
                    gameStore.state.player1GameRating = response.data.player1.game_rating
                    gameStore.state.player2Id = response.data.player2.id
                    gameStore.state.player2Username = response.data.player2.username
                    gameStore.state.player2GameRating = response.data.player2.game_rating
                    gameStore.state.winner = response.data.winner.id
                    gameStore.state.loser = response.data.loser
                    gameStore.state.winnerPoints = response.data.winner_points
                    gameStore.state.looserPoints = response.data.loser_points
                    gameStore.state.state = response.data.state
                    if (gameStore.state.winner == localStorage.getItem('id')){
                        this.points = response.data.winner_points
                    } else {
                        this.points = response.data.loser_points
                    }
                    gameStore.state.player1Id = 0
                    gameStore.state.player1Username = 0
                    gameStore.state.player1GameRating = 0
                    gameStore.state.player2Id = 0
                    gameStore.state.player2Username = 0
                    gameStore.state.player2GameRating = 0
                    gameStore.state.winner = 0
                    gameStore.state.loser = 0
                    gameStore.state.winnerPoints = 0
                    gameStore.state.looserPoints = 0
                    gameStore.state.state = 0
                    gameStore.state.questions = []
                    gameStore.state.gameId = 0
                }
            }).catch(error => {
                console.log(error)
            })
        },
        cyclingCheckStatus () {
            let self = this
            this.timerId = setInterval(function () {
                if (self.finishGame === false) {
                    console.log('check finish game')
                    self.checkGameStatus(self)
                } else {
                    self.stopInterval()
                }
            }, 1000)
        },
        stopInterval () {
            clearInterval(this.timerId)
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/app.scss";
#battleResult {
    padding: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.balance-content-wrapp {
    width: 100%;
    height: 100px;
    border-radius: 10px;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: $violet;
    float: left;
    margin-top: 20px;
    position: relative;
}
.balance-content-value-wrap {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 60%;
}
.balance-content-value-wrap p {
    padding: 10px;
    padding-top: 13px;
    padding-left: 20px;
    padding-bottom:0;
}
.balance-content-wrapp img {
    position: absolute;
    left: 0;
    top:0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    z-index: 0;
}
.balance-content-image-wrap {
    width: 40%;
    float: right;
}
.new-battle {
    background-color: $green;
    width: 100%;
    border-radius: 10000px;
    float: left;
    height: 50px;
    color: white;
    outline: none;
    border: none;
    margin-top: 30px;
}
.battle-result-title {
    font-size: 18pt;
    font-weight: 600;
    text-align: center;
}
.avatar {
    width: 54%;
    height: auto;
    object-fit: cover;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 23%;
    margin-right: 23%;
}
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
</style>
