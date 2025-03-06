import { FC } from "react";

import { CityWeather } from "../CityWeather/CityWeather";

import { ICityItem } from "./CityItem.props";

export const CityItem: FC<ICityItem> = ({ cityData: { name, country }, detailWeather, click }) => {
  const getWeatherDetail = detailWeather?.filter(
    ({ location }) => location.country === country && location.name === name
  );
  return (
    <li onClick={click}>
      {name} | <span>{country}</span>
      {getWeatherDetail?.length !== 0 && <CityWeather cityWeather={getWeatherDetail} />}
    </li>
  );
};
