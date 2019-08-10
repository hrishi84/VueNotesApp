<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1>Simple Notes Application</h1>
    <PostComponent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import PostComponent from './components/PostComponent'

export default {
  name: 'app',
  components: {
    PostComponent
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
</style>
