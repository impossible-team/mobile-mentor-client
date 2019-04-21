<template>
    <div id="battleStart">
        <div class="battle-start-title">
            <p>Соперник найден!</p>
        </div>
        <div class="users-block">
            <div class="user">
                <img>
                <p>player1Username</p>
            </div>
            <div class="user">
                <img>
                <p>player2Username</p>
            </div>
        </div>
        <div class="timer">
            <p class="timer-title">начало через</p>
            <p class="timer-count">{{counDown}}...</p>
        </div>
    </div>
</template>
<script>
import gameStore from '../store/gameStore.js'
export default {
    data () {
        return{
            counDown: 5
        }
    },
    computed: {
        player1Username () {
            gameStore.state.player1Username
        },
        player2Username () {
            gameStore.state.player2Username
        }
    },
    mounted () {
        this.startCountDown()
    },
    methods: {
        startCountDown () {
            let self = this
            let timerId = setInterval(function () {
                self.counDown -= 1
            }, 1000)
            setTimeout(function() {
                clearInterval(timerId)
                self.$router.push('/battlePlay')
            }, 5000);
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/app.scss";
.battle-start-title {
    width: 100%;
    height: 100px;
    text-align: center;
    padding-top: 70px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.battle-start-title p {
    font-size: 20pt;
}
.users-block {
    width: 100%;
    height: 150px;
    background-color: red;
    margin-top: 40px;
    padding: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.timer {
    width: 100%;
    margin-top: 40px;
    text-align: center;
}
.timer-title {
    color: gray;
}
.timer-count {
    font-size: 20pt;
    font-weight: 600;
}
</style>
