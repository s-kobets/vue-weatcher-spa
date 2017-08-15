<template>
  <div v-for="city in list">
    <p>{{city.name}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

console.log(mapState, 222, mapGetters);
export default {
  data() {
  },

  computed: {
    ...mapState({
      list: (state) => {
        console.log(1234, state);
        return state.cities.list;
      },
    }),
  },

  methods: {},
};
</script>

