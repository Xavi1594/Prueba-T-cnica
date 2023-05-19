<template>
  <div>
    <h1>El tiempo en tú ciudad</h1>
    
    <form class="weather-form" @submit.prevent="searchWeather">
      <div class="mb-3">
        <input type="text" class="form-control" v-model="city" placeholder="Escribe la ciudad">
      </div>
      <div class="mb-3">
        <select class="form-select" v-model="country">
          <option value="">Selecciona un país</option>
          <option value="ES">España</option>
          <option value="FR">Francia</option>
          <option value="AR">Argentina</option>
          <option value="CN">China</option>
          <option value="MX">México</option>
          <option value="CA">Canadá</option>
          <option value="GB">Reino Unido</option>
          <option value="IN">India</option>
          <option value="IT">Italia</option>
        </select>
      </div>
      <button class="btn" type="submit">Obtener clima</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useWeatherStore } from '../stores/WeatherStore';
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

<style scoped>
h1 {
  color: #06283D;
  width: 80%;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  padding-left: 32px;
}

.weather-form {
  color: #06283D;
  width: 80%;
  font-size: 18px;
  font-weight: 500;
}

select,
input::placeholder {
  font-size: 18px;
  font-weight: 500;
  color: #06283D;
}

.btn {
  cursor: pointer;
  color: #fff;
  background: #26bc38;
  width: 100%;
}

.btn:hover {
  color: #fff;
  background: green;
  letter-spacing: 1px;
}
</style>
