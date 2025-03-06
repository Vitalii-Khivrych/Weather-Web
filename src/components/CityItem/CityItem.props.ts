import { ICurrentCityWeather } from "@/data/weather.props";

export interface ICityItem {
  cityData: { name: string; country: string };
  detailWeather?: ICurrentCityWeather[];
  // favorite?: boolean;
  click?: () => void;
}
