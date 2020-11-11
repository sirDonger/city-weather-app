import { Action, Coordinates } from '../types'

export interface ListProps {
  cities: string[];
  addCity(): Action;
  removeCity(): Action;
  fetchWeatherData(): Action;
  removeWeatherData(): Action;
}

export interface CityInfo {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: Coordinates
}