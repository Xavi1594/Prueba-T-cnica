import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import WeatherFormComponent from '@/components/WeatherFormComponent.vue';

describe('WeatherForm', () => {
  it('should have an input field', async () => {
    const pinia = createPinia();
    const wrapper = mount(WeatherFormComponent, {
      global: {
        plugins: [pinia],
      },
    });

    const inputField = wrapper.find('input');
    expect(inputField.exists()).toBe(true);
    expect(inputField.element.nodeName).toBe('INPUT');
  });

  it('should have a select field', async () => {
    const pinia = createPinia();
    const wrapper = mount(WeatherFormComponent, {
      global: {
        plugins: [pinia],
      },
    });

    const selectField = wrapper.find('select');
    expect(selectField.exists()).toBe(true);
    expect(selectField.element.nodeName).toBe('SELECT');
  });
  
});
