<template>
    <div id="profile">
        <div class="profile-wrapper">
        <div class="avatar-wrapper">
            <img class="avatar" src="../assets/img/avatar.png">
        </div>
        <div class="username">
            <p class="title-text full-width-text float-left-text">пользователь:</p>
            <p class="large-text full-width-text float-left-text">{{username}}</p>
        </div>
        <div class="success">
            <div class="success-title-wrap">
                <p class="title-text float-left-text">Пройдено тем:</p>
                <p class="small-text float-right-text"><span class="green-text">{{topicStudied}}</span> из {{topicTotal}}</p>
            </div>
            <div class="success-slider-wrap">
                <div class="full-slider"></div>
                <div class="current-slider" :style="{width: Math.floor(topicStudied/topicTotal) * 100 + '%'}"></div>
                <div class="start-slider" :style="{left: Math.floor(topicStudied/topicTotal) * 100 + '%'}">
                    <img src="../assets/img/star.svg">
                </div>
            </div>
        </div>
        <div class="score">
            <div class="score-title-wrap">
                <p class="title-text float-left-text">Рейтинг в состязаниях:</p>
                <p class="small-text float-right-text"><span class="green-text">{{gameRating}}%</span></p>
            </div>
            <div class="score-content-elem-wrap">
                <div class="score-wrap">
                    <p class="small-text score-text-title float-left-text">Всего игр сыграно:</p>
                    <p class="small-text score-text-value float-right-text">{{gameCount}}</p>
                </div>
                <div class="score-wrap">
                    <p class="small-text score-text-title float-left-text">Выиграно игр:</p>
                    <p class="small-text score-text-value float-right-text">{{gameWon}}</p>
                </div>
            </div>
        </div>
        <div class="balance">
        <div class="balance-content-wrapp">
            <div class="balance-content-value-wrap">
                <p class="title-text full-width-text white-text float-left-text">На счету:</p>
                <p class="middle-text full-width-text white-text float-left-text">{{points}} баллов</p>
            </div>
            <img src="../assets/img/coins_bg.png">
            </div>
        </div>
        <div class="store">
            <button>потратить</button>
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
        }
    },
    computed: {
        username () {
            return userStore.state.username
        },
        topicStudied () {
            return userStore.state.topicStudied
        },
        topicTotal () {
            return userStore.state.topicTotal
        },
        gameRating () {
            return userStore.state.gameRating
        },
        gameCount () {
            return userStore.state.gameCount
        },
        gameWon () {
            return userStore.state.gameWon
        },
        points () {
            return userStore.state.points
        }
    },
    mounted () {
        // this.getProfile()
    },
    methods: {
        getProfile () {
            let id = localStorage.getItem('id')
            if (id) {
                this.$http.get(httpStore.state.host + httpStore.state.profiles + id + '/').then((response) => {
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
}
</script>
<style lang="scss" scoped>
@import "../assets/app.scss";
#profile {
    width: 100%;
    height: auto;
}
.profile-wrapper {
    width: 100%;
    height: auto;
    padding-right: 20px;
    padding-left: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.avatar {
    width: 100%;
    height: 30vh;
    float: left;
}
.username {
    width: 100%;
    height: auto;
    margin-bottom: 10px !important;
    float: left;
}
.username p{
    margin-bottom: 10px;
}

.success-slider-wrap {
    width: 100%;
    height: 40px;
    position: relative;
    float: left;
    margin-top: 20px;
}
.full-slider {
    position: absolute;
    width: 100%;
    border: 1px solid $green;
    height: 8px;
}
.current-slider {
    position: absolute;
    // width: 80%;
    left:0;
    height: 10px;
    background-color: $green;
}
.start-slider {
    width: 25px;
    height: 25px;
    position: absolute;
    top: -12px;
    // left: 80%;
}
.start-slider img {
    object-fit: cover;
    margin-left: -6px;

}
.score-content-elem-wrap {
    margin-top: 15px;
    width: 100%;
    height: 114px;
    border-radius: 10px;
    padding: 10px;
    float: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: white;
}
.score-wrap {
    width: 100%;
    height: 50px;
    float: left;
    font-weight: 300;
    padding: 10px;
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
.store {
    width: 100%;
    float: left;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 40px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;  
}
.store button {
    background-color: $green;
    width: 100%;
    border-radius: 10000px;
    float: left;
    height: 50px;
    color: white;
    outline: none;
    border: none;
}
.avatar {
    width: 54%;
    height: auto;
    object-fit: cover;
    margin-top: 20px;
    margin-bottom: 35px;
    margin-left: 23%;
    margin-right: 23%;
}
</style>
