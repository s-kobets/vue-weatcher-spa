<template>
  <ul class='column'>
    <li v-for='city in citys'>
        <div className='city'>
            <div className='city-block'>
                <img :src=`http://openweathermap.org/img/w/${city.weather[0].icon}.png` alt='city.weather[0].description' />
                <div className='city-block__description'>
                    <strong> {{city.name}} </strong>
                    <ul>
                        <li>{{city.weather[0].description}}</li>
                    </ul>
                </div>
            </div>
            <a href='#' class='city-block__delete' title='delete'>&#215;</a>
        </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState({
        citys: state => state.citys
    })
}    
</script>