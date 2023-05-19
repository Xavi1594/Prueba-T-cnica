<script setup>
import { computed, ref, watchEffect } from 'vue';
import { useWeatherStore } from '../stores/WeatherStore';

const store = useWeatherStore();
const weatherData = computed(() => store.data);

const KelvinToCelsius = (degrees) => {
  return parseInt(degrees - 273.15, 10);
};

const images = import.meta.globEager('../assets/img/*.{avif,webp,jpg,png}');

const backgroundImage = ref('');

const temperatureCelsius = (degrees) => {
  return KelvinToCelsius(degrees);
};

watchEffect(() => {
  if (weatherData.value && weatherData.value.main) {
    const tempCelsius = temperatureCelsius(weatherData.value.main.temp);
    if (tempCelsius >= 30) {
      backgroundImage.value = `url(${images['../assets/img/frio.avif']?.default || ''})`;
    } else if (tempCelsius >= 17) {
      backgroundImage.value = `url(${images['../assets/img/calor-transformed.webp']?.default || ''})`;
    } else {
      backgroundImage.value = `url(${images['../assets/img/paraguas.webp']?.default || ''})`;
    }
  }
});
</script>

<template>
  <div class="weather-display" v-if="weatherData && weatherData.main" :style="{ backgroundImage: backgroundImage }">
    <p>Clima en {{ weatherData.name }}</p>
    <p class="temperature-actual">Temperatura actual: {{ temperatureCelsius(weatherData.main.temp) }} &#8451;</p>
    <p class="temperature-max">Temperatura máxima: {{ temperatureCelsius(weatherData.main.temp_max) }} &#8451;</p>
    <p class="temperature-min">Temperatura mínima: {{ temperatureCelsius(weatherData.main.temp_min) }} &#8451;</p>
  </div>
  <div v-else>
    <p>Agrega tu ciudad y país; el resultado se mostrará aquí</p>
  </div>
</template>

<style scoped>
.weather-display {
  margin-top: 2rem;
  background: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 2rem auto;
}

.weather-display p {
  margin-bottom: 0.5rem;
}

.temperature-actual {
  font-size: 3rem;
  font-weight: bold;
}

.temperature-max,
.temperature-min {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
