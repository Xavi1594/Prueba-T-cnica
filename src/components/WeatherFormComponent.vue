<script setup>
import { ref } from 'vue';
import { useWeatherStore } from '../../stores/weather';
import { fetchWeatherData } from '../../services/WeatherService';

const ciudad = ref('');
const pais = ref('');
const store = useWeatherStore();

const buscarClima = async () => {
  if (ciudad.value === '' || pais.value === '') {
    console.log('Ambos campos son obligatorios');
    return;
  }

  try {
    const weatherData = await fetchWeatherData(ciudad.value, pais.value);
    store.updateWeatherData(weatherData);
  } catch (error) {
    console.error(error);
  }
};
</script>
<template>
  <form @submit.prevent="buscarClima">
    <input type="text" v-model="ciudad" placeholder="Escribe la ciudad">
    <select v-model="pais">
      <option value="">Selecciona un país</option>
      <option value="ES">España</option>
      <option value="FR">Francia</option>
      <option value="AR">Argentina</option>
      <option value="CN">China</option>
    </select>
    <button type="submit">Obtener clima</button>
  </form>
</template>
