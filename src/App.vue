<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <CityInput />
  </div>
</template>

<script>
import CityInput from './components/search-input.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Ap +++p'
    }
  },
  components: {
    CityInput
  }
}
</script>

<style>
@import 'normalize.css'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

h1, h2
  font-weight: normal

ul
  list-style-type: none
  padding: 0

.logo
  width: 60px
  height: 60px

</style>
