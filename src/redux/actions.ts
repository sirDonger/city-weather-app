import * as Actions from './constants'
import { Action, Coordinates } from '../types'

export const fetchWeatherData = (payload: string): Action => ({
  type: Actions.FETCH_WEATHER_DATA,
  payload
})

export const removeWeatherData = (payload: Coordinates): Action => ({
  type: Actions.REMOVE_WEATHER_DATA,
  payload
})