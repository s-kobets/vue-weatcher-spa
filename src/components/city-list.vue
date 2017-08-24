<template>
  <ul class='column' v-if='cities.length > 0'>
    <li v-for='city in cities'>
      <div class='city' style='position: relative;'>
        <div class='city-block'>
          <img :src='city.weather[0].icon' :alt='city.weather[0].description' />
          <div class='city-block__description'>
            <strong> {{city.name}} </strong>
            <ul>
              <li>{{city.weather[0].description}}</li>
              <li>temp: {{city.main.temp}} &#186;C</li>
              <li>pressure: {{city.main.pressure}} mm Hg</li>
              <li>humidity: {{city.main.humidity}} %</li>
              <li>wind speed: {{city.wind.speed}} meter/sec</li>
            </ul>
          </div>
        </div>
        <a class='city-block__delete' title='delete' v-on:click='removeCity(city)'>&#215;</a>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      cities: state => state.cities.list,
    }),
  },

  methods: {
    ...mapActions({
      removeCity: 'removeCity',
    }),
  },
};
</script>

<style src='../assets/components/city-list.css' lang='postcss' />
