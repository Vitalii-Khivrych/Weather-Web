import axios from "axios";

import { ICurrentCityWeather, ISearchCity } from "@/data/weather.props";

const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "a92243ce8f3b4616ac6220814242306";

export async function fetchSearchCity(query: string) {
  try {
    const { data } = await axios.get<ISearchCity[]>(
      `${BASE_URL}/search.json?key=${API_KEY}&q=${query}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export async function fetchCurrentCity(query: string, country: string) {
  try {
    const { data } = await axios.get<ICurrentCityWeather>(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${query}%20${country}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
