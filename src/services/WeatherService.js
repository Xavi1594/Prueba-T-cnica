import axios from 'axios';

export const fetchWeatherData = async (city, country) => {
  const appId = 'fac12ba0ddebf686db88fb1b1cca327f';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error.response.status === 404) {
      throw new Error('La ciudad o el país no existe');
    } else {
      throw new Error('Hubo un problema al obtener los datos del clima');
    }
  }
};
