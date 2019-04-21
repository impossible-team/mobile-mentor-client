<template>
    <div id="lib">
        <div class="wrapper">
        <p class="title-page">Тема {{topicId}}</p>
        <p class="title-page-name">{{topicName}}</p>
        <input class="search-input" placeholder="Поиск по блокам">
        <div class="theme-list">
            <div class="theme-item-wrap" v-for="block in blocks" :key="block.id">
                <div class="theme-item-block" @click="toDetailBlock(block.id)">
                    <div class="theme-item-header">
                        <p class="theme-item-num">Блок {{id}}</p>
                        <p class="theme-item-status">Пройдено</p>
                        <img>
                    </div>
                    <div class="theme-item-title">
                        <p>{{block.name}}</p>
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
            topicId: 1,
            topicName: '',
            blocks: []
        }
    },
    methods: {
        getBlocks () {
            this.$http.get(httpStore.state.host + httpStore.state.blocks + '?id=' + this.$route.query['id']).then((response) => {
                this.blocks = response.data
            }).catch(error => {
                console.log(error)
            })
        },
        getThemeInfo() {
            this.topicId = this.$route.query['id']
            this.topicName = this.$route.query['name']
        },
        toDetailBlock (id) {
            this.$router.push({ name: 'BlockDetail', query: {'id': id}})
        }
    },
    mounted () {
        this.getBlocks()
        this.getThemeInfo()
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
    margin-top: 20px;
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
