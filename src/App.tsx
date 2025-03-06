import { useState } from "react";

import "./App.css";

import { ISearchCity, ICurrentCityWeather } from "./data/weather.props";

import { fetchCurrentCity, fetchSearchCity } from "./services/api";

import { CityList } from "./components";

function App() {
  const [search, setSearch] = useState<ISearchCity[]>([]);
  const [detailWeather, setDetailWeather] = useState<ICurrentCityWeather[]>([]);
  // const [favoriteCities, setFavoriteCities] = useState<ICurrentCityWeather[]>([]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 2) return;
    const foundCities = await fetchSearchCity(e.target.value);

    if (typeof foundCities === "string") return;
    setSearch(foundCities);
  };

  const onClickToCity = async (nameCity: string, country: string) => {
    const data = await fetchCurrentCity(nameCity, country);

    if (typeof data === "string") return;
    if (detailWeather.length === 0) {
      setDetailWeather([data]);
      return;
    }
    if (
      detailWeather.find((itm) => itm.location.region === data.location.region) &&
      detailWeather.length !== 0
    ) {
      setDetailWeather((prev) => [...prev]);
      return;
    }
    setDetailWeather((prev) => [...prev, data]);
  };

  // const onClickAddFavorite = (name: IWeatherData) => {
  //   if (favoriteCities.length === 0) {
  //     setFavoriteCities([city]);
  //     return;
  //   }
  //   if (favoriteCities.find((itm) => itm === city) !== undefined) return;
  //   setFavoriteCities((prev) => [...prev, city]);
  // };

  // const onClickRemoveFavorite = (city: IWeatherData) => {
  //   const removeCity = favoriteCities.filter((itm) => itm !== city);
  //   setFavoriteCities(removeCity);
  // };

  // const filteredSearch = weatherData.filter((itm) =>
  //   itm.city.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <>
      <h1>Weather test App</h1>

      <div className="card">
        <input
          onChange={handleSearch}
          required
          minLength={3}
          type="search"
          placeholder="Min 3 words"
        />
        <CityList list={search} detailWeather={detailWeather} click={onClickToCity} />
      </div>

      {/* <div>
        <CityList list={favoriteCities} click={onClickRemoveFavorite} favorite />
      </div> */}
    </>
  );
}

export default App;
