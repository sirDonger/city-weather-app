export interface Action {
  type: string;
  payload: any
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface DailyInfo {
  temp: number;
  windSpeed: number;
  weather: string;
}

export interface CityData extends Coordinates {
  daily: DailyInfo[]
}