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
  <form class="weather-form" @submit.prevent="searchWeather">
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

<style scoped>
.weather-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: auto;
  background: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.input-field {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  padding: 0.5rem;
  font-size: 1rem;
  background-color: #0077cc;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.submit-button:hover {
  background-color: #005999;
}
</style>
