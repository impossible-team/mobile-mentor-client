<template>
    <div id="login">
        <div class="row">
            <div class="form-wrap">
                <form @submit="login($event)">
                    <div class="form-input">
                        <input v-model="name" required placeholder="введите имя">
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
                'username': name
            }
            this.$http.get(httpStore.state.host + httpStore.state.login, data).then((response) => {
                console.log('asdf')
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
#login {
    width: 100vw;
    height: 100vh;
    background-color: violet;
}
.row {
    width: 100%;
    height: 100%;
}
.form-wrap {
    position: absolute;
    top: 50%;
    margin-top: -100px;
    width: 100%;
    height: auto;
}
.form-input {
    width: 100%;
    height: 50px;
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
}
.form-button button{
    width: 50%;
    height: 50px;
    margin-left: 25%;
}
</style>
