import { ExtendedForecastData, WeatherData } from "../../api/types";

export type WeatherState = {
    weatherData: WeatherData;
    extendedWeatherData: ExtendedForecastData[];
    isError: boolean;
}