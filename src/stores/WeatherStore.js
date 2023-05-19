import { defineStore } from 'pinia';

export const useWeatherStore = defineStore({
  id: 'weather',
  state: () => ({
    data: null,
  }),
  actions: {
    updateWeatherData(data) {
      this.data = data;
    },
  },
});
