import { ICurrentCityWeather } from "@/data/weather.props";

export interface ICityWeatherProps {
  cityWeather: ICurrentCityWeather[] | undefined;
  // favorite: boolean;
  // click: () => void;
}
