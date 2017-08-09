<template>
  <div>
    <router-link to="/">Go to Home</router-link>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

