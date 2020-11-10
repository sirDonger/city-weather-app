import { CityData, Coordinates } from '../types'

export const cityFilter = (data: CityData[], { lat, lon }: Coordinates): CityData[] => data.filter((d: CityData) => d.lat !== lat && d.lon !== lon)