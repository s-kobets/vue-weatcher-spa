<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <CityInput />
    <CityList />
  </div>
</template>

<script>
import CityInput from './components/search-input.vue';
import CityList from './components/city-list.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    CityInput,
    CityList
  }
}
</script>

<style src='./assets/index.css' lang='postcss'/>
