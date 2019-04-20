<template>
  <div id="app">
    <div class="head">
      <div class="logo"></div>
      <div class="avatar" v-if="logged"></div>
    </div>
    <div class="content" v-if="logged">
    </div>
    <app-login v-if="!logged"></app-login>
  </div>
</template>

<script>
import Login from './components/Login'
import userStore from './store/userStore.js'
export default {
  name: 'app',
  components: {
    'AppLogin': Login
  },
  data () {
    return {
    }
  },
  computed: {
    logged() {
      return userStore.state.logged
    }
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
p, a, span, input, button, div {
  font-size: 16pt;
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
  height: 100vh;
  padding: 0;
  margin:0;
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

a {
  color: #42b983;
}
.head {
  width: 100%;
  height: 50px;
  background-color: blue;
}
.content {
  width: 100%;
  height: calc(100% - 50px);
}
</style>
