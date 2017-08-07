<template>
  <form v-on:submit.prevent='handleFormSubmit'>
    <input type='text'  v-model='cityInput'>
    <button type='submit'>Add City</button>
  </form>
</template>

<script>

export default {
  data: () => ({
    cityInput: '',
  }),

  methods: {
      handleFormSubmit: function(e) {
        this.$store.dispatch('addCity', { city: this.cityInput })
        e.target.reset()
      }
  }
}
</script>
