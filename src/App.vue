<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <router-link to="/more">Go to More</router-link>
    <router-link to="/search">Go to Search</router-link>


    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style src='./assets/index.css' lang='postcss'/>
