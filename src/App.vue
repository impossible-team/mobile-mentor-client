<template>
  <div id="app">
    <div class="head" v-if="logged">
      <div class="logo"></div>
      <div class="avatar"></div>
    </div>
    <div class="content" v-if="logged">
      <router-view></router-view>
    </div>
    <app-login v-if="!logged" class="logged"></app-login>
    <div class="menu" v-if="logged">
      <div class="menu-elem">
        <img v-if="$route.meta.part !== 'Stores'" src="./assets/img/gray-graduation-cap.svg" @click="toList()">
        <img v-else src="./assets/img/graduation-cap.svg">
      </div>
      <div class="menu-elem">
        <img v-if="$route.meta.part !== 'Battle'" src="./assets/img/gray-swords.svg" @click="toBattle()">
        <img v-else src="./assets/img/swords.svg">
      </div>
      <div class="menu-elem">
        <img v-if="$route.meta.part !== 'Topic'" src="./assets/img/gray-list.svg" @click="toList()">
        <img v-else src="./assets/img/list.svg">
      </div>
      <div class="menu-elem">
        <img v-if="$route.meta.part !== 'Profile'" src="./assets/img/gray-profile.svg" @click="toProfile()">
        <img v-else src="./assets/img/profile.svg">
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
    }
  }
}
</script>

<style lang="scss">
@import "./assets/app.scss";
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
html {
  width: 100%;
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
}
p, a, span, input, button, div {
  font-size: 16pt;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
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
  height: 50px;
  background-color: blue;
  float: left;
}
.content {
  width: 100%;
  height: calc(100% - 100px);
  overflow: hidden;
  float: left;
  overflow-y: auto;
}
.menu {
  width: 100%;
  height: 50px;
  float: left;
  background-color: white;
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
  height: calc(100% - 50px);
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
</style>
