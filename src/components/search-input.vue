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
  }),

  methods: {
      handleFormSubmit: function(e) {
        e.preventDefault();
        this.$store.commit({
            type: 'ADD_CITY',
            city: this.cityInput
        })
      }
  }
}
</script>
