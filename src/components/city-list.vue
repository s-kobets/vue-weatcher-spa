<template>
  <ul class='column' v-if='cities.length > 0'>
    <li v-for='city in cities'>
      <div class='city'>
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
        <a href='#' class='city-block__delete' title='delete'>&#215;</a>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      cities: state => state.cities.list,
    }),
  },
};
</script>

<style src='../assets/components/city-list.css' lang='postcss' />
