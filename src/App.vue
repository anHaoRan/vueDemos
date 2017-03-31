<template>
  <div id="app">
    <img src="./assets/logo.png">
    <myNav></myNav>
    <router-view></router-view>
    <p>"如果转载请标注出自"@混元霹雳手ziksang</p>
  </div>
</template>

<script>
import myNav from './components/common/nav.vue'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    myNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.demo{
  width:400px;
  margin: 0 auto;
  border:1px solid #ccc;
}
p{
  width: 30%;
  text-align: left;
  margin:0 auto;
}

</style>
