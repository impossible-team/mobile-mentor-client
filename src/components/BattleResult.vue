<template>
    <div id="battleResult">
        <p class="battle-result-title">Поздравляем, <br>
            вы победили!
        </p>
        <img class="avatar" src="../assets/img/avatar.png">
        <div class="balance">
            <div class="balance-content-wrapp">
                <div class="balance-content-value-wrap">
                    <p class="title-text full-width-text white-text float-left-text">Зачислено:</p>
                    <p class="middle-text full-width-text white-text float-left-text">{{points}} баллов</p>
                </div>
                <img src="../assets/img/coins_bg.png">
            </div>
        </div>
        <button class="new-battle">найти нового соперника</button>
    </div>
</template>
<script>
export default {
    
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
</style>
