<script setup>
import { computed } from 'vue';
import { useWeatherStore } from '../stores/WheatherStore';

const store = useWeatherStore();
const weatherData = computed(() => store.data);

const KelvinACentrigrados = (grados) => {
  return parseInt(grados - 273.15, 10);
};
</script>



<template>
    <div v-if="weatherData">
      <p>Clima en {{ weatherData.name }}</p>
      <p>Temperatura actual: {{ KelvinACentrigrados(weatherData.main.temp) }} &#8451;</p>
      <p>Temperatura máxima: {{ KelvinACentrigrados(weatherData.main.temp_max) }} &#8451;</p>
      <p>Temperatura mínima: {{ KelvinACentrigrados(weatherData.main.temp_min) }} &#8451;</p>
    </div>
    <div v-else>
      <p>Agrega tu ciudad y el país, el resultado se mostrará aquí</p>
    </div>
  </template>
  