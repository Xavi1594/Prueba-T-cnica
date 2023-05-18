<script setup>
import { computed } from 'vue';
import { useWeatherStore } from '../stores/WheatherStore';

const store = useWeatherStore();
const weatherData = computed(() => store.data);

const KelvinToCelsius = (degrees) => {
  return parseInt(degrees - 273.15, 10);
};
</script>



<template>
    <div v-if="weatherData">
      <p>Clima en {{ weatherData.name }}</p>
      <p>Temperatura actual: {{ KelvinToCelsius(weatherData.main.temp) }} &#8451;</p>
      <p>Temperatura máxima: {{ KelvinToCelsius(weatherData.main.temp_max) }} &#8451;</p>
      <p>Temperatura mínima: {{ KelvinToCelsius(weatherData.main.temp_min) }} &#8451;</p>
    </div>
    <div v-else>
      <p>Agrega tu ciudad y el país, el resultado se mostrará aquí</p>
    </div>
  </template>
  