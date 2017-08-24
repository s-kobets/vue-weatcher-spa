<template>
  <div>
      <h1>{{ msg }}</h1>
    
    <ul>
      <li><a :class="{active: show === 'week'}" v-on:click=" show = 'week'">week</a></li>
      <li><a :class="{active: show === 'beek'}" v-on:click=" show = 'beek'">beek</a></li>
      <li><a :class="{active: show === 'feek'}" v-on:click=" show = 'feek'">feek</a></li>
    </ul>

    <transition name="fade">
      <div v-if="show === 'week'">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur iste praesentium tempora velit fugit! Aliquid voluptatibus error quis, esse repudiandae provident quisquam autem velit maiores, voluptatum vero cum iusto, aperiam!</div>
      <div v-else-if="show === 'beek'">consectetur adipisicing elit. Pariatur iste praesentium tempora velit fugit! Aliquid voluptatibus error quis, esse repudiandae provident quisquam autem velit maiores, voluptatum vero cum iusto, aperiam!</div>
    </transition>

    <div v-for="city in list">
      <h1>{{city}}</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      show: 'week',
      msg: 'Welcome to Your Vue.js App',
    };
  },

  computed: {
    ...mapGetters({
      list: 'listCitys',
    }),
  },
};
</script>

<style>
  ul {
    display: flex;
    justify-content: center;
  }

  li {
    margin-right: 20px;
  }

  li a.active{
    border-bottom: 1px solid red;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>