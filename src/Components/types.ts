import { Action, Coordinates, CityData, DailyInfo } from '../types'

// List interfaces
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

// Weather table interfaces
export interface TableProps {
  cities: string[];
  data: CityData[]
}

export type Order = 'asc' | 'desc'

export interface HeaderProps {
  order: Order;
  orderBy: keyof DailyInfo;
  onRequestSort(property: keyof DailyInfo | string): void;
}