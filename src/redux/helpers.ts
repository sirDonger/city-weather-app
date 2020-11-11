import { CityData, Coordinates } from '../types'

export const cityNameFilter = (data: string[], city: string): string[] => data.filter((c: string) => c !== city)
export const cityDataFilter = (data: CityData[], { lat, lon }: Coordinates): CityData[] => data.filter((d: CityData) => d.lat !== lat && d.lon !== lon)