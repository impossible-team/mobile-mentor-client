<template>
    <div id="login">
        <div class="row">
            <div class="form-wrap">
                <p class="login-title">Вход в систему</p>
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
    height: 230px;
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
    height: 50px;
    margin-left: 10%;
    border-radius: 10000px;
    outline: none;
    border: 1px solid $back-color;
    text-align: center;
}
.form-button button{
   width: 80%;
    height: 50px;
    margin-left: 10%;
    border-radius: 10000px;
    outline: none;
    border: none;
    background-color: $green;
    text-align: center;
    color: white;
}
.login-title {
    font-size: 24pt;
    color: black;
    margin-top: -70px;
    margin-bottom: 80px;
    margin-left: 20px;
}
</style>
