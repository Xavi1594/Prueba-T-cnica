<template>
  <div class="weather-display" v-if="weatherData && weatherData.main" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
    <p>Clima en {{ weatherData.name }}</p>
    <p class="temperature-actual"><i class="bi bi-thermometer-high"></i>{{ temperatureCelsius(weatherData.main.temp) }} &#8451;</p>
    <p class="temperature-max">Temperatura máxima: {{ temperatureCelsius(weatherData.main.temp_max) }} &#8451;</p>
    <p class="temperature-min">Temperatura mínima: {{ temperatureCelsius(weatherData.main.temp_min) }} &#8451;</p>

    <p v-if="weatherDescription">Condiciones climáticas: {{ getWeatherConditionInSpanish(weatherDescription) }}</p>
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue';
import { useWeatherStore } from '../stores/WeatherStore';
import { fetchWeatherData } from '../services/WeatherService';

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

const weatherDescription = ref('');

const getWeatherConditionInSpanish = (condition) => {
  const conditionsMap = {
    'clear sky': 'Despejado',
    'few clouds': 'Pocas nubes',
    'scattered clouds': 'Nubes dispersas',
    'broken clouds': 'Nubes rotas',
    'shower rain': 'Lluvia',
    'rain': 'Lluvia',
    'thunderstorm': 'Tormenta',
    'snow': 'Nieve',
    'mist': 'Niebla'
  };

  return conditionsMap[condition] || condition;
};

watchEffect(() => {
  if (weatherData.value && weatherData.value.weather && weatherData.value.weather.length > 0) {
    const weatherCondition = weatherData.value.weather[0].main.toLowerCase();

    if (weatherCondition.includes('clear')) {
      backgroundImage.value = images['../assets/img/sol.png']?.default || '';
    } else if (weatherCondition.includes('clouds')) {
      backgroundImage.value = images['../assets/img/solynubes.png']?.default || '';
    } else if (weatherCondition.includes('rain')) {
      backgroundImage.value = images['../assets/img/lluvia.png']?.default || '';
    } else if (weatherCondition.includes('snow')) {
      backgroundImage.value = images['../assets/img/nieve.png']?.default || '';
    } else {
      backgroundImage.value = images['../assets/img/sol.png']?.default || '';
    }
  }
});
</script>

<style scoped>
.weather-display {
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 2rem auto;
}

.weather-display p {
  margin-bottom: 0.5rem;
  color: #06283D;
  font-size: 22px;
  font-weight: 500;
  text-transform: capitalize;
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
