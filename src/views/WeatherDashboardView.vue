<script setup>
import WeatherFormComponent from '../components/WeatherFormComponent.vue';
import WheaterDisplayComponent from '../components/WheaterDisplayComponent.vue';


</script>
<template>
  <div class="view-container">
    <WeatherFormComponent />
    <WheaterDisplayComponent />
  </div>
</template>

<style scoped>
.view-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f8ff;
  font-family: Arial, sans-serif;
  padding: 2rem;
  box-sizing: border-box;
}
</style>





