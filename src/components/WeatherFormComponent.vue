<script setup>
import { ref } from 'vue';
import { useWeatherStore } from '../stores/WheatherStore';
import { fetchWeatherData } from '../services/WeatherService';

const city = ref('');
const country = ref('');
const store = useWeatherStore();

const searchWeather = async () => {
  if (city.value === '' || country.value === '') {
    console.log('Ambos campos son obligatorios');
    return;
  }

  try {
    const weatherData = await fetchWeatherData(city.value, country.value);
    store.updateWeatherData(weatherData);
  } catch (error) {
    console.error(error);
  }
};
</script>
<template>
  <form class="" @submit.prevent="searchWeather">
    <input type="text" v-model="city" placeholder="Escribe la ciudad">
    <select v-model="country">
      <option value="">Selecciona un país</option>
      <option value="ES">España</option>
      <option value="FR">Francia</option>
      <option value="AR">Argentina</option>
      <option value="CN">China</option>
    </select>
    <button type="submit">Obtener clima</button>
  </form>
</template>
