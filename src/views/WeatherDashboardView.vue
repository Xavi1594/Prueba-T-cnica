<script setup>
import WeatherFormComponent from '../components/WeatherFormComponent.vue';



</script>
<template>
  <div class="view-container">
    <WeatherFormComponent />
  
  </div>
</template>

<style scoped>
.view-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #3498db, #f1c40f);
  background-size: cover;
  font-family: Arial, sans-serif;
  padding: 2rem;
  box-sizing: border-box;
}
</style>





