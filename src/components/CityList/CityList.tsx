import { FC } from "react";

import { CityItem } from "@/components";

import { CityListProps } from "./CityList.props";

export const CityList: FC<CityListProps> = ({ list, detailWeather, click }) => {
  return (
    <ul>
      {list &&
        list.map(({ id, name, country }) => {
          return (
            <CityItem
              key={id}
              cityData={{ name, country }}
              detailWeather={detailWeather}
              click={() => click(name, country)}
            />
          );
        })}
    </ul>
  );
};
