import axios from 'axios'
import { Coordinates, DailyInfo } from './types'

const API_KEY = '4bcb36b65a133c9e168dec0b9c709f65'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall?exclude=current,minutely,hourly,alerts'

export default function request(params: Coordinates) {
  return axios.get(`${BASE_URL}&lat=${params.lat}&lon=${params.lon}&appid=${API_KEY}`)
    .then(res => {
      let { data } = res
      return {
        lat: data.lat,
        lon: data.lon,
        daily: data.daily.map((d: any): DailyInfo => ({
          temp: d.temp.day,
          windSpeed: d.wind_speed,
          weather: d.weather[0].main
        }))
      }
    })
}