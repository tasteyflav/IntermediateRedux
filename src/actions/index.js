import axios from 'axios';

const API_KEY = 'afbb01f1b18d549a2d15dc26d8446352';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},jp`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}