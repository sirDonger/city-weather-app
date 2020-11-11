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
  name: string;
  daily: DailyInfo[];
}

export interface State {
  weatherData: CityData[];
  cities: string[];
  error?: any;
}

export interface HeaderCell {
  label: string;
  id: string;
  numeric: boolean;
  sort: boolean;
}