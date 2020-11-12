import { CityData, Coordinates } from '../types'

export const cityNameFilter = (data: string[], city: string): string[] => data.filter((c: string) => c !== city)
export const cityDataFilter = (data: CityData[], coord: Coordinates): CityData[] => 
  data.filter((d: CityData) => d.lat !== +coord.lat.toFixed(2) && d.lon !== +coord.lon.toFixed(2))