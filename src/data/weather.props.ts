export interface IWeatherData {
  city: string;
  temperature: number;
  description: string;
}

export interface ISearchCity {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}

export interface ICurrentCityWeather {
  current: {
    temp_c: number;
    condition: { text: string; icon: string };
  };
  location: {
    [x: string]: string | number;
  };
}

//   { city: "New York", temperature: 22, description: "Sunny" },
//   { city: "Los Angeles", temperature: 26, description: "Cloudy" },
//   { city: "Chicago", temperature: 18, description: "Rainy" },
//   { city: "Houston", temperature: 30, description: "Hot" },
//   { city: "Phoenix", temperature: 35, description: "Sunny" },
//   { city: "Philadelphia", temperature: 20, description: "Windy" },
//   { city: "San Antonio", temperature: 28, description: "Humid" },
//   { city: "San Diego", temperature: 24, description: "Sunny" },
//   { city: "Dallas", temperature: 29, description: "Hot" },
//   { city: "San Jose", temperature: 25, description: "Clear" },
//   { city: "Austin", temperature: 31, description: "Hot" },
//   { city: "Jacksonville", temperature: 27, description: "Thunderstorms" },
//   { city: "Fort Worth", temperature: 28, description: "Sunny" },
//   { city: "Columbus", temperature: 21, description: "Partly Cloudy" },
//   { city: "Charlotte", temperature: 23, description: "Sunny" },
//   { city: "San Francisco", temperature: 18, description: "Foggy" },
//   { city: "Indianapolis", temperature: 20, description: "Rainy" },
//   { city: "Seattle", temperature: 17, description: "Rainy" },
//   { city: "Denver", temperature: 19, description: "Clear" },
//   { city: "Washington", temperature: 22, description: "Sunny" },
//   { city: "Boston", temperature: 16, description: "Windy" },
//   { city: "El Paso", temperature: 32, description: "Hot" },
//   { city: "Nashville", temperature: 24, description: "Partly Cloudy" },
//   { city: "Detroit", temperature: 18, description: "Cloudy" },
//   { city: "Oklahoma City", temperature: 27, description: "Sunny" },
//   { city: "Portland", temperature: 15, description: "Rainy" },
//   { city: "Las Vegas", temperature: 33, description: "Sunny" },
//   { city: "Memphis", temperature: 26, description: "Thunderstorms" },
//   { city: "Louisville", temperature: 22, description: "Clear" },
//   { city: "Baltimore", temperature: 21, description: "Windy" },
//   { city: "Milwaukee", temperature: 19, description: "Rainy" },
//   { city: "Albuquerque", temperature: 28, description: "Hot" },
//   { city: "Tucson", temperature: 34, description: "Sunny" },
//   { city: "Fresno", temperature: 29, description: "Clear" },
//   { city: "Sacramento", temperature: 27, description: "Sunny" },
//   { city: "Mesa", temperature: 36, description: "Hot" },
//   { city: "Kansas City", temperature: 20, description: "Windy" },
//   { city: "Atlanta", temperature: 25, description: "Humid" },
//   { city: "Miami", temperature: 28, description: "Thunderstorms" },
// ];
