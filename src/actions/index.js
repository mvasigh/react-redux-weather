import axios from 'axios';

const API_KEY = '4276e15ec83f6f1864735df02c798735';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // returns promise

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
