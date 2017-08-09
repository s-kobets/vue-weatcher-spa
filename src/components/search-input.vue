<template>
  <form v-on:submit.prevent='handleFormSubmit'>
    <input type='text' v-model='cityInput'>
    <button type='submit'>Add City</button>
  </form>
</template>

<script>
import api from '../assets/api'

export default {
  data: () => ({
    cityInput: '',
  }),

  methods: {
      handleFormSubmit: function(e) {
        const argument = {
            type: 'weather', 
            settings: `?q=${this.cityInput}`,
        }

        api.get(argument).then(result => {
            this.$store.dispatch('addCity', { city: result.response })
            e.target.reset()
        })
      }
  }
}
</script>
