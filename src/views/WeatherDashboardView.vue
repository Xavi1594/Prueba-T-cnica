<script setup>
import WeatherFormComponent from '../components/WeatherFormComponent.vue';
import WeatherDisplayComponent from '../components/WeatherDisplayComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
</script>

<template>
  <div>
    <HeaderComponent />

    <div class="view-container">
      <div class="components-container">
        <WeatherDisplayComponent />
        <WeatherFormComponent />
      </div>
    </div>
  </div>
</template>

<style scoped>
.view-container {
  display: flex;
  background:  #3498db;
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
  width: 100%;
}
</style>
