<template>
  <div id="app">
    <img alt="Vue logo" id="myLogo" src="./assets/logo.png">
    <HelloWorld msg="Welcome in my Memory Vue Game !"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
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
  #myLogo{
    width:400px;
  }
</style>
