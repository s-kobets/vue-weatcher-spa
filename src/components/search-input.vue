<template>
  <form>

    <input type='text'  v-model='cityInput'>
    <button type='submit' v-on:click='handleFormSubmit'>Add City</button>
  </form>
</template>

<script>

export default {
  data: () => ({
    cityInput: '',
    msg: 'Welcome to Your Vue.js Ap +++p'
  }),

  methods: {
      handleFormSubmit: function(e) {
        e.preventDefault();
        console.log(this.cityInput)
      }
  }
}
</script>
