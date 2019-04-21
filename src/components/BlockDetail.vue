<template>
    <div id='blockDetail'>
        <div id="wrapper">
        </div>
        <div class="confirm">
            <button>изучил</button>
        </div>
    </div>
</template>
<script>
import httpStore from '../store/httpStore.js'
export default {
    data () {
        return{
            blockContent: ''
        }
    },
    created () {
        this.getBlockContent()
    },
    methods: {
        getBlockContent () {
            this.$http.get(httpStore.state.host + httpStore.state.blocks + this.$route.query['id'] + '/').then((response) => {
                this.blockContent = response.data.content
                console.log(response.data.content)
                let wrapper = document.getElementById('wrapper')
                wrapper.innerHTML = response.data.content
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/app.scss";
#blockDetail {
    padding: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box; 
}
#wrapper {
    width: 100%;
    height: auto;
}
.quest-text {
    font-size: 16pt;
}
.quest-answer {
    margin-top: 10px;
    font-size: 16pt;
}
.img {
    width: 100%;
    height: auto;
    margin: 10px 0;
}
.confirm {
    width: 100%;
    float: left;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 40px;
}

.confirm button {
    background-color: $green;
    width: 100%;
    border-radius: 10000px;
    float: left;
    height: 50px;
    color: white;
    outline: none;
    border: none;
}
</style>
