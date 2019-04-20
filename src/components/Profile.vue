<template>
    <div id="profile">
        <div class="avatar">
            <img>
        </div>
        <div class="username">
            <p class="title-text">пользователь:</p>
            <p class="text">{{username}}</p>
        </div>
        <div class="success">
            <div class="success-title-wrap">
                <p class="title-text">Пройдено:</p>
                <p class="small-text"><span class="green-text">{{themeScore}}</span>тем из 15</p>
            </div>
            <div class="success-slider-wrap">
                <div class="full-slider"></div>
                <div class="current-slider"></div>
                <div class="start-slider">
                    <img>
                </div>
            </div>
        </div>
        <div class="score">
            <div class="score-title-wrap">
                <p class="title-text">Рейтинг в состязаниях:</p>
                <p class="small-text"><span class="green">{{raiting}}}%</span></p>
            </div>
            <div class="score-content-elem-wrap">
                <div class="score-top-wrap">
                    <p class="small-text score-text-title">Всего сыграно:</p>
                    <p class="small-text score-text-value">{{gameCount}}</p>
                </div>
                <div class="score-content-elem-wrap">
                    <p class="small-text score-text-title">Выиграно:</p>
                    <p class="small-text score-text-value">{{winCount}}</p>
                </div>
            </div>
        </div>
        <div class="balance">
            <div class="balance-content-wrapp">
                <div class="balance-content-value-wrap">
                    <p class="title-text">На счету:</p>
                    <p class="middle-text white">{{balance}} баллов</p>
                </div>
                <div class="balance-content-image-wrap">
                    <img>
                </div>
            </div>
        </div>
        <div class="store">
            <button>потратить</button>
        </div>
    </div>
</template>
<script>
import userStore from '../store/userStore.js'
export default {
    data () {
        return {
        }
    },
    compute: {
        username () {
            return userStore.state.username
        },
        themeScore () {
            return userStore.state.themeScore
        },
        raiting () {
            return userStore.state.raiting
        },
        gameCount () {
            return userStore.state.gameCount
        },
        winCount () {
            return userStore.state.winCount
        },
        balance () {
            return userStore.state.balance
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
