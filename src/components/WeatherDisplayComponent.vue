<script setup>
import { computed, ref, watchEffect } from 'vue';
import { useWeatherStore } from '../stores/WeatherStore';
import { fetchWeatherData } from '../services/WeatherService';

const store = useWeatherStore();

const weatherData = computed(() => store.data);
const backgroundImage = ref('');
const weatherDescription = ref('');
const errorMessage = ref('');

const temperatureCelsius = (degrees) => {
  return parseInt(degrees - 273.15, 10);
};

const images = import.meta.globEager('../assets/img/*.{avif,webp,jpg,png}');

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

    errorMessage.value = '';
  } else {
    backgroundImage.value = '';
    errorMessage.value = 'No se pudo obtener los datos del clima';
  }
});

const searchWeather = async () => {
  if (store.city === '' || store.country === '') {
    errorMessage.value = 'Ambos campos son obligatorios';
    return;
  }

  try {
    const weatherData = await fetchWeatherData(store.city, store.country);
    store.updateWeatherData(weatherData);
    errorMessage.value = '';
  } catch (error) {
    console.error(error);
    errorMessage.value = 'Error al obtener los datos del clima';
  }
};
</script>

<template>
  <div class="weather-display" v-if="weatherData && weatherData.main" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
    <p class="weather-place">Clima en <span>{{ weatherData.name }}</span></p>
    <p class="temperature-actual">{{ temperatureCelsius(weatherData.main.temp) }} &#8451;</p>
    <p class="temperature-max">Max: {{ temperatureCelsius(weatherData.main.temp_max) }} &#8451;</p>
    <p class="temperature-min">Min: {{ temperatureCelsius(weatherData.main.temp_min) }} &#8451;</p>

   
  </div>
</template>

<style scoped>
.weather-display {
  margin-top: 0;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
}

.weather-display p {
  margin-bottom: 0.5rem;
  color: #06283D;
  font-weight: 500;
  text-transform: capitalize;
}

.weather-place {
  font-size: 2em;
  text-align: center;
}

span {
  color: #DC3545;
  text-decoration: double;
  text-transform: capitalize;
}

.temperature-actual {
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0,0,0,0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0,0,0,0.25);
  text-align: center;
}

.temperature-max,
.temperature-min {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
</style>
