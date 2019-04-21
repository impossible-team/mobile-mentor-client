<template>
    <div id="login">
        <div class="fon">
            <img src="../assets/img/loginbg.png">
        </div>
        <div class="row">
            <div class="form-wrap">
                <p class="login-title">Мой мобильный наставник</p>
                <form @submit="login($event)">
                    <div class="form-input">
                        <input v-model="name" required placeholder="ваш никнейм">
                    </div>
                    <div class="form-button">
                        <button type="submit">войти</button>
                    </div>
                </form>
            </div>
            <div class="test">
            </div>
        </div>
    </div>
</template>
<script>
import userStore from '../store/userStore.js'
import httpStore from '../store/httpStore.js'
export default {
    data () {
        return {
            name: ''
        }
    },
    methods: {
        login (e) {
            e.preventDefault()
            let data = {
                'username': this.name
            }
            this.$http.post(httpStore.state.host + httpStore.state.login, data).then((response) => {
                userStore.state.logged = true
                userStore.state.username = this.name
                userStore.state.topicStudied = response.data.topic_studied
                userStore.state.topicTotal = response.data.topic_total
                userStore.state.gameRating = response.data.game_rating
                userStore.state.gameCount = response.data.game_total
                userStore.state.gameWon = response.data.game_won
                userStore.state.points = response.data.points
                localStorage.setItem('id', response.data.id)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/app.scss";
#login {
    background-color: $back-color;
}
.row {
    width: 100%;
    height: 100%;
}
.form-wrap {
    position: absolute;
    bottom:0;
    width: 100%;
    height: 340px;
    background-color: white;
}
.form-input {
    width: 100%;
    height: 50px;
    margin-top: 40px;
}
.form-button{
    width: 100%;
    height: 50px;
    margin-top: 30px;
}
.form-input input{
    width: 80%;
    font-size: 12pt;
    height: 50px;
    margin-left: 10%;
    border-radius: 10000px;
    outline: none;
    border: 1px solid rgba($color: #000000, $alpha: .2);
    text-align: center;
}
.form-button button{
   width: 80%;
    height: 50px;
    font-size: 12pt;
    margin-left: 10%;
    border-radius: 10000px;
    outline: none;
    border: none;
    background-color: $green;
    text-align: center;
    color: white;
}
.login-title {
    font-size: 15pt;
    color: black;
    margin-top: 80px;
    margin-bottom: 50px;
    margin-left: 20px;
    margin-right: 20px;
    font-weight: 600;
    text-align: center;
}
.fon {
    width: 100%;
    height: 400px;
    position: absolute;
    top: -40px;
    left:0;
    z-index: 21;
}
.fon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
