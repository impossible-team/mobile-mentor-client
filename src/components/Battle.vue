<template>
    <div id="battle">
        <div class="wrapper">
            <div class="content">
                <img class="fon" src="../assets/img/competitionbg.png">
                <div class="content-wrapp">
                    <!-- <p class="battle-title">Состязание</p> -->
                    <p>Проверь свою компьютерную грамотность в интеллектуальном состязании с другим игроком и получи баллы, 
                        которые можно обменять на ценные призы!</p>
                    <button @click="getBattle()">найти соперника</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return{

        }
    },
    methods: {
        getBattle () {
            this.$router.push('/getBattle')
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/app.scss";
#battle {
    width: 100%;
    height: 100%;
}
.wrapper {
    width: 100%;
    height: 100%;
    padding: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: white;
}
.content-wrapp {
    position: absolute;
    bottom:50px;
    left: 0;
    width: 100%;
    height: 260px;
    background-color: white;
    padding: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 1;
}
.content-wrapp p {
    font-size: 11pt;
    margin-top:20px;
}
.content-wrapp button {
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
.battle-title {
    font-size: 24pt !important;
    color: black;
    margin-bottom: 50px;
    margin-top: -80px!important;
}
.fon {
    position: absolute;
    top: -50px;
    left:0;
    width: 100%;
    height: auto;
    object-fit: cover;
}
</style>
