<template>
  <div id="app">
    <div class="head" v-if="logged">
      <div class="logo">
        <img src="./assets/img/logo.svg">
      </div>
      <div class="avatar">
        <p>{{username}}</p>
      </div>
    </div>
    <div class="content" v-if="logged">
      <router-view></router-view>
    </div>
    <app-login v-if="!logged" class="logged"></app-login>
    <div class="menu" v-if="logged">
      <div class="menu-wrapper">
      <div class="menu-elem back-arrow">
        <img src="./assets/img/left-arrow.svg" @click="toProfile()">
      </div>
      <div class="menu-elem wlapa">
        <img v-if="$route.meta.part !== 'Topic'" src="./assets/img/gray-graduation-cap.svg" @click="toList()">
        <img v-else src="./assets/img/graduation-cap.svg">
      </div>
      <div class="menu-elem">
        <img v-if="$route.meta.part !== 'Battle'" src="./assets/img/gray-swords.svg" @click="toBattle()">
        <img v-else src="./assets/img/swords.svg">
      </div>
      <div class="menu-elem">
        <img v-if="$route.meta.part !== 'Profile'" src="./assets/img/gray-profile.svg" @click="toProfile()">
        <img v-else src="./assets/img/profile.svg">
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from './components/Login'
import Profile from './components/Profile'
import userStore from './store/userStore.js'
import httpStore from './store/httpStore.js'
export default {
  name: 'app',
  components: {
    'AppLogin': Login,
    'AppProfile': Profile
  },
  data () {
    return {
    }
  },
  mounted () {
    this.checkLogin()
  },
  computed: {
    logged() {
      return userStore.state.logged
    },
    username () {
      return userStore.state.username
    }
  },
  methods: {
    checkLogin () {
      let id = localStorage.getItem('id')
      if (id) {
        this.$http.get(httpStore.state.host + httpStore.state.profiles + id + '/').then((response) => {
              userStore.state.logged = true
              userStore.state.username = response.data.user.username
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
    },
    toList () {
      this.$router.push('/lib')
    },
    toBattle () {
      this.$router.push('/battle')
    },
    toProfile () {
      this.$router.push('/')
    },
    toBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">
@import "./assets/app.scss";
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700');
html {
  width: 100%;
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
}
p, a, span, input, button, div {
  font-size: 14pt;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

p {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; 
}

button {
  padding-bottom: 4px;
}

.green-text {
  color: $green !important;
}

.violet-text {
  color: $violet !important;
}

.white-text {
  color: white !important;
}

input {
  padding: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;  
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
  width: 100vw;
  height: calc(100vh - 57px);
  padding: 0;
  margin:0;
  background-color: $back-color;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
.head {
  width: 100%;
  height: 80px;
  float: left;
}
.content {
  width: 100%;
  height: calc(100% - 130px);
  overflow: hidden;
  float: left;
  overflow-y: auto;
}
.menu {
  width: 100%;
  height: 50px;
  float: left;
  background-color: white;
  position: relative;
}
.menu-elem {
  height: 100%;
  width: calc(100% / 4);
  float: left;
  padding: 14px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
}
.menu-elem img {
  width: auto;
  height: 100%;
  object-fit: cover;
}
.logged {
  width: 100%;
  background-color: #42b983;
  height: calc(100% - 80px);
  float: left;
}
.full-width-text {
    width: 100%;
}
.float-left-text {
    float: left;
}
.float-right-text {
    float:right;
}
.title-text {
    font-size: 14pt;
    color: gray;
    font-weight: 300;
}
.large-text {
    font-size: 18pt;
    color: black;
}
.small-text {
    font-size: 14pt;
    color: black;
}
.middle-text {
    font-size: 16pt;
    color: black;
}
.back-arrow {
  padding: 14px 18px 18px 18px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.back-arrow {
  margin-top: 1px;
}
.wlapa {
  padding: 12px 12px 12px 12px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.logo {
  width: auto;
  height: 46px;
  padding-left:  20px;
  margin-top: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  float: left;
}
.logo img {
  width: auto;
  height: 100%;
  object-fit: cover;
}
.avatar {
  float: right;
  margin-right: 20px;
  margin-top: 30px;
}
.avatar p {
  color: gray;
  font-size: 14pt;
}
.menu-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  z-index: 1;
}
.quest-answer {
    margin-bottom: 10px !important;
    font-size: 16pt;
}
</style>
