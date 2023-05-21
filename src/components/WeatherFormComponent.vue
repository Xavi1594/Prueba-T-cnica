<script setup>
import { ref } from 'vue';
import { useWeatherStore } from '../stores/WeatherStore';
import { fetchWeatherData } from '../services/WeatherService';

const city = ref('');
const cityInput = ref('');
const country = ref('');
const errorMessage = ref('');
const store = useWeatherStore();

const searchWeather = async () => {
  if (cityInput.value === '' || country.value === '') {
    alert('Ambos campos son obligatorios');
    return;
  }

  try {
    const weatherData = await fetchWeatherData(cityInput.value, country.value);
    store.updateWeatherData(weatherData);
    emit('searchWeather', cityInput.value, country.value);

  } catch (error) {
    console.error(error);
  }
};
</script>


<template>
  <div class="container">

    <form class="weather-form" @submit.prevent="searchWeather">
      <input type="text" class="form-control " :value="cityInput" @input="cityInput = $event.target.value"
        placeholder="Ciudad" />

      <select class="form-select form-select-lg mb-3 mt-3" v-model="country">
        <option value="">País</option>
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

      <button class="btn mt-2" type="submit">Obtener clima</button>
      <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  border-radius: 10px;
}

.weather-form {
  color: #06283d;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  align-items: center;
  width: 60%;
}

select,
input {
  width: 100%;

  padding: 10px 15px;
  border: none;
  outline: none;
  background-color: #fff;
  border-radius: 16px 0px 16px 0px;
  border-bottom: 3px solid #DF8E00;
  text-transform: capitalize;

  color: #313131;
  font-size: 22px;
  font-weight: 300;
  transition: 0.2s ease-out;
}

.btn {
  cursor: pointer;
  color: #fff;
  background: linear-gradient(rgb(234, 159, 20), rgba(234, 159, 20, 0.8));
  width: 100%;
}

.btn:hover {
  color: #fff;
  background: green;
  letter-spacing: 2px;
  border-radius: 5px;
}

.error-message {
  color: red;
  margin-top: 1em;
}
</style>