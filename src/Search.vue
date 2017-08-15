<template>
    <div>
      <CityInput />
      <CityList />
    </div>
</template>

<script>
import CityInput from './components/search-input.vue';
import CityList from './components/city-list.vue';

export default {
  components: {
    CityInput,
    CityList,
  },
};
</script>
