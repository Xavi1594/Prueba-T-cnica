<script setup>

import WeatherFormComponent from '../components/WeatherFormComponent.vue';
import WeatherDisplayComponent from '../components/WeatherDisplayComponent.vue';




</script>
<template>
  <div class="view-container">
    <div class="components-container">

    <WeatherDisplayComponent />
    <WeatherFormComponent />
 
  </div>
  </div>
</template>
<style scoped>


.view-container {
  display: flex;
  background: linear-gradient(135deg, #3498db, #f1c40f);
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  
}

.components-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px; 
  width: 100%;
}
</style>




