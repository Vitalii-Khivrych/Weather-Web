import { ICurrentCityWeather, ISearchCity } from "@/data/weather.props";

export interface CityListProps {
  list: ISearchCity[];
  detailWeather?: ICurrentCityWeather[];
  favorite?: boolean;
  click: (cityName: string, country: string) => void;
}
