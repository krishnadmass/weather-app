const baseUrl = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city: string | { lat: number; lng: number }) => {
  let url = `${baseUrl}/weather?q=${city}&units=standard&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  if (typeof city === 'object') {
    url = `${baseUrl}/weather?lat=${city.lat}&lon=${city.lng}&units=standard&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  }
  return await (await fetch(url)).json();
};

export const fetchExtendedForecastData = async (city: string | { lat: number; lng: number }) => {
  let url = `${baseUrl}/forecast?q=${city}&units=standard&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  if (typeof city === 'object') {
    url = `${baseUrl}/forecast?lat=${city.lat}&lon=${city.lng}&units=standard&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  }

  return await (await fetch(url)).json();
};

// https://api.openweathermap.org/data/2.5/weather?q=vellore&units=standard&appid=027df8b4778215b63c99d170235c84b5