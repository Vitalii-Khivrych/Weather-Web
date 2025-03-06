import axios from "axios";

import { ICurrentCityWeather, ISearchCity } from "@/data/weather.props";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export async function fetchSearchCity(query: string) {
  try {
    const { data } = await axios.get<ISearchCity[]>(
      `${baseUrl}/search.json?key=${apiKey}&q=${query}`
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
      `${baseUrl}/current.json?key=${apiKey}&q=${query}%20${country}`
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
