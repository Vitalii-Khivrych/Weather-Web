import { FC } from "react";

import { ICityWeatherProps } from "./CityWeather.props";

export const CityWeather: FC<ICityWeatherProps> = ({ cityWeather }) => {
  if (typeof cityWeather === "undefined") return;

  // console.log("cityWeather", cityWeather);

  const { current } = cityWeather[0];
  return (
    <div>
      <div>
        <p>{current.temp_c}</p>
        <div>
          <span>{current.condition.text}</span>
          <img src={current.condition.icon} alt="Weather data by WeatherAPI.com" />
        </div>
      </div>
      {/* <button onClick={click}>{favorite ? "Remove favorite" : "Add to favorite"}</button> */}
    </div>
  );
};
