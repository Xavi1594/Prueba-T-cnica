import { mount } from '@vue/test-utils'
import WeatherDisplayComponent from '@/components/WeatherDisplayComponent.vue'

test('displays error message when no weather data is available', () => {
  const wrapper = mount(WeatherDisplayComponent, {
    global: {
      mocks: {
        useWeatherStore: () => ({ data: null, city: '', country: '' }),
      },
    },
  })

  expect(wrapper.text()).toContain('No se pudo obtener los datos del clima')
})
test('displays weather data when it is available', () => {
    const wrapper = mount(WeatherDisplayComponent, {
      global: {
        mocks: {
          useWeatherStore: () => ({
            data: {
              name: 'Barcelona',
              main: { temp: 293.15, temp_max: 295.15, temp_min: 291.15 },
            },
            city: 'Barcelona',
            country: 'ES',
          }),
        },
      },
    })
  
    expect(wrapper.text()).toContain('Clima en Barcelona')
    expect(wrapper.text()).toContain('20 ºC') 
    expect(wrapper.text()).toContain('Max: 22 ºC') 
    expect(wrapper.text()).toContain('Min: 18 ºC') 
  })
  
