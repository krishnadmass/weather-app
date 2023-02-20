const baseUrl = process.env.REACT_APP_OPENWEATHER_API_BASEURL;

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
