<template>
    <div id="lib">
        <div class="wrapper">
        <p class="title-page">Справочник</p>
        <input class="search-input" placeholder="Поиск по темам">
        <div class="theme-list">
            <div class="theme-item-wrap" v-for="topic in topics" :key="topic.id">
                <div class="theme-item-block" @click="toDetailTheme(topic.id, topic.name)">
                    <div class="theme-item-header">
                        <p class="theme-item-num">Тема {{topic.id}}</p>
                        <p class="theme-item-status">Пройдено</p>
                        <img>
                    </div>
                    <div class="theme-item-title">
                        <p>{{topic.name}}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import httpStore from '../store/httpStore.js'
export default {
    data () {
        return {
            topics: []
        }
    },
    methods: {
        getThemes () {
            this.$http.get(httpStore.state.host + httpStore.state.topics).then((response) => {
                this.topics = response.data
            }).catch(error => {
                console.log(error)
            })
        },
        toDetailTheme(id, name) {
            console.log(id, name)
            this.$router.push({ name: 'Blocks', query: {'id': id, 'name': name}})
        }
    },
    mounted () {
        this.getThemes()
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/app.scss";
.wrapper {
    width: 100%;
    height: calc(100vh - 100px - 61px);
    overflow: hidden;
    padding: 20px;
    padding-bottom: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}
.search-input {
    width: 100%;
    height: 40px;
    border-radius: 10000px;
    border: none;
    outline: none;
    font-size: 14pt;
    padding-left: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: 20px;
}
.theme-list {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    margin-top: 20px;
}
.theme-item-wrap {
    width: 100%;
    height: 100px;
    background-color: gray;
    border-radius: 10px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: 10px;
    margin-bottom: 10px;
}
.theme-item-block {
    width: 100%;
    height: 100%;
}
.theme-item-header {
    width: 100%;
    height: 20px;
    float: left;
}
.theme-item-num {
    color: white;
    font-size: 12pt;
    float: left;
}
.theme-item-status {
    color: white;
    font-size: 12pt;
    float: right;
}
.theme-item-title {
    color: white;
    font-size: 12pt;
    float: left;
    width: 100%;
    height: 40px;
}
.theme-item-title p{
    color: white;
    font-size: 11pt;
    float: left;
    width: 100%;
    height: 40px;
    margin-top: 10px;
}
</style>
