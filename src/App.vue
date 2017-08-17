<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <router-link to="/">Go to Home</router-link>
    <router-link to="/search">Go to Search</router-link>


    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style src='./assets/index.css' lang='postcss'/>
